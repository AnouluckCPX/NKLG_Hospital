import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Employee } from "../model/Employee";
import { Department } from "../model/Department";
import { format } from 'date-fns';


export default class EmployeeStore {
     employeeRegistry = new Map<string, Employee>();
     departmentRegistry = new Map<string, Department>();
     selectedEmployee: Employee | undefined = undefined;
     editMode = false;
     loading = false;
     loadingInitial = false;

     

     constructor() {
          makeAutoObservable(this)
     }

     get employeesByDate() {
          return Array.from(this.employeeRegistry.values()).sort((a, b) =>
               a.craete_date!.getTime() - b.craete_date!.getTime()
          )
     }

     get groupedEmployees(){
          return Object.entries(
               this.employeesByDate.reduce((employees, employee)=>{
                    const date = format(employee.craete_date!,'dd MM yyyy')
                    employees[date] = employees[date] ? [...employees[date], employee] : [employee];
                    return employees;
               }, {} as {[key: string]: Employee[]})
          )
     }

     loadEmployees = async () => {
          this.loadingInitial = true;
          try {
               const employees = await agent.Employees.list();
               employees.forEach(employee => {
                    this.setEmployee(employee);
               })
               this.setLoadingInitial(false);
          } catch (error) {
               console.log(error);
               this.setLoadingInitial(false);
          }
     }

     loadEmployee = async (emp_id: string) => {
          let employee = this.getEmployee(emp_id);
          if (employee) {
               this.selectedEmployee = employee;
               return employee;
          } else {
               this.loadingInitial = false;
               try{
                    employee = await agent.Employees.details(emp_id);
                    console.log(employee)
                    this.setEmployee(employee);
                    runInAction(()=>{
                         this.selectedEmployee = employee;
                    })
                    this.setLoadingInitial(false);
                    return employee;
               } catch (error) {
                    console.log(error);
                    this.setLoadingInitial(false);
               }
          }
     }

     loadDepartment =async () => {
          try {
               const departments = await agent.Departments.list();
               departments.forEach(department =>{
                    this.setDepartment(department);
               })
          } catch (error) {
               console.log(error);
          }
     }

     private setEmployee = (employee: Employee) => {
          employee.craete_date = new Date(employee.craete_date!);
          this.employeeRegistry.set(employee.emp_id, employee);
     }

     private getEmployee = (emp_id: string) => {
          return this.employeeRegistry.get(emp_id);
     }

     setLoadingInitial = (state: boolean) => {
          this.loadingInitial = state;
     }

     createEmployee = async (employee: Employee) => {
          this.loading = true;
          try {
               await agent.Employees.create(employee)
               runInAction(() => {
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

     deleteEmployee = async (emp_id: string) => {
          this.loading = true;
          try {
               await agent.Employees.delete(emp_id);
               runInAction(() => {
                    this.employeeRegistry.delete(emp_id);
                    this.loading = false;
               })
          } catch (error) {
               console.log(error);
               runInAction(() => {
                    this.loading = false;
               })
          }
     }


     private setDepartment = (department: Department) => {
          this.departmentRegistry.set(department.dep_id, department)
     }

}