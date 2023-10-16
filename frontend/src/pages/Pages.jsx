import React from "react"
import Home from "../components/mainpage/Home"
import FlashDeals from "../components/FlashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/NewArrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shop/Shop"
import Wrapper from "../components/wrapper/Wrapper"

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
    return (
        <>
            <Home cartItem={cartItem} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate />
            <NewArrivals />
            <Discount />
            <Shop shopItems={shopItems} addToCart={addToCart}/>
            <Wrapper />
        </>
    )
}

export default Pages