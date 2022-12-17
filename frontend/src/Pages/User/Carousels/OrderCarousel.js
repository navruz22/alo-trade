import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, getOrdersCount } from "../Orders/orderSlice";
import { map, uniqueId } from "lodash";
import { useTranslation } from "react-i18next";
import { getTranslations } from "../../../translation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OrderCardMain from "../../../Components/OrderCard/OrderCardMain";
import { Link } from "react-router-dom";

const OrderCarousel = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(["common"]);
  const translations = getTranslations(t);
  const { orders } = useSelector((state) => state.orders);
  const {
    order,
    categories,
    subcategories,
    tradetypes,
    regions,
    districts,
    name,
  } = useSelector((state) => state.filter);
  const { logged, userData } = useSelector((state) => state.login);
  //   const [orderId, setOrderId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalDatas, setTotalDatas] = useState(0);
  const countPage = 10;
  const { user } = userData;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.3,
      slidesToSlide: 1.3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    const data = {
      page: 0,
      count: 4,
      order,
      categories,
      subcategories,
      tradetypes,
      regions,
      districts,
      user: user?._id,
      name,
    };
    setCurrentPage(0);
    dispatch(getOrders(data));
    dispatch(getOrdersCount(data)).then(
      ({ error, payload: { totalCount } }) => {
        if (!error) {
          setTotalDatas(totalCount);
        }
      }
    );
  }, [
    dispatch,
    order,
    categories,
    subcategories,
    tradetypes,
    regions,
    districts,
    user,
    name,
  ]);
  useEffect(() => {
    const data = {
      page: currentPage,
      count: countPage,
      order,
      categories,
      subcategories,
      tradetypes,
      regions,
      districts,
      user: user?._id,
      name,
    };
    dispatch(getOrders(data));
    dispatch(getOrdersCount(data)).then(
      ({ error, payload: { totalCount } }) => {
        if (!error) {
          setTotalDatas(totalCount);
        }
      }
    );
    //    eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, order, currentPage, countPage]);
  return (
    <div className="pt-[30px]">
      <div className="flex items-center justify-between mb-[30px] w-full">
        <h2 className="md:text-[36px] text-[16px] font-bold">
          Актуальные заявки:
        </h2>
        <Link
          to="/orders"
          className="block uppercase shadow md:ml-0  bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white md:text-xs text-[10px] py-3 md:px-10 px-2 rounded"
        >
          Все заявки
        </Link>
      </div>
      <Carousel
        responsive={responsive}
        sliderClass="items-center md:gap-[10px]"
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        infinite={true}
        itemClass="pb-2"
      >
        {map(orders, (order) => (
          <OrderCardMain
            translations={translations}
            logged={logged}
            key={uniqueId()}
            order={order}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default OrderCarousel;
