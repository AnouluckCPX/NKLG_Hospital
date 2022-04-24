import {
     Formik,
     
} from 'formik'
import { values } from 'mobx';
import { observer } from 'mobx-react-lite'
import { stringify } from 'querystring';
import { ChangeEvent, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, Label, Segment, Select, Form } from 'semantic-ui-react';
import MyDateInput from '../../app/common/form/MyDateInput';
import MySelectInput from '../../app/common/form/MySelectInput';
import MyTextArea from '../../app/common/form/MyTextArea';
import MyTextInput from '../../app/common/form/MyTextInput';
import { departmentOptions } from '../../app/common/options/departmentOption';
import { genderOptions } from '../../app/common/options/genderOption';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { Employee } from '../../app/model/Employee';
import { useStore } from '../../app/stores/store';


export default observer(function FormInputEmployee() {
     const history = useHistory();

     const { employeeStore } = useStore();
     const { createEmployee, selectedEmployee, closeForm, loading, loadingInitial } = employeeStore;


     const initialState = selectedEmployee ?? {
          emp_id: '',
          emp_name: '',
          emp_surname: '',
          gender: '',
          dob: '',
          address: '',
          phone: '',
          dep_id: '',
          craete_date: '',
          edit_date: '',
     }

     const [employee, setEmployee] = useState(initialState);

     function handleSubmit() {
          createEmployee(employee)
     }

     function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
          const { name, value } = event.target;
          setEmployee({ ...employee, [name]: value })
     }

     // if (loadingInitial) return <LoadingComponent content='Loading employee...' />

     return (
          <div className='ui card'>
               <div className='ui form' style={{ marginBottom: '1.5em' }}>
                    <div className="content" style={{ height: '40px', background: '#f2f2f2', textAlign: 'center' }}>
                         <h4 style={{ paddingTop: '.6em' }}>New employee</h4>
                    </div>
                    <Form className='field' onSubmit={handleSubmit} autoComplete='off' style={{ padding: '1em' }}>

                         {/* <MyTextInput label='ID Employee' name='emp_id' value={} />
                                   <MyTextInput label='First Name' name='emp_name' />
                                   <MyTextInput label='Last Name' name='emp_surname' />
                                   <MyTextInput label='Dep Name' name='dep_id' />

                                   <MySelectInput label='Gender' option={genderOptions} name='gender' placeholder='Male' />

                                   <div className='field'>
                                        <label> Birth of day</label>
                                        <MyDateInput
                                             dateFormat='d/MM/yyyy'
                                             placeholderText='D/MM/YYYY'
                                             name='dob'
                                        />
                                   </div>

                                   <MyTextArea label='Address' name='address' rows={3} placeholder='Description' />

                                   <MyTextInput label='Phone' name='phone' /> */}

                         <Form.Input
                              placeholder='ID'
                              value={employee.emp_id}
                              name='emp_id'
                              onChange={handleInputChange}
                         />
                         <Form.Input
                              placeholder='Name'
                              value={employee.emp_name}
                              name='emp_name'
                              onChange={handleInputChange}
                         />
                         <Form.Input
                              placeholder='Last'
                              value={employee.emp_surname}
                              name='emp_surname'
                              onChange={handleInputChange}
                         />
                         <Form.TextArea
                              placeholder='Address'
                              value={employee.address}
                              name='address'
                              onChange={handleInputChange} />
                         <Form.Input
                              placeholder='Gender'
                              value={employee.gender}
                              name='gender'
                              onChange={handleInputChange}
                         />
                         <Form.Input
                              placeholder='Date'
                              type='date'
                              value={employee.dob}
                              name='dob'
                              onChange={handleInputChange} />
                         <Form.Input
                              placeholder='New Date'
                              type='date'
                              value={employee.craete_date}
                              name='craete_date'
                              onChange={handleInputChange} />
                         <Form.Input
                              placeholder='Edit Date'
                              type='date'
                              value={employee.edit_date}
                              name='edit_date'
                              onChange={handleInputChange} />
                         <Form.Input
                              placeholder='Phone'
                              value={employee.phone}
                              name='phone'
                              onChange={handleInputChange} />
                         <Form.Input
                              placeholder='Dep ID'
                              value={employee.dep_id}
                              name='dep_id'
                              onChange={handleInputChange} />

                         <div  >
                              <Button

                                   loading={loading}
                                   floated='right' positive type='submit' content='Submit' style={{ width: '110px' }} />
                              <Button onClick={closeForm} floated='left' type='button' content='Cancel' style={{ width: '110px' }} />
                         </div>

                    </Form>
               </div>
          </div>

     )
})
