import { observer } from 'mobx-react-lite';
import { Card, Grid } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store';
import DoctorDetails from './DoctorDetails';
import DoctorFilter from './DoctorFilter'
import DoctorTable from './DoctorTable'
import FormInputEmployee from './FormInputEmployee';


export default observer(function DoctorContainer() {
     
     const {employeeStore} = useStore();
     const {selectedEmployee, editMode} = employeeStore;

  return (
    <Grid>
         <Grid.Column width='12'>
              <Card fluid>
                   <DoctorFilter
                   />
              </Card>
              <DoctorTable 
              
              />
         </Grid.Column>
         <Grid.Column width='4'>
              {selectedEmployee && !editMode && <DoctorDetails />}
              {editMode && <FormInputEmployee />}
         </Grid.Column>

    </Grid>
  )
})
