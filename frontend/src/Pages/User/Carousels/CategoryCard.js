import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/category/1.png";
import img2 from "../../../assets/category/2.png";
import img3 from "../../../assets/category/3.png";
import img4 from "../../../assets/category/4.png";
import img5 from "../../../assets/category/5.png";
import img6 from "../../../assets/category/6.png";
import img7 from "../../../assets/category/7.png";
import img8 from "../../../assets/category/8.png";
import img9 from "../../../assets/category/9.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const CategoryCard = ({ ind, category }) => {
  return (
    <Link to="/products" state={{ category }} className="">
      <img src={images[ind]} alt="category" className="rounded-xl" />
    </Link>
  );
};

export default CategoryCard;
