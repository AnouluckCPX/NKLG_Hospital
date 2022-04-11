import React from 'react'
import Calendar from 'react-calendar'
import { Grid } from 'semantic-ui-react'
import HeaderDisplay from './HeaderDisplay'
import MyChart from './MyChart'
import SerivesMenu from './SerivesMenu'
import TableAppoint from './TableAppoint'

export default function ContainerDashborad() {
     return (
          <>
               <HeaderDisplay />
               <Grid style={{ marginTop: '.5rem' }}>
                    <Grid.Column width='12'>
                         <MyChart />
                         <TableAppoint />
                    </Grid.Column>
                    <Grid.Column width='4'>
                         <SerivesMenu />
                         <Calendar />
                    </Grid.Column>
               </Grid>
          </>
     )
}
