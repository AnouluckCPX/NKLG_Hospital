import React from 'react'
import { Button, Grid } from 'semantic-ui-react'
import { IconDate, IconSort } from '../../app/layout/IconMenuFilter'

export default function DoctorFilter() {
     return (
          <div style={{ width: '100%' }}>

               <form className="ui form" style={{ padding: '1em' }}>
                    <div className='' >
                         <div className='row'>
                              <Grid>
                                   <Grid.Column width='3' >
                                        <Button className='ui button btn-filter'  >
                                             <span style={{ paddingRight: '8px' }}>
                                                  <IconSort />
                                             </span>
                                             Sort by
                                        </Button>
                                   </Grid.Column>
                                   <Grid.Column width='3'>
                                        <Button className='ui button btn-filter' >
                                             <span style={{ paddingRight: '8px' }}>
                                                  <IconDate />
                                             </span>
                                             Any Date
                                        </Button>
                                   </Grid.Column>
                                   <Grid.Column width='4'>
                                        <div className="ui left icon input  ">
                                             <i className="search icon"></i>
                                             <input className='' type="text" placeholder="Search..." />
                                        </div>
                                   </Grid.Column>
                                   <Grid.Column width='6' >
                                        <div style={{textAlign:'end'}} >
                                             <Button className='btn-create' content='New Doctor' />
                                        </div>
                                   </Grid.Column>
                              </Grid>
                         </div>
                    </div>
               </form>
          </div>
     )
}
