import Modal from "react-modal";
import ModalHeader from "./ModalHeader";
import CreateOrderModal from "./ModalBodys/CreateOrderModal";
import Approve from "./ModalBodys/Approve";
import CreateProductModal from "./ModalBodys/CreateProductModal";
import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

function UniversalModal({
  body,
  isOpen,
  toggleModal,
  closeModal,
  orderId,
  approveFunction,
  headerText,
  title,
  productId,
}) {
  const customStyles = {
    content: {
      maxWidth: "550px",
      padding: "1.25rem",
      transform: "auto",
      margin: "auto",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.75)",
      zIndex: "50",
    },
  };
  const modalFull = {
    content: {
      width: "100%",
      height: "100%",
      padding: "1rem",
      transform: "auto",
      position: "fixed",
      zIndex: "50",
    },
  };
  const switchBody = () => {
    switch (body) {
      case "createOrder":
        return <CreateOrderModal closeModal={closeModal} orderId={orderId} />;
      case "createProduct":
        return (
          <CreateProductModal closeModal={closeModal} productId={productId} />
        );
      case "approve":
        return (
          <Approve
            toggleModal={toggleModal}
            approveFunction={approveFunction}
            headerText={headerText}
            title={title}
          />
        );
      default:
        return "Bunday jadval topilmadi";
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      style={
        body === "signup" || "createOrder" || "approve"
          ? { ...customStyles }
          : { ...modalFull }
      }
      onRequestClose={closeModal || toggleModal}
      closeTimeoutMS={100}
      contentLabel="Example Modal"
      appElement={document.getElementById("root") || undefined}
    >
      <ModalHeader toggleModal={closeModal || toggleModal} />
      {switchBody()}
    </Modal>
  );
}

export default UniversalModal;
