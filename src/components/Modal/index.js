import { CloseIcon } from "../Sidebar/SidebarElements";
import {
  ModalContainer,
  ModalContent,
  ModalExitButton,
  ModalVideo,
} from "./PortfolioModalElements";

const VideoModal = ({
  data,
  portfolioModalToggleIsOpen,
  portfolioModalIsOpen,
  setVideoForModal,
}) => {
  const VIDEO_ID = data.url.substring(data.url.length - 11, data.url.length);

  const handlerOnCloseModal = () => {
    portfolioModalToggleIsOpen();
    setVideoForModal(null);
  };

  return (
    <ModalContainer isOpen={portfolioModalIsOpen} onClick={handlerOnCloseModal}>
      <ModalExitButton>
        <CloseIcon />
      </ModalExitButton>
      <ModalContent>
        <ModalVideo
          style={{ border: "none" }}
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
          allowFullScreen={true}
        />
      </ModalContent>
    </ModalContainer>
  );
};

export default VideoModal;
