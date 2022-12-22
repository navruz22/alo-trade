import { map, uniqueId } from "lodash";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SimpleImageSlider, { Slide } from "react-simple-image-slider";
import CustomSlider from "../../../Components/CustomImgSlider/CustomSlider";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import useWindowSize from "../../../hooks/useWindowSize";
import { getProductById, getProducts } from "../Products/productSlice";
import DetailProductCard from "./Components/DetailProductCard";

const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const { products } = useSelector((state) => state.products);
  const { logged } = useSelector((state) => state.login);
  const { width } = useWindowSize();

  const [imagesForSlide, setImageForSlide] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product?._id) {
      setImageForSlide([...product.images]);
    }
  }, [product, id]);
  console.log(imagesForSlide);
  useEffect(() => {
    return () => {
      setImageForSlide([]);
    };
  }, []);

  useEffect(() => {
    dispatch(getProductById({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    const data = {
      page: 0,
      count: 20,
      organization: product?.organization?._id,
    };
    dispatch(getProducts(data));
    //    eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, product]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <div className="w-full bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 pt-6">
          <div className="flex justify-center md:block md:col-span-2">
            {imagesForSlide.length > 0 && (
              <CustomSlider
                width={width < 720 ? "350px" : "600px"}
                height={width < 720 ? "180px" : "400px"}
                images={imagesForSlide}
              />
            )}
          </div>

          <div className="flex flex-col gap-5 py-8">
            <div className="flex gap-[4px]">
              <h2 className="text-[32px] font-bold">{product?.name}</h2>
            </div>
            <div className="flex flex-col text-[18px] font-medium">
              <span>Цена:</span>
              <h2 className="text-[30px] text-orange-500 font-bold">
                {product?.minPrice} - {product?.maxPrice} {product?.currency}
              </h2>
            </div>
            <div className="flex items-center gap-[4px] text-[14px] font-medium">
              Поставка в город:{" "}
              <h2 className="text-[16px] font-bold">
                {product?.region?.label},{" "}
                {product?.region?.districts.map((el) => el.label)}
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-2 py-[30px]">
          <div className="col-span-2 bg-white px-6 py-2 min-h-[100px] mb-4 md:mb-0">
            <h2 className="text-[32px] font-bold">Описание</h2>
            <p className="text-[14px]">{product?.description}</p>
          </div>
          <div className="col-span-1">
            <DetailProductCard id={id} user={product?.organization} />
          </div>
        </div>
      </div>
      <div className="pt-6 pb-[60px] bg-white px-2">
        <Carousel
          responsive={responsive}
          sliderClass="flex items-stretch gap-2 md:gap-4 "
          autoPlay={true}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite={true}
          itemClass=""
        >
          {map(products, (product) => (
            <ProductCard
              logged={logged}
              key={uniqueId()}
              product={product}
              isProductPage={true}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DetailProduct;
