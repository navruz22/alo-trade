import Modal from "react-modal";
import ModalHeader from "./ModalHeader";
import SignUpModal from "./ModalBodys/SignUpModal";

function UniversalModal({ body, isOpen, toggleModal, closeModal }) {
  const customStyles = {
    content: {
      width: "500px",
      // height: "600px",
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
      case "signup":
        return <SignUpModal />;

      default:
        return "Bunday jadval topilmadi";
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      style={body === "signup" ? { ...customStyles } : { ...modalFull }}
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