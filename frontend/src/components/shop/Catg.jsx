import React, { useState } from 'react'

const Catg = () => {
    const data = [
        {
          cateImg: "/images/categories/pouches/Brands/logos/killa-logo.webp",
          cateName: "Killa",
        },
        {
          cateImg: "/images/categories/pouches/Brands/logos/siberia-logo1.webp",
          cateName: "Siberia",
        },
        {
          cateImg: "/images/categories/pouches/Brands/logos/velo-logo.svg",
          cateName: "Velo",
        },
        {
          cateImg: "/images/categories/pouches/Brands/logos/pablo-logo.svg",
          cateName: "Pablo",
        },
        {
          cateImg: "/images/categories/pouches/Brands/logos/77logo.svg",
          cateName: "77",
        },
      ]

      const [isOpen, setIsOpen] = useState(false);

      return (
        <>
            <div className="category">
                <div className="chead d_flex">
                    <h1>Products</h1>
                </div>
                <div className="dropdown-button">
                    <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                        <i className={`fa ${isOpen ? 'fa-caret-down' : 'fa-caret-right'}`}></i>
                        Snus / Nicotine Pouches
                    </button>
                </div>
                {isOpen && data.map((value, index) => {
                    return (
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt='' />
                            <span>{value.cateName}</span>
                        </div>
                    )
                })}
                <div className="box box2">
                    <button>View All Brands</button>
                </div>
            </div>
        </>
    );
}

export default Catg