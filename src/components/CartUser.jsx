import React from 'react'

const CartUser = ({username, img, date, title_img}) => {
  return (
    <div className='carts-user'>
        <div className="head">
            <p>{username}</p>
            <p>{date}</p>
        </div>

        <h3>{title_img}</h3>

        <div className="image">
            <img src={img} alt="" />
        </div>

        <div className="btn">
            <button>Like <i class="fa-solid fa-thumbs-up"></i></button>
            <button>Dislike <i class="fa-solid fa-thumbs-down"></i></button>
        </div>
    </div>
  )
}

export default CartUser
