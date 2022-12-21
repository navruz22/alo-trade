import { map } from "lodash";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
import useWindowSize from "../../../hooks/useWindowSize";
import { getAllCategories } from "../../Category/categorySlice";
import CategoryCard from "./CategoryCard";

const CategoryCarousels = () => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const { categoriesWithSubcategories: categories } = useSelector(
    (state) => state.categories
  );

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

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  if (width < 720) {
    return (
      <div className="py-2 md:py-6 flex gap-2 overflow-x-scroll">
        {categories &&
          categories.length > 0 &&
          map(categories, (category, ind) => (
            <CategoryCard ind={ind} category={category} />
          ))}
      </div>
    );
  }
  return (
    <div className="py-2 md:py-6">
      {categories && categories.length > 0 && (
        <>
          <div className="flex justify-between gap-4 items-center mb-4">
            {map([...categories].slice(4), (category, ind) => (
              <CategoryCard ind={ind} category={category} />
            ))}
          </div>
          <div className="flex justify-center gap-4 items-center">
            {map([...categories].slice(4, -1), (category, ind) => (
              <CategoryCard ind={ind + 5} category={category} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryCarousels;
