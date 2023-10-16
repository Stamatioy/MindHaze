import React from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
  const data = [
    {
      cateImg: "./images/categories/pouches/greypouch3.png",
      cateName:"Snus",
    },
    {
      cateImg: "./images/categories/cigars/cigar1.png",
      cateName:"Cigars",
    }
  ]
    
  return (
    <>
        <div className="category">
        {data.map((value, index) => {
          return (
            <Link to={`/products/${value.cateName}`}>
              <div className="box f_flex" key={index}>
                <img src={value.cateImg} alt='' />
                <span>{value.cateName}</span> 
              </div>
            </Link>
          )
        })}
        </div>
    </>
  )
}

export default Categories