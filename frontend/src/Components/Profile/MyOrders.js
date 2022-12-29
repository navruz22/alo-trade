import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrder,
  getOrdersCount,
  getOrders,
  updateOrderPosition,
} from "../../Pages/User/Orders/orderSlice";
import { map, uniqueId } from "lodash";
// import { filter } from "./constants";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";
import UniversalModal from "../Modal/UniversalModal";
import { getTranslations } from "../../translation";
import PageHeader from "../PageHeaders/PageHeader";
import OrderCard from "../OrderCard/OrderCard";
import Pagination from "../Pagination/Pagination";

const MyOrders = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(["common"]);
  const translations = getTranslations(t);
  //   const filterData = filter(t);
  const navigate = useNavigate();
  const {
    logged,
    userData: { user, organization },
  } = useSelector((state) => state.login);
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
  const [orderId, setOrderId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalDatas, setTotalDatas] = useState(0);
  const countPage = 10;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalBody, setModalBody] = useState(null);

  const [filterVisible, setFilterVisible] = useState(false);
  const [filterBody, setFilterBody] = useState(null);

  const closeHandler = () => {
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const openModal = (body) => {
    setModalBody(body);
    setModalVisible(true);
    setOrderId(null);
  };

  const deleteHandler = (id) => {
    setOrderId(id);
    setModalBody("approve");
    setModalVisible(true);
  };

  const editHandler = (id) => {
    setOrderId(id);
    setModalBody("createOrder");
    setModalVisible(true);
  };

  const updatePosition = (id) => {
    dispatch(updateOrderPosition({ id }));
  };

  //   const handleFilter = (e) => {
  //     const value = e.target.value;
  //     dispatch(filterOrder(value));
  //   };

  const deleteOrderById = () => {
    orderId &&
      dispatch(deleteOrder({ id: orderId })).then(({ error }) => {
        if (!error) {
          setModalVisible(false);
          setOrderId(null);
        }
      });
  };

  useEffect(() => {
    setCurrentPage(0);
    const data = {
      page: 0,
      count: countPage,
      order: "my",
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
  }, [order, categories, subcategories, tradetypes, regions, districts, name]);

  useEffect(() => {
    const data = {
      order: "my",
      page: currentPage,
      count: countPage,
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
    <div className="w-full bg-white">
      <div className="md:container">
        <div className="w-full md:px-4 flex flex-col gap-[20px] pt-4">
          <div className="px-4 flex flex-col gap-[20px]">
            {map(orders, (order) => (
              <OrderCard
                translations={translations}
                logged={logged}
                key={uniqueId()}
                order={order}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                updatePosition={updatePosition}
                isProfile={true}
              />
            ))}
          </div>
          {totalDatas > 0 && (
            <div className="flex justify-center py-2">
              <Pagination
                totalDatas={totalDatas}
                countPage={countPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          )}
        </div>
      </div>

      <UniversalModal
        isOpen={modalVisible}
        body={modalBody}
        closeModal={closeHandler}
        toggleModal={toggleModal}
        orderId={orderId}
        modalBody={modalBody}
        headerText={"Удалить заказ"}
        title={"Вы действительно хотите удалить заказ?"}
        approveFunction={deleteOrderById}
      />
    </div>
  );
};

export default MyOrders;
