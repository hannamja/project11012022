import React from 'react'

import './bannerdownload.scss'
export default function BannerDownload() {
  return (
    <div className='download'>
        <a href="/">
            <img className='bannerdownload' src='https://static.kfcvietnam.com.vn/images/content/home/mobileappbanner/lg/banner.jpg?v=3wk0o3'>
            </img>
        </a>
        <div className='googleplay-app'>
            <a href="/">
                <i class="fa-brands fa-google-play"></i>
            </a>
            <a href="/">
                <i class="fa-brands fa-app-store-ios"></i>
            </a>
        </div>
    </div>
  )
}
