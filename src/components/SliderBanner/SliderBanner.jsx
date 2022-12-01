import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './sliderbanner.scss'

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}
export default function SliderBanner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className='slider-banner'>
        <Slider {...settings}>
          <div>
            <a href='/'><img src='https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/combofoodball.webp?v=LnljVg' alt=''></img></a>
          </div>
          <div>
            <a href='/'><img src='https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/bttk.webp?v=LnljVg' alt=''></img></a>
          </div>
          <div>
            <a href='/'><img src='https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Chikoyaki.webp?v=LnljVg' alt=''></img></a>
          </div>
        </Slider>
    </div>
  )
}
