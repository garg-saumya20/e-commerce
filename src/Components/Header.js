import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
export default function Header(props) {
  var { cartItems } = props;
  var qty = cartItems.reduce((a, c) => a + c.qty, 0);
  return (
    <>
      <div class="header">
        <div className="header-logo">
          <Link to="/" class="logo">
            <span className="logo">Apna Mart</span>
          </Link>
        </div>

        <div className="header-nav">
          <input className="search" type="text" placeholder="Search" />
        </div>

        <div class="header-right">
          <Link to="/">
            {" "}
            <FontAwesomeIcon icon={faHeart} size="2x" />{" "}
          </Link>
          <Link to="cart">
            <FontAwesomeIcon icon={faCartPlus} size="2x" />{" "}
            {qty ? <button className="badge">{qty}</button> : ""}
          </Link>
          <Link to="signin">SignIn</Link>
        </div>
      </div>
    </>
  );
}
{
  /* <div class="sort">
            

            <div class="collection-sort">
              <label>Sort by:</label>
              <select>
                <option value="/">Featured</option>
              </select>
            </div>
          </div>  */
}
