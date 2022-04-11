import React from 'react'
import { Segment } from 'semantic-ui-react'
import FilterTable from './FilterTable'

export default function TableAppoint() {
     return (
          <Segment style={{ padding: '2rem' }}>
               <h3 style={{ paddingBottom: '1rem' }}>Latest patient data</h3>
               <FilterTable />
               <table className="ui basic table mytable">
                    <thead>
                         <tr className='' style={{ background: '#EDEBEB',paddingLeft:'1rem' }}>
                              <th>No</th>
                              <th>Name Patien</th>
                              <th>Appointment</th>
                              <th>Doctor</th>
                              <th>Status</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr>
                              <td>1</td>
                              <td>John Lilki</td>
                              <td>September 14, 2013</td>
                              <td>Dr. Som</td>
                              <td>
                                   <span className='status-wait'>
                                        Wait
                                   </span>
                              </td>
                         </tr>
                         <tr>
                              <td>2</td>
                              <td>Jamie Harington</td>
                              <td>January 11, 2014</td>
                              <td>Dr. Som</td>
                              <td>
                                   <span className='status-succes'>
                                        Succes
                                   </span>
                              </td>
                         </tr>
                         <tr>
                              <td>3</td>
                              <td>John Lilki</td>
                              <td>September 14, 2013</td>
                              <td>Dr. Aek</td>
                              <td>
                                   <span className='status-wait'>
                                        Wait
                                   </span>
                              </td>
                         </tr>
                    </tbody>
               </table>
          </Segment>
     )
}
