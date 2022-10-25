import React, { useState } from "react";
import AddButton from "../../../Components/Buttons/AddButton";
import UniversalModal from "../../../Components/Modal/UniversalModal";
import PageHeader from "../../../Components/PageHeaders/PageHeader";

const Orders = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeHandler = () => {
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const count = 2000;
  return (
    <div className="w-full h-full">
      <PageHeader
        count={count}
        onClick={toggleModal}
        countTitle="Faol buyurtmalar:"
        buttonTitle="Buyurtma yaratish"
      />
      <UniversalModal
        isOpen={modalVisible}
        body="createOrder"
        closeModal={closeHandler}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default Orders;
