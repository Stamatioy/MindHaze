import React from 'react'

export const Head = () => {
  return (
    <>
     <section className='head'>
        <div className='container d_flex'>
            <div className='left row'>
            <i className='fa fa-phone'></i>
            <label>+30 6988 555 555</label>
            <i className="fa fa-envelope"></i>
            <label>info@mindhaze.com</label>
            </div>
            <div className="right row RText">
            <label>Theme FAQ</label>
            <label>Need Help</label>
            <span></span>
            <label htmlFor=''>EN</label>
            <span>💵</span>
            <label htmlFor=''>EUR €</label>
            </div>
        </div>
     </section>
    </>
  )
}

export default Head
