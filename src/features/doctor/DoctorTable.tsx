import { observer } from 'mobx-react-lite';
import { SyntheticEvent, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Item, Modal, Segment } from 'semantic-ui-react'
import { Header, Icon } from 'semantic-ui-react'
import { Employee } from '../../app/model/Employee';
import { useStore } from '../../app/stores/store';
import DoctorDetails from './detailed/DoctorDetails';

interface Props {
     employee: Employee
}

export default observer(function DoctorTable({ employee }: Props) {

     const { employeeStore } = useStore();
     const { deleteEmployee, loading } = employeeStore;
     const [open, setOpen] = useState(false);

     const [target, setTarget] = useState('');

     function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, emp_id: string) {
          setTarget(e.currentTarget.name);
          deleteEmployee(emp_id);
     }

     return (
          <tr>
               <td>
                    <Link to={`/employees/${employee.emp_id}`}>
                         {employee.emp_id}
                    </Link>
               </td>
               <td>...</td>
               <td>{employee.emp_name}</td>
               <td>{employee.emp_surname}</td>
               <td>{employee.dep_name}</td>
               <td>{employee.phone}</td>
               <td>
                    <Button
                         // style={{padding:'0'}}
                         as={Link}
                         to={`/employees/${employee.emp_id}`}
                         content='View'
                    />
                    <Modal
                         closeIcon
                         open={open}
                         actions='inverted'
                         trigger={<Button color='red'>Delete</Button>}
                         onClose={() => setOpen(false)}
                         onOpen={() => setOpen(true)}
                    >
                         <Header icon='archive' content='Archive Old Messages' />
                         <Modal.Content>
                              <p>
                                   Your inbox is getting full, would you like us to enable automatic
                                   archiving of old messages?
                              </p>
                         </Modal.Content>
                         <Modal.Actions>
                              <Button onClick={() => setOpen(false)}>
                                   <Icon name='remove' /> No
                              </Button>

                              <Button
                                   name={employee.emp_id}
                                   loading={loading && target === employee.emp_id}
                                   onClick={(e) => handleActivityDelete(e, employee.emp_id)}
                                   floated='right'
                                   content='Delete'
                                   color='red' >
                                   <Icon name='checkmark' />
                                   Yes
                              </Button>

                         </Modal.Actions>
                    </Modal>
               </td>
          </tr>
     )
})
