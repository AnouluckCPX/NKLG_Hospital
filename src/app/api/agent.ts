import axios, { AxiosResponse } from 'axios';
import { Department } from '../model/Department';
import { Employee } from '../model/Employee';

axios.defaults.baseURL = "https://localhost:7117/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
     get: <T>(url: string) => axios.get<T>(url).then(responseBody),
     post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
     put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
     del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Employees = {
     list: () => requests.get<Employee[]>('/Employee'),
     // details: (id: string) => requests.get<Employee>(`/Employee/${id}`),
     // create: (employee: Employee) => axios.post<void>('/Employee', employee),
     // update: (employee: Employee) => axios.put<void>(`Employee/${employee.emp_id}`, employee),
     // delete: (id: string) => axios.delete<void>(`/Employee/${id}`)
}

const Departments = {
     list: () => requests.get<Department[]>('/Department')
}

const agent = {
     Employees,
     Departments
}

export default agent;