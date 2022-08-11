import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { infoObject1, infoObject2, infoObject3 } from "../components/Info/Data";
import Footer from "../components/Footer";


const Home = ({ redirectTo, isOpen, toggleIsOpen, dataGallery, dataPortfolio}) => {
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
      <Info dataGallery={dataGallery} dataPortfolio={dataPortfolio}  {...infoObject1} />
      <Info dataGallery={dataGallery} dataPortfolio={dataPortfolio} {...infoObject2} />
      <Info dataGallery={dataGallery} dataPortfolio={dataPortfolio} {...infoObject3} />
      <Footer />
    </>
  );
};

export default Home;
