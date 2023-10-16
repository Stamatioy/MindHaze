import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../NewArrivals/style.css"
import { Link } from 'react-router-dom';


const NextArrow = (props) => {
    const {onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prevv">
                <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    )
  }
  const PrevArrow = (props) => {
    const {onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="nextt">
                <i className="fa fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
  }

const Dcard = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4500, 
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>   
      } 
      return (
        <>
        <Slider {...settings}>
          {Ddata.map((val, index) => {
            return (
                <>
                <div className="boxx" key ={index}>
                    <div className="img">
                      <Link to={`/product/${val.id}`}>
                        <img src={val.cover} alt="" style={val.customStyles} />
                      </Link>
                    </div>
                    <Link to={`/product/${val.id}`}>
                      <h4>{val.name}</h4>
                    </Link>
                    <span>{val.price} €</span>
                </div>
                </>
            )
          })}
        </Slider>  
    </>
  )
}

export default Dcard