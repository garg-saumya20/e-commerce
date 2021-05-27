import React from "react";
import { Link } from "react-router-dom";
export default function Cart(props) {
  const { cart, additem, removeitem } = props;
  //   var price=0;
  //   const cartPrice=
  //   cart.map((product)=>{
  // return (
  //   price=price+(product.qty)*product.price
  // )

  var cartPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
  var qty = cart.reduce((a, c) => a + c.qty, 0);

  return (
    <>
      {cart.length === 0 && (
        <>
          <div className="empty-cart-img">
            <img
              src="https://www.hukum-aaka.com/Content/images/icons/cartempty.png"
              alt=""
            />
          </div>
          <div>
            <Link to="/">Shop now</Link>
          </div>
        </>
      )}

      {cart.length !== 0 && (
        <>
          <div align="left" classname="cart-heading">
            <h1>Shopping Cart</h1>
            <hr />
          </div>

          <div className="cart-area">
            <div className="cart-p-area">
              {cart.map((product) => (
                <>
                  <div className="one-item">
                    <div className="cart-img">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="cart-p-name">
                      <h3>{product.name}</h3>
                    </div>

                    <div className="button-info">
                      <button
                        className="subtract cart-btn"
                        onClick={() => {
                          removeitem(product);
                        }}
                      >
                        -
                      </button>
                      <h5>{product.qty}</h5>
                      <button
                        className="add cart-btn"
                        onClick={() => {
                          additem(product);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-p-price">
                      <h3>₹{product.price}</h3>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>
            <div className="subtotal-area">
              <span className="cart-price">
                Subtotal({qty} items): ₹ <b>{cartPrice}</b>
              </span>
              <div className="gift-div">
                <input className="gift-btn" type="checkbox" value="0" />
                <p>This order contains a gift</p>
              </div>
              <Link to="/addressform">
                <button className="buy-btn cart-buy-btn">
                  Proceed to buy ({qty} items)
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
