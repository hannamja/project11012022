import React from 'react'
import './navbar.scss'
import logo from '../../assets/logo/logo.jpg'
export default function NavBar(props) {
    

    return (
        <>
            <div className='navbar-container'>
                <a className='logo' href='/'><img src={logo} alt=''></img></a>
    
                <a className='menu-item-1' href='/'>
                    THỰC ĐƠN
                </a>

                <a className='menu-item-2' href='/'>
                    KHUYẾN MÃI
                </a>

                <a className='cart' href='/'><i class="fa-solid fa-cart-shopping"></i></a>
                <a className='user' href='/'><i class="fa-regular fa-user"></i></a>
            </div>
        </>
    )
}
