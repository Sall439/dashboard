import React from 'react'

const Carts = ({title, img}) => {
  return (
    <div className="carts flex-auto">
            <i className={img}></i>
            <h2>{title}</h2>
    </div>
  )
}

export default Carts
