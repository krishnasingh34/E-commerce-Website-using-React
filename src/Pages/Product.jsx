import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay'
import Description from '../Components/Description'
import OtherProducts from '../Components/OtherProducts'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { id } = useParams()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [id])
  const product = all_product.find(item => item.id == id)
  return (
    <div>
      <ProductDisplay product={product} />  
      <Description/>
      <OtherProducts/>
    </div>
  )
}

export default Product