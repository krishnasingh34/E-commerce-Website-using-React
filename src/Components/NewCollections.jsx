import React from 'react'
import '../CSS/newCollections.css'
import new_collections from '../assets/newcollections'
import Item from './Item'

const NewCollections = () => {
    return (
        <div className='newcollections' id='new-collections'>
            <h1>New collections</h1>
            <hr />
            <div className='collections'> 
                {
                    new_collections.map(item => {
                        return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })
                }
            </div>
        </div>
    )
}

export default NewCollections