import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Card, Grid } from 'semantic-ui-react'
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useStore } from '../../app/stores/store';
import DoctorFilter from './DoctorFilter'
import DoctorList from './DoctorList';


export default observer(function DoctorContainer() {

     const { employeeStore } = useStore();
     const { loadEmployees, employeeRegistry } = employeeStore;

     useEffect(() => {
          if (employeeRegistry.size <= 1) loadEmployees();
     }, [employeeRegistry.size, loadEmployees])

     if (employeeStore.loadingInitial) return <LoadingComponent content='Loading app' />

     return (
          <Grid>
               <Grid.Column width='15'>
                    <Card fluid>
                         <DoctorFilter />
                    </Card>
                    <DoctorList />
               </Grid.Column>
          </Grid>
     )
})
