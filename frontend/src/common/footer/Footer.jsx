import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>MINDHAZE</h1>
            <p>Discover the finest selection of snus and tobacco products at the best prices. Our commitment: Premium quality. Fast shipping. Elevate your experience with our curated collection today.</p>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Email: info@mindhaze.com</li>
              <li>Phone: +30 6988 555 555</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer