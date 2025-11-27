import React, { useState } from "react";
import Button from "../../components/Button";
import { products } from "../../utils/products";
import ProductCard from "./ProductCard";
import btnIcon from "../../assets/images/button_arrow.png";

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4);
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div>
      <div className="section-container">
        <h2 className="text-4xl font-bold text-center my-8">{headline}</h2>
        {/* category tabs */}
        <div className=" bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-15">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category) => (
              <button
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProducts(4);
                }}
                key={category}
                className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${
                  selectedCategory === category ? "bg-white text-primary" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* prodicts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        {/* load more products */}
        {visibleProducts < filteredProducts.length && (
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={loadMoreProducts}
              className="text-base font-semibold cursor-pointer text-primary flex items-center gap-1"
            >
              View All <img src={btnIcon} alt="btn icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
