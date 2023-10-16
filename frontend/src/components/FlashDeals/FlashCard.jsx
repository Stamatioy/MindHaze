import React from 'react'
import Slider from "react-slick"
import {useState} from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom';


const NextArrow = (props) => {
    const {onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    )
}
const PrevArrow = (props) => {
    const {onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
}

const FlashCard = ({productItems, addToCart}) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    const [clickedButton, setClickedButton] = useState(null);
    const handleButtonClick = (id, product) => {
        setClickedButton(id);
        
        // Call the existing addToCart function
        addToCart(product);

        // Use setTimeout to remove the clicked state after the transition duration
        setTimeout(() => {
            setClickedButton(null);
        }, 500);
    };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4500,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
        
      }
    return (
    <>
    <Slider {...settings}>
    {
        productItems.map((productItems) => {
            return (
                <div className="box">
                    <div className="product mtop">
                        <div className="img">
                            <Link to={`/product/${productItems.id}`}>
                                <span className="discount">{productItems.discount}% Off</span>
                                <img src={productItems.cover} alt='' className='flash-img' style={productItems.customStyles}/>
                            </Link>
                            <div className="product-like">
                                <label>0</label> <br />
                                <i className="fa-regular fa-heart" onClick={increment}></i>
                            </div>
                        </div>
                        <div className="product-details">
                            <Link to={`/product/${productItems.id}`}>
                                <h3>{productItems.name}</h3>
                            </Link>
                            <div className="rate">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="price">
                                <h4>{productItems.price.toFixed(2)} €</h4>
                                <button onClick={() => handleButtonClick(productItems.id, productItems)}>
                                    <i className={`fa fa-plus ${clickedButton === productItems.id ? 'clicked' : ''}`}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> 
            )
        })}
    </Slider>
    </>
  )
}

export default FlashCard