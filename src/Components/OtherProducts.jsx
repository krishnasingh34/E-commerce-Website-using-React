import React from 'react'
import '../CSS/otherProducts.css'
import all_product from '../assets/all_product'
import Item from './Item'

const OtherProducts = () => {
    function getRandomProducts(products, count){
        let shuffled = [...products].sort(() => 0.5 - Math.random())
        return shuffled.slice(0, count)
    }
    const randomProducts = getRandomProducts(all_product, 8) 
    return (
        <div>
            <div className='otherproducts'>
                <h1>Other products</h1>
                <hr />
            </div>
            <div className="otherproducts-item">
                {
                    randomProducts.map(item => {
                        return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })
                }
            </div>
        </div>
    )
}

export default OtherProducts