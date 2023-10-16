import React from 'react'
import {useState} from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom';


const ShopCart = ({shopItems, addToCart}) => {
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

    return (
      <>
      {
        shopItems.map((shopItems) => {
            return (
                <div className="box">
                    <div className="product mtop">
                        <div className="img">
                            <Link to={`/product/${shopItems.id}`}>
                                <span className="discount">{shopItems.discount}% Off</span>
                                <img src={shopItems.cover} alt='' className='flash-img' style={shopItems.customStyles}/>
                            </Link>
                            <div className="product-like">
                                <label>0</label> <br />
                                <i className="fa-regular fa-heart" onClick={increment}></i>
                            </div>
                        </div>
                        <div className="product-details">
                            <h3>{shopItems.name}</h3>
                            <div className="rate">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="price">
                                <h4>{shopItems.price} €</h4>
                                <button onClick={() => handleButtonClick(shopItems.id, shopItems)}>
                                    <i className={`fa fa-plus ${clickedButton === shopItems.id ? 'clicked' : ''}`}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> 
            )
        })}
      </>
    )
}

export default ShopCart