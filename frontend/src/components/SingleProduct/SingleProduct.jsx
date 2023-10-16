import React from 'react'
import './SingleProduct.css'
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import { useParams } from 'react-router-dom';
import {useState} from "react"



const SingleProduct = ({shopItems, addToCart}) => {
    const { id } = useParams();
    const productId = parseInt(id, 10);  // Convert string ID to number
    const product = shopItems.find(item => item.id === productId);
    const [quantity, setQuantity] = useState(1);

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

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
    <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={product.cover} alt="" />
                </div>
                <div className="right">
                    <span className="name">{product.name}</span>
                    <span className="price">{product.price} €</span>
                    <span className="desc">{product.desc}</span>

                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={decrement}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increment}>+</span>
                            
                        </div>
                        <button className="add-to-cart-button" onClick={() => handleButtonClick(product.id, product)}>
                                <i className={`fa fa-shopping-cart ${clickedButton === product.id ? 'clicked' : ''}`}></i>
                        </button>
                        <button>

                        </button>
                    </div>

                    <span className="divider"/>

                    <div className="info-item">
                        <span className="text-bold">
                            Category :
                            <span> Snus</span>
                        </span>
                    </div>

                </div>
            </div>
            <RelatedProducts />
        </div>
    </div>
  )
}

export default SingleProduct