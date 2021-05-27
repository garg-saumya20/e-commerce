import React from "react";

import Product from "./Product";

export default function Products(props) {
  const { products, additem } = props;
  return (
    <>
      <div className="container">
        {products.map((product) => (
          <Product product={product} additem={additem} />
        ))}
      </div>
    </>
  );
}
