import React from 'react';
import { useSelector } from 'react-redux';

function ProductComponent() {
  const products = useSelector(state => state.allProducts.product)
  const {id, title, category} = products[0]

  return (
    <div className='four column wide container'>
      <div className='ui link cards'>
        <div key={id} className='card'>
          <div className='image'></div>
          <div className='content'>
            <div className='header'>{title} || {category}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent
