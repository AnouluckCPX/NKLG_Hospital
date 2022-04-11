import { Card, Grid } from 'semantic-ui-react'
import DoctorFilter from './DoctorFilter'
import DoctorTable from './DoctorTable'

export default function DoctorContainer() {
  return (
    <Grid>
         <Grid.Column width='12'>
              <Card fluid>
                   <DoctorFilter />
              </Card>
              <DoctorTable />
         </Grid.Column>
    </Grid>
  )
}
