import React from 'react'
import { Grid } from 'semantic-ui-react'
import TableDepartment from './TableDepartment'

export default function ContainerDepartment() {
     return (
          <>
               <Grid>
                    <Grid.Column width='12'>
                         <TableDepartment />
                    </Grid.Column>
                    
               </Grid>
          </>

     )
}
