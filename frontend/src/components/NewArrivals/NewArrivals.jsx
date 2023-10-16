import React from 'react'
import './style.css'
import Cart from "./Cart"

const NewArrivals = () => { 
    return (
    <>
        <section className="newarrivals background">
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <img src='./images/other/newtag-1.png' />
                        <h2>New Arrivals</h2>
                    </div>
                    <div className="heading-right row">
                        <span>View All</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>
                <Cart />
            </div>
        </section>
    </>
  )
}

export default NewArrivals