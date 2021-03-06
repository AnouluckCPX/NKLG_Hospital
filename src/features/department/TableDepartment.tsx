import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react'
import agent from '../../app/api/agent';
import { Department } from '../../app/model/Department'

export default observer(function TableDepartment() {

     const [deparment, setDepartment] = useState<Department[]>([]);

     useEffect(() => {
          agent.Departments.list()
               .then(response => {
                    setDepartment(response);
               })
     }, [])

     return (
          <Segment style={{ padding: '2rem' }}>
               <h3 style={{ paddingBottom: '1rem' }}>Latest Department data</h3>

               <table className="ui basic table mytable">
                    <thead>
                         <tr className='' style={{ background: '#EDEBEB', paddingLeft: '1rem' }}>
                              <th>
                                   <input type="checkbox" />
                              </th>
                              <th>ID Department</th>
                              <th>Department Name</th>
                              <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>

                         {
                              deparment.map((item: any) => {
                                   return (
                                        <tr key={item.dep_id}>
                                             <th style={{ paddingLeft: '.8rem' }}>
                                                  <input type="checkbox" />
                                             </th>
                                             <td>{item.dep_id}</td>
                                             <td>{item.dep_name}</td>
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
})
