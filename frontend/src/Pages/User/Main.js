import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrders, getOrdersByFilter } from "./Orders/orderSlice";
import { map, uniqueId } from "lodash";
import OrderCard from "../../Components/OrderCard/OrderCard";
import UniversalModal from "../../Components/Modal/UniversalModal";
import MainPageHeader from "../../Components/MainPageHeader/MainPageHeader";

const Main = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
  const { order, categories, subcategories, tradetypes, regions, districts } =
    useSelector((state) => state.filter);
  const { logged } = useSelector((state) => state.login);
  const [orderId, setOrderId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const countPage = 4;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalBody, setModalBody] = useState(null);

  const closeHandler = () => {
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    bottom &&
      (currentPage + 1) * countPage === orders.length &&
      setCurrentPage(currentPage + 1);
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
    const data = {
      page: 0,
      count: 4,
      order,
      categories,
      subcategories,
      tradetypes,
      regions,
      districts,
    };
    setCurrentPage(0);
    dispatch(getOrders(data));
  }, [
    dispatch,
    order,
    categories,
    subcategories,
    tradetypes,
    regions,
    districts,
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
    };

    currentPage !== 0 && dispatch(getOrdersByFilter(data));
    //    eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, order, currentPage, countPage]);

  return (
    <div
      className="h-screen w-full pb-20 bg-neutral-100 overflow-scroll "
      onScroll={handleScroll}
    >
      {!logged && <MainPageHeader />}
      <div className="p-4 pt-0">
        {map(orders, (order) => (
          <OrderCard
            logged={logged}
            key={uniqueId()}
            order={order}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>

      <UniversalModal
        isOpen={modalVisible}
        body={modalBody}
        closeModal={closeHandler}
        toggleModal={toggleModal}
        orderId={orderId}
        modalBody={modalBody}
        headerText="Buyurtmani o'chirish"
        title="Siz rostdan ham buyurtmani o'chirmoqchimisiz?"
        approveFunction={deleteOrderById}
      />
    </div>
  );
};

export default Main;
