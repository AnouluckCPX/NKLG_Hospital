import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Card, Form, Grid, Header, Image, Item, ItemExtra, Label, List, Segment } from 'semantic-ui-react'
import { Employee } from '../../../app/model/Employee'
import moment from 'moment';



interface Props {
     employee: Employee
}

const LabelStyle = {
     display: 'inline-block',
     width: '100px',
     marginLeft: '5em',
     marginRight: '15em'
}

export default observer(function DoctorHeader({ employee }: Props) {
     const history = useHistory();
     return (
          <Grid>
               <Grid.Column width={14}>
                    <Segment.Group>
                         <Segment clearing>
                              <Segment basic>
                                   <Grid columns='three'>
                                        <Grid.Row>
                                             <Grid.Column width={3}>
                                                  <Image centered circular src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' size='small' />
                                             </Grid.Column>
                                             <Grid.Column width={8}>
                                                  <List style={{ paddingTop: '2em' }}>
                                                       <List.Item>
                                                            <List.Content><h3 style={{ paddingBottom: '.3em' }}>{employee.emp_id}</h3></List.Content>
                                                            <List.Content><h3 style={{ paddingBottom: '.3em' }}>{employee.emp_name} {employee.emp_surname}</h3></List.Content>
                                                            <List.Content><h3 style={{ paddingBottom: '.3em' }}>{moment(employee.dob).format('d-MM-yyyy')}</h3></List.Content>                                                       </List.Item>
                                                  </List>
                                             </Grid.Column>
                                             <Grid.Column width={2}>
                                                  <Item>
                                                       <Button onClick={()=> history.push(`/manage/${employee.emp_id}`)}>Edit</Button>
                                                       <Button color='red'>Delete</Button>
                                                  </Item>
                                             </Grid.Column>
                                        </Grid.Row>

                                   </Grid>
                              </Segment>
                              <Segment basic>
                                   <Grid>
                                        <Grid.Row>
                                             <div className="ui form">
                                                  <div className="inline ">
                                                       <label style={LabelStyle}>Gender</label>
                                                       <div className="ui basic large label">
                                                            <p>{employee.gender}</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Grid.Row>
                                        <span style={{ margin: '1em 3em' }} className='ui divider'></span>
                                        <Grid.Row>
                                             <div className="ui form">
                                                  <div className="inline ">
                                                       <label style={LabelStyle}>Department</label>
                                                       <div className="ui basic large label">
                                                            <p>{employee.dep_name}</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Grid.Row>
                                        <span style={{ margin: '1em 3em' }} className='ui divider'></span>
                                        <Grid.Row>
                                             <div className="ui form">
                                                  <div className="inline ">
                                                       <label style={LabelStyle}>Address</label>
                                                       <div className="ui basic large label">
                                                            <p>{employee.address}</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Grid.Row>
                                        <span style={{ margin: '1em 3em' }} className='ui divider'></span>
                                        <Grid.Row>
                                             <div className="ui form">
                                                  <div className="inline ">
                                                       <label style={LabelStyle}>Telephone</label>
                                                       <div className="ui basic large label">
                                                            <p>{employee.phone}</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Grid.Row>


                                   </Grid>
                              </Segment>
                         </Segment>

                    </Segment.Group>

               </Grid.Column>
          </Grid>
     )
})
