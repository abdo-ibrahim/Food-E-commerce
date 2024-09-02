import React from "react";
import Card from "../card/Card";
import HeaderLine from "../Tittles/HeaderLine";

const ShowProducts = ({ products }) => {
  return (
    <div>
      {products.length > 0 ? (
        <div className="products-container grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((prod) => (
            <Card key={prod.id} product={prod} />
          ))}
        </div>
      ) : (
        <HeaderLine heading={"No products found for this category."} />
      )}
    </div>
  );
};

export default ShowProducts;
