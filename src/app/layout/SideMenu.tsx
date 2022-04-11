import { useHistory } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { IconDashborad, IconActivity, IconCalendar, IconInvoice, IconDoctor, IconDepartment, IconPatient } from './IconMenuLeft'

export default function SideMenu() {

     const history = useHistory();

     return (
          <>
               <Menu className="ui vertical menu">
                    <div className="item">
                         <div className="header">General</div>
                         <div className="menu">
                              <span>
                                   <a className="item customfont"
                                        onClick={() => history.push('/dashborad')}>
                                        <span><IconDashborad /></span>
                                        Dashborad
                                   </a>
                              </span>
                              <span>
                                   <a className="item customfont"
                                        onClick={() => history.push('/activity')}>
                                        <span><IconActivity /></span>
                                        Activity

                                   </a>
                              </span>
                              <span>
                                   <a className="item customfont">
                                        <span><IconCalendar /></span>
                                        Appointments
                                   </a>
                              </span>
                              <span>
                                   <a className="item customfont">
                                        <span><IconInvoice /></span>
                                        Billing
                                   </a>
                              </span>

                         </div>
                    </div>
                    <div className="item">
                         <div className="header">Phamacologis</div>
                         <div className="menu">
                              <a className="item customfont">Prescription</a>
                              <a className="item customfont">Category</a>
                              <a className="item customfont">Medicaine</a>
                         </div>
                    </div>
                    <div className="item">
                         <div className="header">Empolyee</div>
                         <div className="menu">
                              <span>
                                   <a className="item customfont">
                                        <IconDepartment /> Department
                                   </a>
                              </span>
                              <span>
                                   <a className="item customfont"
                                        onClick={() => history.push('/doctor')} >
                                        <IconDoctor /> Doctor
                                   </a>
                              </span>
                              <span>
                                   <a className="item customfont">
                                        <IconPatient /> Patient
                                   </a>
                              </span>
                         </div>
                    </div>

                    <div className="item">
                         <div className="header">Setting</div>
                         <div className="menu">
                              <a className="item customfont">Rate Money</a>
                              <a className="item customfont">App Setting</a>
                              <a className="item customfont">Language</a>
                         </div>
                    </div>
               </Menu>
          </>




     )
}
