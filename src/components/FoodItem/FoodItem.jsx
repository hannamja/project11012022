import React from 'react'
import './fooditem.scss'
export default function FoodItem(props) {
  return (
    <div className='food-item'>
      <a href='/'>
        <div className='img-item'><img className='img-item' src='https://static.kfcvietnam.com.vn/images/category/lg/KHUYEN%20MAI.jpg?v=3wk0o3' alt=''></img></div>
        <div className='intro'>
          <h5 className='dish-name'>Gà</h5>
          <p className='detail'>Ngon</p>
        </div>
      </a>
      <div className='button-add'>
        <button className='add' data-toggle="modal" data-target="#exampleModal">Thêm vào giỏ</button>
      </div>
    </div>
  )
}
