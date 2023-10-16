import './App.css';
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import Cart from "./common/cart/Cart"
import { BrowserRouter as Router, Switch, Route, Link ,} from "react-router-dom";
import Pages from "./pages/Pages"
import Data from "./components/FlashDeals/Data"
import Sdata from "./components/shop/Sdata"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Shop from "./components/shop/Shop"

import {useState} from "react"

function App() {
  const {productItems} = Data
  const {shopItems} = Sdata
  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(cartItem.map((item) =>
        (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1}])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty ===1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    }else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1} : item)))
    }
  }
  return (
    <>
      
      <Router>
        <Header cartItem={cartItem}/>
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
          </Route>
          <Route path="/product/:id" exact>
            <SingleProduct shopItems={shopItems} addToCart={addToCart} />
          </Route>
          <Route path="/products/snus/" exact>
            <Shop shopItems={shopItems} addToCart={addToCart}/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
