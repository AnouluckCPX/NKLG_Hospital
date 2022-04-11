import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Header, Segment } from 'semantic-ui-react'

export default function LoginPage() {
     const history = useHistory();
     const [isChecked, setIsChecked] = useState(false);

     const handleOnChange = () => {
          setIsChecked(!isChecked);
     };

     return (
          <>
               <div className='masthead'>
                    <Segment className='card-login'>
                         <Header as='h2' >
                              Welcome To NKLG Hosital
                         </Header>

                         <div className='ui form'>
                              <div className="field">
                                   <label>Username</label>
                                   <input type="text" placeholder="Username" />
                              </div>
                              <div className="field">
                                   <label>Password</label>
                                   <input type="password" />
                              </div>
                              <div className="field">
                                   <div className="ui checked checkbox">
                                        <input type="checkbox"
                                             checked={isChecked}
                                             onChange={handleOnChange} />
                                        <label>Remember Me</label>
                                   </div>
                              </div>
                              <Button className='btn-login' fluid primary size='medium' as={Link} to='/dashborad'>
                                   Login!
                              </Button>
                         </div>


                    </Segment >
               </div>
          </>

     )
}
