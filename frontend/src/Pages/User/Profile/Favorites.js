import { map, uniqueId } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { getFavorites } from "../Products/productSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const {
    userData: { user },
    logged,
  } = useSelector((state) => state.login);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getFavorites({ user: user._id }));
  }, [dispatch]);

  return (
    <div className="pt-6 px-2">
      <div className="grid grid-cols-2 px-2 gap-2 md:grid-cols-4 md:gap-3">
        {map(products, (product) => (
          <ProductCard
            logged={logged}
            key={uniqueId()}
            product={product}
            //   editHandler={editHandler}
            //   deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
