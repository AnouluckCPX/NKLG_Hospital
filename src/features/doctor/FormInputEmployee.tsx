import {
     Formik,
     Form,
} from 'formik'
import { values } from 'mobx';
import { observer } from 'mobx-react-lite'
import { stringify } from 'querystring';
import { ChangeEvent, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Button, Grid, Label, Segment, Select } from 'semantic-ui-react';
import agent from '../../app/api/agent';
import MyDateInput from '../../app/common/form/MyDateInput';
import MySelectGender from '../../app/common/form/MySelectGender';
import MySelectInput from '../../app/common/form/MySelectInput';
import MyTextArea from '../../app/common/form/MyTextArea';
import MyTextInput from '../../app/common/form/MyTextInput';
import { departmentOptions } from '../../app/common/options/departmentOption';
import { genderOptions } from '../../app/common/options/genderOption';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { Department } from '../../app/model/Department';
import { Employee } from '../../app/model/Employee';
import { useStore } from '../../app/stores/store';

export default observer(function FormInputEmployee() {
     const history = useHistory();

     const { employeeStore } = useStore();
     const { createEmployee, loading, loadingInitial, loadEmployee } = employeeStore;
     const { emp_id } = useParams<{ emp_id: string }>();

     const [employee, setEmployee] = useState<Employee>({
          emp_id: '',
          emp_name: '',
          emp_surname: '',
          gender: '',
          dob: null,
          address: '',
          phone: '',
          dep_ip: '',
          dep_name: '',
          craete_date: null,
          edit_date: null,
     });

     useEffect(() => {
          if (emp_id) loadEmployee(emp_id).then(employee => console.log(employee))
     }, [emp_id, loadEmployee])

     function handleFormSubmit(employee: Employee) {
          if (employee.emp_id.length >= 0) {
               let newEmployee = {
                    ...employee
               }
               createEmployee(newEmployee).then(() => {
                    // window.location.href=`/employees/${employee.emp_id}`
                    history.push(`/employees/${employee.emp_id}`)
               })
          } else {
               console.log('Errors')
          }
     }

     if (loadingInitial) return <LoadingComponent content='Loading employee...' />

     return (
          <Grid>
               <Grid.Column width='14'>
                    <Segment clearing>
                         <Formik
                              initialValues={employee}
                              onSubmit={values => handleFormSubmit(values)}
                         >{({ handleSubmit, isSubmitting, dirty }) => (
                              <Form className='ui form' onSubmit={handleSubmit} autoComplete='off' style={{ padding: '1em' }}>
                                   <MyTextInput label='ID Employee' name='emp_id' />

                                   <div className='two fields'>
                                        <MyTextInput label='First Name' name='emp_name' />
                                        <MyTextInput label='Last Name' name='emp_surname' />
                                   </div>

                                   <div className='two fields'>
                                        <MySelectGender label='Gender' option={genderOptions} name='gender' placeholder='Male' />
                                        <div className='field'>
                                             <label> Birth of day</label>
                                             <MyDateInput
                                                  dateFormat='d/MM/yyyy'
                                                  placeholderText='D/MM/YYYY'
                                                  name='dob'
                                             />
                                        </div>
                                   </div>
                                   <MySelectGender label='Dep Name' option={departmentOptions} name='dep_id' placeholder='Choose' />
                                   <MyTextArea label='Address' name='address' rows={3} placeholder='Description' />
                                   <MyTextInput label='Phone' name='phone' />
                                   <div className='field'>
                                        <label> New Date</label>
                                        <MyDateInput
                                             dateFormat='d/MM/yyyy'
                                             placeholderText='D/MM/YYYY'
                                             name='craete_date'
                                        />
                                   </div>
                                   <div className='field'>
                                        <label> Edit</label>
                                        <MyDateInput
                                             dateFormat='d/MM/yyyy'
                                             placeholderText='D/MM/YYYY'
                                             name='edit_date'
                                        />
                                   </div>
                                   <Button
                                        disabled={isSubmitting || !dirty}
                                        loading={loading}
                                        positive type='submit' content='Submit'
                                        floated='right'
                                   />
                                   <Button as={Link} to='/employees' floated='right' type='button' content='Cancel' />

                              </Form>
                         )}
                         </Formik>
                    </Segment>
               </Grid.Column>
          </Grid>


     )
})
