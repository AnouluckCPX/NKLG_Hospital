import axios, { AxiosResponse } from 'axios';
import { Department } from '../model/Department';
import { Employee } from '../model/Employee';

const sleep = (delay: number) => {
     return new Promise((resolve)=> {
          setTimeout(resolve, delay)
     })
}

axios.defaults.baseURL = "https://localhost:7117/api";

axios.interceptors.response.use(async response => {
     try {
          await sleep(1000);
          return response;
     } catch (error) {
          console.log(error);
          return await Promise.reject(error);
     }
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
     get: <T>(url: string) => axios.get<T>(url).then(responseBody),
     post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
     put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
     del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Employees = {
     list: () => requests.get<Employee[]>('/Employee'),
     details: (emp_id: string) => requests.get<Employee>(`/Employee/${emp_id}`),
     create: (employee: Employee) => axios.post<void>(`/Employee/`, employee),
     update: (employee: Employee) => axios.put<void>(`Employee/${employee.emp_id}`, employee),
     delete: (emp_id: string) => axios.delete<void>(`/Employee/${emp_id}`)
}

const Departments = {
     list: () => requests.get<Department[]>('/Department')
}

const agent = {
     Employees,
     Departments
}

export default agent;