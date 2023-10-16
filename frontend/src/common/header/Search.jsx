import React from 'react'
import logo from "../assets/images/logo/MINDHAZE1200X400.png"
import { Link } from "react-router-dom"

export const Search = ({ cartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <>
     <section className="search">
        <div className='container c_flex'>
            <Link to="/">
              <div className="logo width">
                  <img src={logo} alt='' />
              </div>
            </Link>
            <div className="search-box f_flex">
              <i className='fa fa-search'></i>
              <input type="text" placeholder="Search products ..."></input>
              <span>All Categories</span>
            </div>

            <div className="icon f_flex width">
              <i className="fa fa-user icon-circle"></i>
              <div className="cart">
                <Link to="/cart">
                  <i className="fa fa-shopping-bag icon-circle"></i>
                  <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
                </Link>
              </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Search