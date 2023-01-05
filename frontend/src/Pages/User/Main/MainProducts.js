import { map, uniqueId } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import useWindowSize from "../../../hooks/useWindowSize";
import { getProducts } from "../Products/productSlice";

const MainProducts = () => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const {
    logged,
    userData: { user },
  } = useSelector((state) => state.login);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    let count = 20;
    if (width < 720) {
      count = 10;
    }
    const data = {
      page: 0,
      count: count,
      user: user?._id,
    };
    dispatch(getProducts(data));
  }, [dispatch, width, user]);

  return (
    <div className="md:container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-4">
        {map(products, (product) => (
          <ProductCard logged={logged} key={uniqueId()} product={product} />
        ))}
      </div>
      <div className="flex justify-center py-2">
        <Link
          to="/products"
          className="block uppercase shadow md:ml-0  bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white md:text-xs text-[10px] py-2 md:px-10 px-4 rounded"
        >
          Все товары
        </Link>
      </div>
    </div>
  );
};

export default MainProducts;
