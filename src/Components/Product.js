import React from "react";
export default function Product(props) {
  const { product, additem } = props;

  return (
    <>
      <div class="product-card">
        <div class="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div class="product-info">
          <h3>{product.name}</h3>
          <h4> ${product.price}</h4>
          <button
            key={product.id}
            onClick={() => {
              additem(product);
            }}
            className="add-to-cart-btn"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
