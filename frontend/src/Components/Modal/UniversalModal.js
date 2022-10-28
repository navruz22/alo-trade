import Modal from "react-modal";
import ModalHeader from "./ModalHeader";
import CreateOrderModal from "./ModalBodys/CreateOrderModal";
import Approve from "./ModalBodys/Approve";

function UniversalModal({
  body,
  isOpen,
  toggleModal,
  closeModal,
  orderId,
  approveFunction,
  headerText,
  title,
}) {
  const customStyles = {
    content: {
      width: "800px",
      height: "600px",
      padding: "1.25rem",
      transform: "auto",
      margin: "auto",
    },
  };
  const modalFull = {
    content: {
      width: "100%",
      height: "100%",
      padding: "1rem",
      transform: "auto",
    },
  };
  const switchBody = () => {
    switch (body) {
      case "createOrder":
        return <CreateOrderModal closeModal={closeModal} orderId={orderId} />;
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
