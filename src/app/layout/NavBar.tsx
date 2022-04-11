import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'

export default function NavBar() {



     return (
          <Menu inverted fixed='top'>
               <Container>
                    <Menu.Item>
                         <img src='/assets/menuImages/logo.svg' alt='logo' style={{ marginRight: 10 }} />
                         NKLG Hospital
                    </Menu.Item>
                    <Menu.Item position='right'>
                         <Image src='/assets/menuImages/profile.svg' avatar spaced='right' />
                         <Dropdown pointing='top left' text='Mr. Anouluck'>
                              <Dropdown.Menu>
                                   <Dropdown.Item text='My Profile' />
                                   <Dropdown.Item as={Link} to='/' text='Logout' icon='power' />
                              </Dropdown.Menu>
                         </Dropdown>
                    </Menu.Item>
               </Container>
          </Menu>
     )
}
