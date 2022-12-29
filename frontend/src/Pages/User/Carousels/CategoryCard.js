import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ ind, category }) => {
  return (
    <Link
      to="/products"
      state={{ category }}
      className="min-w-[100px] md:w-[250px]"
    >
      <img src={category?.image} alt="category" className="rounded-xl" />
    </Link>
  );
};

export default CategoryCard;
