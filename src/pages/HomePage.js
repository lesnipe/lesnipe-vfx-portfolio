import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { infoObject1, infoObject2, infoObject3 } from "../components/Info/Data";
import Footer from "../components/Footer";
import VideoModal from "../components/Modal";

const Home = ({
  redirectTo,
  isOpen,
  toggleIsOpen,
  dataGallery,
  dataPortfolio,
  portfolioModalIsOpen,
  setPortfolioModalIsOpen,
  videoForModal,
  setVideoForModal
}) => {
  return (
    <>
      <Sidebar
        redirectTo={redirectTo}
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
      />
      <Navbar
        redirectTo={redirectTo}
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
      />
      <Hero />
      <Info
        dataGallery={dataGallery}
        dataPortfolio={dataPortfolio}
        portfolioModalIsOpen={portfolioModalIsOpen}
        setPortfolioModalIsOpen={setPortfolioModalIsOpen}
        videoForModal={videoForModal}
        setVideoForModal={setVideoForModal}
        {...infoObject1}
      >
      </Info>
      <Info
        dataGallery={dataGallery}
        dataPortfolio={dataPortfolio}
        portfolioModalIsOpen={portfolioModalIsOpen}
        setPortfolioModalIsOpen={setPortfolioModalIsOpen}
        videoForModal={videoForModal}
        setVideoForModal={setVideoForModal}
        {...infoObject2}
      />
      <Info
        dataGallery={dataGallery}
        dataPortfolio={dataPortfolio}
        portfolioModalIsOpen={portfolioModalIsOpen}
        setPortfolioModalIsOpen={setPortfolioModalIsOpen}
        videoForModal={videoForModal}
        setVideoForModal={setVideoForModal}
        {...infoObject3}
      />
      <Footer />
    </>
  );
};

export default Home;
