import { observer } from 'mobx-react-lite';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Segment } from 'semantic-ui-react'

export default observer(function LoginPage() {
     
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
})
