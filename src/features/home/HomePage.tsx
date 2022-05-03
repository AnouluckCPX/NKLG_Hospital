import { Route, Switch, useLocation } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import SideMenu from "../../app/layout/SideMenu";
import ActivityContainter from "../activity/ActivityContainter";
import ContainerDashborad from "../dashborad/ContainerDashborad";
import ContainerDepartment from "../department/ContainerDepartment";
import DoctorDetails from "../doctor/detailed/DoctorDetails";
import DoctorContainer from "../doctor/DoctorContainer";
import FormInputEmployee from "../doctor/FormInputEmployee";

export default function HomePage() {
     const location = useLocation();

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
                                        <Route path='/employees' exact component={DoctorContainer} />
                                        <Route key={location.key} path='/employees/:emp_id' exact component={DoctorDetails} />
                                        <Route key={location.key} path={['/createEmployee','/manage/:emp_id']} component={FormInputEmployee} />
                                        <Route path="/department" component={ContainerDepartment} />
                                   </Switch>                             
                              </div>
                         </>
                    </Grid.Column>
               </Grid>
          </>
     )
}
