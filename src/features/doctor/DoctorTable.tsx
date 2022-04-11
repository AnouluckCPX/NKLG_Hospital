import React from 'react'
import { Segment } from 'semantic-ui-react'
import FilterTable from '../dashborad/FilterTable'

export default function DoctorTable() {
     return (
          <Segment style={{ padding: '2rem' }}>

               <h3 style={{ paddingBottom: '1rem' }}>Latest patient data</h3>

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
                         <tr>
                              <th style={{ paddingLeft: '.8rem' }}>
                                   <input type="checkbox" />
                              </th>
                              <td>DC124</td>
                              <td>...</td>
                              <td>Dr. John</td>
                              <td>Lilki</td>
                              <td>Medicine</td>
                              <td>020 566657777</td>
                              <td>
                                   <a style={{ marginRight: '1rem' }} href="">Edit</a>
                                   <a href="">Delete</a>
                              </td>
                         </tr>
                         <tr>
                              <th style={{ paddingLeft: '.8rem' }}>
                                   <input type="checkbox" />
                              </th>
                              <td>DC124</td>
                              <td>...</td>
                              <td>Dr. Jamie</td>
                              <td>Harington</td>
                              <td>Medicine</td>
                              <td>020 566657777</td>
                              <td>
                                   <a style={{ marginRight: '1rem' }} href="">Edit</a>
                                   <a href="">Delete</a>
                              </td>
                         </tr>
                    </tbody>
               </table>

          </Segment>
     )
}
