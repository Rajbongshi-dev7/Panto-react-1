import React from "react";
import { getImageUrl } from "../../utils/getImageURL";
import Ratings from "../../components/Ratings";
import { FiPlus } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="bg-[#FAFAFA]">
        <img src={getImageUrl(`${product.imageUrl}`)} alt="" />
      </div>
      <div className="p-6 bg-white shadow-sm">
        <h4 className="text-base mb-1">{product.category}</h4>
        <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
        <Ratings rating={product.rating} />
        <div className="justify-between flex items-center mt-5">
          <p className="text-[#0D1B39] font-bold text-lg">
            <sup>$</sup>
            <span>{product.price}</span>
          </p>
          <button className="bg-[#0D1B39] text-white p-2 rounded-full hover:bg-black/50">
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
