import { Item, Segment } from 'semantic-ui-react';
import { items } from '../../app/model/HeaderItem';

export default function HeaderDisplay() {
     return (
          <>
               <div className='ui horizontal list'>

                    {items.map((key) => {
                         const list = (
                              <>
                                   <div className='item'>
                                        <Segment.Group>
                                             <Segment>
                                                  <Item.Group className='card-item'>
                                                       <Item className='itemNum' >
                                                            <Item.Image src={key.img} size='mini'></Item.Image>
                                                            <Item.Content>
                                                                 <Item.Header style={{fontSize:'1.5rem'}}>{key.amount} </Item.Header>
                                                                 <Item.Description style={{marginTop:'0'}}>{key.title}</Item.Description>
                                                            </Item.Content>
                                                       </Item>
                                                  </Item.Group>
                                             </Segment>
                                        </Segment.Group>


                                   </div>

                              </>
                         );
                         return list;
                    })}
               </div>

          </>

     )
}
