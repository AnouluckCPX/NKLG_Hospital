import { Button } from 'semantic-ui-react'
import { IconDate, IconSort, IconStatus } from '../../app/layout/IconMenuFilter'

export default function FilterTable() {
     return (
          <>
               <div>

                    <form className="ui form" style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
                         <div className="fields" >
                              <Button className='ui button btn-filter' >
                                   <span style={{ paddingRight: '8px' }}>
                                        <IconSort />
                                   </span>
                                   Sort by
                              </Button>
                              <Button className='ui button btn-filter' >
                                   <span style={{ paddingRight: '8px' }}>
                                        <IconDate />
                                   </span>
                                   Any Date
                              </Button>
                              <Button className='ui button btn-filter' >
                                   <span style={{ paddingRight: '8px' }}>
                                        <IconStatus />
                                   </span>
                                   Status
                              </Button>

                              <div className="ui left icon input  ">
                                   <i className="search icon"></i>
                                   <input className='' type="text" placeholder="Search..." />
                              </div>
                         </div>



                    </form>
               </div>

          </>

     )
}
