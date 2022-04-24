import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Button, Item, Segment } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store';

export default observer(function DoctorTable() {

     const { employeeStore } = useStore();
     const { employeesByDate } = employeeStore;

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
                              employeesByDate.map(item => {
                                   return (
                                        <tr key={item.emp_id}>
                                             <th style={{ paddingLeft: '.8rem' }}>
                                                  <input type="checkbox" />
                                             </th>
                                             <td>{item.emp_id}</td>
                                             <td>...</td>
                                             <td>{item.emp_name}</td>
                                             <td>{item.emp_surname}</td>
                                             <td>{item.dep_id}</td>
                                             <td>{item.phone}</td>
                                             <td>
                                                  <Button
                                                       style={{ marginRight: '1rem' }}
                                                       onClick={() => employeeStore.selectEmployee(item.emp_id)}
                                                       content='Edit' />
                                                  {/* <Link style={{ marginRight: '1rem' }}
                                                    onClick={} /> */}
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
})
