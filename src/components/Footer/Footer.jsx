import React from 'react'
import './footer.scss'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='above'>
                <div className='menu-footer'>
                    <h5>Danh Mục Món Ăn</h5>
                    <ul>
                        <li>
                            Món mới
                        </li>
                    </ul>
                </div>
                <div className='about'>
                    <h5>Danh Mục Món Ăn</h5>
                    <ul>
                        <li>
                            Món mới
                        </li>
                    </ul>
                </div>
                <div className='footer-downloaf'>
                    <h5>Download App</h5>
                    <div className='footer-button'>
                        <a href="/">
                            <i class="fa-brands fa-google-play"></i>
                        </a>
                        <a href="/">
                            <i class="fa-brands fa-app-store-ios"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className='copy-right'>
                <h5>Copyright © 2022 KFC Vietnam</h5>
            </div>
            <hr />

            <div className='below'>
                <div className='contact'>
                    <h4>CÔNG TY LIÊN DOANH TNHH KFC VIỆT NAM</h4>
                    <p>
                        Số 292 Bà Triệu, P. Lê Đại Hành, Q. Hai Bà Trưng, TP. Hà Nội.<br></br>
                        Điện thoại: (028) 38489828<br></br>
                        Email: lienhe@kfcvietnam.com.vn<br></br>
                        Mã số thuế: 0100773885<br></br>
                        Ngày cấp: 29/10/1998 - Nơi cấp: Cục Thuế Thành Phố Hà Nội<br></br>
                    </p>
                </div>
            </div>
        </div>
    )
}
