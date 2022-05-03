import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import {
     IconDashborad, IconActivity, IconCalendar,
     IconInvoice, IconDoctor, IconDepartment,
     IconPatient,
     IconDrugs,
     IconCategoryDrugs,
     IconPrescription
} from './IconMenuLeft'

export default function SideMenu() {
     return (
          <>
               <Menu className="ui vertical menu">
                    <div className="item">
                         <div className="header">General</div>
                         <div className="menu">
                              <Link className='item customfont' to={('/dashborad')} >
                                   <IconDashborad />
                                   Dashborad
                              </Link>
                              <Link className='item customfont' to={('/activity')} >
                                   <IconActivity />
                                   Activity
                              </Link>
                              <Link className='item customfont' to={('')} >
                                   <IconCalendar />
                                   Appointments
                              </Link>
                              <Link className='item customfont' to={('')} >
                                   <IconInvoice />
                                   Billing
                              </Link>
                         </div>
                    </div>
                    <div className="item">
                         <div className="header">Phamacologis</div>
                         <div className="menu">
                              <Link className='item customfont' to={('')} >
                                   <IconPrescription />
                                   Prescription
                              </Link>
                              <Link className='item customfont' to={('')} >
                                   <IconCategoryDrugs />
                                   Category
                              </Link>
                              <Link className='item customfont' to={('')} >
                                   <IconDrugs />
                                   Medicaine
                              </Link>
                         </div>
                    </div>
                    <div className="item">
                         <div className="header">Empolyee</div>
                         <div className="menu">
                              <Link className='item customfont' to={('/department')} >
                                   <IconDepartment />
                                   Department
                              </Link>
                              <Link className='item customfont' to={('/employees')} >
                                   <IconDoctor />
                                   Doctor
                              </Link>
                              <Link className='item customfont' to={('')} >
                                   <IconPatient />
                                   Patient
                              </Link>
                         </div>
                    </div>

                    <div className="item">
                         <div className="header">Setting</div>
                         <div className="menu">
                              <Link className='item customfont' to={('')} >
                                   Rate Money
                              </Link>
                              <Link className='item customfont' to={('')} >
                                   App Setting
                              </Link>
                              <Link className='item customfont' to={('')} >
                                   Language
                              </Link>
                         </div>
                    </div>
               </Menu>
          </>




     )
}
