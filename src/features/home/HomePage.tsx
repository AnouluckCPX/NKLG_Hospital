import { Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import SideMenu from "../../app/layout/SideMenu";
import ActivityContainter from "../activity/ActivityContainter";
import ContainerDashborad from "../dashborad/ContainerDashborad";
import ContainerDepartment from "../department/ContainerDepartment";
import DoctorContainer from "../doctor/DoctorContainer";

export default function HomePage() {

     return (
          <>
               <Grid style={{ marginTop: '2rem' }}>
                    <Grid.Column width='2'>
                         <SideMenu />
                    </Grid.Column>

                    <Grid.Column width='14'>
                         <>
                              <div style={{ marginLeft: '3rem' }}>
                                   <Switch>
                                        <Route path="/dashborad" component={ContainerDashborad} />
                                        <Route path="/activity" component={ActivityContainter} />
                                        <Route path="/doctor" component={DoctorContainer} />
                                        <Route path="/department" component={ContainerDepartment} />
                                   </Switch>                             
                              </div>
                         </>
                    </Grid.Column>
               </Grid>
          </>
     )
}
