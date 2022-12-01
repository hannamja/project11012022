import React from 'react'
import './catalogitem.scss'
export default function FoodItem(props) {
  return (
    <div className='catalog-item'>
        <a href='/'>
            <div className='img-catalog'><img src='https://static.kfcvietnam.com.vn/images/category/lg/KHUYEN%20MAI.jpg?v=3wk0o3' alt=''></img></div>
            <div className='subtitle'>
                Món Mới
            </div>
        </a>
    </div>
  )
}
