import Modal from "react-modal";
import ModalHeader from "./ModalHeader";
import CreateOrderModal from "./ModalBodys/CreateOrderModal";
import Approve from "./ModalBodys/Approve";
import CreateProductModal from "./ModalBodys/CreateProductModal";
import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import ZoomImages from "./ModalBodys/ZoomImages";
import WarningSignIn from "./ModalBodys/WarningSignIn";

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
  img,
}) {
  const customStyles = {
    content: {
      maxWidth: "550px",
      padding: "1.25rem",
      transform: "auto",
      margin: "auto",
      // border: "none",
      // background: "none",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.75)",
      zIndex: "50",
    },
  };

  const zoomStyles = {
    content: {
      maxWidth: "900px",
      border: "none",
      background: "none",
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
      maxWidth: "100%",
      padding: "1.25rem",
      transform: "auto",
      display: "flex",
      justifyContent: "center",
      alignCenter: "center",
      border: "none",
      background: "none",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.75)",
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
      case "zoomImg":
        return <ZoomImages imgUrl={img} />;
      case "warningSignIn":
        return <WarningSignIn />;
      default:
        return "Bunday jadval topilmadi";
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      style={
        body === "signup" ||
        body === "createOrder" ||
        body === "approve" ||
        body === "createProduct" ||
        body === "warningSignIn"
          ? { ...customStyles }
          : body === "zoomImg"
          ? { ...zoomStyles }
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
