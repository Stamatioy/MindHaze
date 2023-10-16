import React from 'react'
import Sdata from "./Sdata"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => {
      return <ul style={{margin: "0px"}}>{dots}</ul>
    }
    
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          const imageClassName = `custom-image-${index}`;
          return (
            <div className='box d_flex top' key={index}>
              <div className='left'>
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
                <button className="btn-primary">Explore ...</button>
              </div>
              <div className="right">
              <img src={value.cover} alt='' className={imageClassName} style={value.customStyles} />
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard