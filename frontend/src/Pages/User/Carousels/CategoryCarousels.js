import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Category/categorySlice";
import CategoryCard from "./CategoryCard";

const CategoryCarousels = () => {
  const dispatch = useDispatch();
  const { categoriesWithSubcategories: categories } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
  };

  return (
    <div className="py-2 md:py-6">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        infinite={true}
        itemClass={"px-1 md:px-4"}
      >
        {categories &&
          categories.map((category, ind) => (
            <CategoryCard ind={ind} category={category} />
          ))}
      </Carousel>
    </div>
  );
};

export default CategoryCarousels;
