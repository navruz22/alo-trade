import React, { useEffect, useState } from "react";
import UniversalModal from "../../../Components/Modal/UniversalModal";
import PageHeader from "../../../Components/PageHeaders/PageHeader";
import OrderCard from "../../../Components/OrderCard/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUser } from "./orderSlice";
import { map, uniqueId } from "lodash";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
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

  const openModal = (body) => {
    setModalBody(body);
    setModalVisible(true);
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
    console.log(id);
    setOrderId(id);
    setModalBody("createOrder");
    setModalVisible(true);
  };

  const count = 2000;

  useEffect(() => {
    dispatch(getOrdersByUser({ page: currentPage, count: countPage }));
  }, [dispatch, currentPage, countPage]);

  return (
    <div
      className="h-screen w-full pb-20 bg-neutral-100 overflow-scroll "
      onScroll={handleScroll}
    >
      <PageHeader
        count={count}
        onClick={openModal}
        countTitle="Faol buyurtmalar:"
        buttonTitle="Buyurtma yaratish"
      />

      <div className="p-4">
        {map(orders, (order) => (
          <OrderCard
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
      />
    </div>
  );
};

export default Orders;
