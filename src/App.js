import "./styles.css";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import Data from "./Components/Data";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Signin from "./Components/Signin";
import AddressForm from "./Components/AddressForm";
export default function App() {
  const { products } = Data;
  console.log(products);

  //Adding in a cart
  const [cartItems, setCartItems] = useState([]);
  const additem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  //Removing from a cart

  const removeitem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <Switch>
        <Route exact path="/">
          {" "}
          <Products products={products} additem={additem} />
        </Route>
        <Route exact path="/cart">
          {" "}
          <Cart cart={cartItems} additem={additem} removeitem={removeitem} />
        </Route>
        <Route exact path="/signin">
          {" "}
          <Signin />
        </Route>
        <Route exact path="/addressform">
          {" "}
          <AddressForm />
        </Route>
      </Switch>
    </div>
  );
}
