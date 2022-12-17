import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById } from "../Orders/orderSlice";
import SimpleImageSlider from "react-simple-image-slider";
import DetailOrderCard from "./Components/DetailOrderCard";
import useWindowSize from "../../../hooks/useWindowSize";

const DetailOrder = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { width } = useWindowSize();

  const { order } = useSelector((state) => state.orders);

  const [imagesForSlide, setImageForSlide] = useState([]);

  useEffect(() => {
    dispatch(getOrderById({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (order?._id) {
      setImageForSlide([...order.images.map((el) => ({ url: el }))]);
    }
  }, [order]);

  return (
    <div className="w-full bg-slate-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 pt-6">
          <div className="flex justify-center md:block md:col-span-2">
            {imagesForSlide.length > 0 && (
              <SimpleImageSlider
                width={width < 720 ? 350 : 800}
                height={width < 720 ? 180 : 450}
                images={imagesForSlide}
                showBullets={true}
                showNavs={true}
                style={{ backgroundPosition: "center" }}
              />
            )}
          </div>

          <div className="flex flex-col gap-5 py-8">
            <div className="flex gap-[4px]">
              <h2 className="text-[24px] md:text-[32px] font-bold">
                {order?.name}
              </h2>
            </div>
            <div className="flex flex-col text-[18px] font-medium">
              <span>Цена:</span>
              <h2 className="text-[30px] text-orange-500 font-bold">
                {order?.minPrice} - {order?.maxPrice} {order?.currency}
              </h2>
            </div>
            <div className="flex items-center gap-[4px] text-[14px] font-medium">
              Поставка в город:{" "}
              <h2 className="text-[16px] font-bold">
                {order?.region?.label},{" "}
                {order?.region?.districts.map((el) => el.label)}
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-2 py-[30px]">
          <div className="col-span-2 bg-white px-6 pt-2 mb-4 md:mb-0">
            <h2 className="text-[32px] font-bold">Описание</h2>
            <p className="text-[14px]">{order?.description}</p>
          </div>
          <div className="col-span-1">
            <DetailOrderCard id={id} user={order?.user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailOrder;
