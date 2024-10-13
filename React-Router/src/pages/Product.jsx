import React from 'react'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <div>
            <h1>Product Page</h1>
            <Link to={'/'}>Index</Link>&nbsp;&nbsp;
            <Link to={'/about'}>About</Link>&nbsp;&nbsp;
            <Link to={'/product'}>Product</Link>&nbsp;&nbsp;
            <Link to={'/contact'}>Contact</Link>&nbsp;&nbsp;
        </div>
  )
}

export default Product