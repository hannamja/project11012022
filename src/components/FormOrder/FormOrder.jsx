import React, { useState, useEffect } from 'react'
import './formorder.scss'
export default function FormOrder() {
    const css = {
        display: 'none'
    }
    const [type, setType] = useState("")
    const [size, setSize] = useState("")
    const [topping, setTopping] = useState([])

    useEffect(() => {
        let colect = document.querySelectorAll("input[name='ice']")
        colect[0].previousElementSibling.click()
        colect = document.querySelectorAll("input[name='size']")
        colect[0].previousElementSibling.click()
    }, [])
    function handleClickType(e) {
        setType(e.target.nextElementSibling.value)
        e.target.nextElementSibling.click()
    }
    function handleClickSize(e) {
        setSize(e.target.nextElementSibling.value)
        e.target.nextElementSibling.click()
    }
    function handleClickTopping(e) {
        setTopping((prev) => {
            const newTopping = [...prev, e.target.nextElementSibling.value]
            console.log(newTopping)
            return newTopping
        })
        e.target.style.background = "bisque";
    }

    function onChangeButtonType(e) {
        let colect = document.querySelectorAll("input[name='ice']")
        for (let i = 0; i < colect.length; i++) {
            if (colect[i].value === e.target.value) colect[i].previousElementSibling.style.background = "bisque"
            else {
                colect[i].previousElementSibling.style.background = "rgba(0, 0, 0, 0.05)"
            }
        }
    }

    function onChangeButtonSize(e) {
        let colect = document.querySelectorAll("input[name='size']")
        for (let i = 0; i < colect.length; i++) {
            if (colect[i].value === e.target.value) colect[i].previousElementSibling.style.background = "bisque"
            else {
                colect[i].previousElementSibling.style.background = "rgba(0, 0, 0, 0.05)"
            }
        }
    }
    return (
        <div className='form-order'>
            {/* 
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button> */}

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div className='order-header'>
                            <div className='img-wrap'>
                                <img className='img-order-item' src="https://tocotocotea.com/wp-content/uploads/2022/10/sua-chua-man-hat-sen-.png" alt="" />
                            </div>
                            <div className='order-header-right'>
                                <div className='item-name'>Trà sữa</div>
                                <div className='item-price'>28.000</div>
                                <div className="change-number">
                                    <div className="add-less"><i class="fa-solid fa-minus"></i></div>
                                    <div className="numberofitem">1</div>
                                    <div className='add-more'><i class="fa-sharp fa-solid fa-plus"></i></div>
                                    <div className="button-price-add">+ 28.000</div>
                                </div>
                            </div>
                            <a className='cancel' data-dismiss="modal"><i class="fa-solid fa-xmark"></i></a>
                        </div>
                        <div className="order-body">
                            <div className='hotcold'>
                                <div className="type">Chọn loại</div>
                                <div><i className="fa-solid fa-chevron-down"></i></div>
                            </div>
                            <div className="hotcold-area">
                                <label className="cont-radio">
                                    <span>Nóng</span>
                                    <span onClick={((e) => handleClickType(e))} className='checkmark'></span>
                                    <input style={css} onChange={((e) => onChangeButtonType(e))} type="radio" value="hot" name='ice' />
                                </label>
                                <label className="cont-radio">
                                    <span>Lạnh</span>
                                    <span onClick={((e) => handleClickType(e))} className='checkmark'></span>
                                    <input style={css} onChange={((e) => onChangeButtonType(e))} type="radio" value="cold" name='ice' />
                                </label>
                            </div>

                            <div className='size-select'>
                                <div className="size">Chọn size</div>
                                <div><i className="fa-solid fa-chevron-down"></i></div>
                            </div>
                            <div className="size-area">
                                <label className="cont-radio">
                                    <span>S</span>
                                    <span onClick={((e) => handleClickSize(e))} className='checkmark'></span>
                                    <input style={css} onChange={((e) => onChangeButtonSize(e))} type="radio" value="s" name='size' />
                                </label>
                                <label className="cont-radio">
                                    <span>L</span>
                                    <span onClick={((e) => handleClickSize(e))} className='checkmark'></span>
                                    <input style={css} onChange={((e) => onChangeButtonSize(e))} type="radio" value="l" name='size' />
                                </label>
                            </div>

                            <div className='topping-select'>
                                <div className="type">Chọn topping</div>
                                <div><i className="fa-solid fa-chevron-down"></i></div>
                            </div>
                            <div className="topping-area">
                                <div className="topping-wrap">
                                    <label className="cont-radio">
                                        <span>Thạch thêm</span>
                                        <span onClick={((e) => handleClickTopping(e))} className='checkmark'></span>
                                        <input style={css} type="checkbox" value="jelly" name='topping' />
                                    </label>
                                    <span className='topping-price'>+ 5000</span>
                                </div>
                                <div className="topping-wrap">
                                    <label className="cont-radio">
                                        <span>Sữa thêm</span>
                                        <span onClick={((e) => handleClickTopping(e))} className='checkmark'></span>
                                        <input style={css} type="checkbox" value="milk" name='topping' />
                                    </label>
                                    <span className='topping-price'>+ 10000</span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
