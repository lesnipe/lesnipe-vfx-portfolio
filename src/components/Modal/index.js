import Modal from "react-modal";

const VideoModal = ({ data , portfolioModalIsOpen, setPortfolioModalIsOpen}) => {
  
  const openModal = () => setPortfolioModalIsOpen(true);
  const closeModal = () => setPortfolioModalIsOpen(false);

  
    {portfolioModalIsOpen && <Modal
      isOpen={portfolioModalIsOpen}
      onAfterOpen={openModal}
      onRequestClose={closeModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <h1>{data.title && console.log("anoikse xd")}</h1>
    </Modal>}
  
  
};

export default VideoModal;