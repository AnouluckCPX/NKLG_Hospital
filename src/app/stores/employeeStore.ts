import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Employee } from "../model/Employee";
import {format} from 'date-fns';

export default class EmployeeStore {
     employeeRegistry = new Map<string, Employee>();
     selectedEmployee: Employee | undefined = undefined;
     editMode = false;
     loading = false;
     loadingInitial = true;

     constructor() {
          makeAutoObservable(this)
     }

     get employeesByDate() {
          return Array.from(this.employeeRegistry.values()).sort((a, b) =>
          Date.parse(a.dob) - Date.parse(b.dob)
          )
     }

     // get groupedEmployees(){
     //      return Object.entries(
     //           this.employeesByDate.reduce((employees, employee)=>{
     //                const date = format(employee.craete_date!,'dd MM yyyy')
     //                employees[date] = employees[date] ? [...employees[date], employee] : [employee];
     //                return employees;
     //           }, {} as {[key: string]: Employee[]})
     //      )
     // }

     loadEmployees = async () => {
          // this.setLoadingInitial(true);
          try {
               const employees = await agent.Employees.list();
               employees.forEach(employee => {
                    employee.dob = employee.dob.split('T')[0];
                    this.employeeRegistry.set(employee.emp_id, employee);
               })
               this.setLoadingInitial(false);
          } catch (error) {
               console.log(error);
               this.setLoadingInitial(false);
          }
     }

     // loadEmployee = async (emp_id: string) => {
     //      let employee = this.getEmployee(emp_id);
     //      if (employee) {
     //           this.selectedEmployee = employee;
     //           return employee;
     //      }else{
     //           this.loadingInitial = true;
     //           try {
     //                employee = await age
     //           } catch (error) {
                    
     //           }
     //      }
     // }

     setLoadingInitial = (state: boolean) => {
          this.loadingInitial = state;
     }

     selectEmployee = (emp_id: string) => {
          this.selectedEmployee = this.employeeRegistry.get(emp_id);
     }

     cancelselectedEmployee = () => {
          this.selectedEmployee = undefined;
     }

     openForm = (emp_id?: string) => {
          emp_id ? this.selectEmployee(emp_id) : this.cancelselectedEmployee();
          this.editMode = true;
     }

     closeForm = ()  => {
          this.editMode = false;
     }

     createEmployee = async (employee: Employee) => {
          this.loading = true;
          try {
               await agent.Employees.create(employee)
               runInAction(()=>{
                    this.employeeRegistry.set(employee.emp_id, employee);
                    this.selectedEmployee = employee;
                    this.editMode = false;
                    this.loading = false;
               })
          } catch (error) {
               console.log(error);
               runInAction(() => {
                    this.loading = false;
               })
          }
     }

     // private setEmployee = (employee: Employee) => {
     //      employee.craete_date = new Date(employee.craete_date!);
     //      this.employeeRegistry.set(employee.emp_id, employee);
     // }

     // private getEmployee = (emp_id: string) => {
     //      return this.employeeRegistry.get(emp_id);
     // }

}