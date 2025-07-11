import React, { useContext } from 'react'
import '../CSS/shopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../Components/Item'

const ShopCategory = (props) => { 
    const { all_product } = useContext(ShopContext)
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" height='300px'/>
            <div className="shopcategory-indexSort">
                <p> <span>Showing 1-12</span> out of 36 products </p>
                <div className='shopcategory-sort'>
                    Sort by <img src={dropdown_icon} alt="" height='12px' />
                </div>
            </div>
            <div className="shopcategory-products">
                {
                    all_product.map(item => {
                        if (props.category == item.category) {
                            return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        }
                        else {
                            return null
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ShopCategory