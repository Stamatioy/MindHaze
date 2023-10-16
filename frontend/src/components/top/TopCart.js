import React from 'react'
import Tdata from './Tdata'
import Slider from "react-slick"

const TopCart = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,

        
      }
    return (
    <>
        <div className="containerr">
        {Tdata.map((value, index) => {
            return (
                    <>
                    <div className="box product">
                        <div className="nametop d_flex">
                            <span className="tleft">{value.para}</span>
                            <span className="tright">{value.desc}</span>
                        </div>
                        <div className="img">
                            <img src={value.cover} alt='' className='top-img' style={value.customStyles}/>
                        </div>
                    </div>
                    </>
            )
        })}
        </div>
    </>
  )
}

export default TopCart