import { observer } from 'mobx-react-lite'
import { Fragment } from 'react'
import { Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store'
import DoctorTable from './DoctorTable';

export default observer(function DoctorList() {
     const { employeeStore } = useStore();
     const { groupedEmployees } = employeeStore;

     return (
          <>
               <Segment style={{ padding: '2rem' }} C>
                    <h3 style={{ paddingBottom: '1rem' }}>Latest Doctor data</h3>
                    
                              
                    <table className="ui basic table mytable">
                         <thead>
                              <tr className='' style={{ background: '#EDEBEB', paddingLeft: '1rem' }}>
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
                                   groupedEmployees.map(([group, employees]) => (
                                         <Fragment key={group}>
                                                  {employees.map(employee =>
                                                       <DoctorTable key={employee.emp_id} employee={employee} />
                                             )}
                                        </Fragment>
                                   ))
                              }
                         </tbody>
                    </table>
               </Segment>
          </>
     )
})
