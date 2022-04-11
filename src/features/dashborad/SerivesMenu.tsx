import { Button, Header, Image, Segment } from 'semantic-ui-react'

export default function SerivesMenu() {
     return (
          <>
               <Segment style={{ marginRight: '2rem', height: '350px' }}>
                    <div>
                         <Header textAlign='center' content='Menu Shortcut' style={{ marginTop: '1rem' }} />
                         <Button className='wid-full ui purple' content='Go to Services' />
                         <Button className='wid-full ui grey' content='New Patiens' />
                         <Button className='wid-full ui black basic button' content='Search Patients' />
                    </div>
                    <div className='con'>
                         <Image className='img' src='/assets/dashborad/health-check.svg' size='tiny' />
                    </div>


               </Segment>
          </>
     )
}
