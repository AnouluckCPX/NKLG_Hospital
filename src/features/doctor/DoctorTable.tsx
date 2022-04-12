import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react'
import agent from '../../app/api/agent'
import { Employee } from '../../app/model/Employee'

export default function DoctorTable() {

     const [employee, setEmployee] = useState<Employee[]>([]);

     useEffect(() => {
          agent.Employees.list()
               .then(response => {
                    setEmployee(response);
               })
     }, [])

     return (
          <Segment style={{ padding: '2rem' }}>

               <h3 style={{ paddingBottom: '1rem' }}>Latest Doctor data</h3>

               <table className="ui basic table mytable">
                    <thead>
                         <tr className='' style={{ background: '#EDEBEB', paddingLeft: '1rem' }}>
                              <th>
                                   <input type="checkbox" />
                              </th>
                              <th>ID Doctor</th>
                              <th>Image</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Department</th>
                              <th>Mobile No</th>
                              <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              employee.map((item: any) => {
                                   return (
                                        <tr key={item.emp_id}>
                                             <th style={{ paddingLeft: '.8rem' }}>
                                                  <input type="checkbox" />
                                             </th>
                                             <td>{item.emp_id}</td>
                                             <td>...</td>
                                             <td>{item.emp_name}</td>
                                             <td>{item.emp_surname}</td>
                                             <td>{item.dep_name}</td>
                                             <td>{item.phone}</td>
                                             <td>
                                                  <Link style={{ marginRight: '1rem' }} to={''} >Edit</Link>
                                                  <Link to={''}>Delete</Link>
                                             </td>
                                        </tr>
                                   )
                              })
                         }
                    </tbody>
               </table>

          </Segment>
     )
}
