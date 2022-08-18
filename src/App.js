import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import HomePage from "./pages/HomePage";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./services/firebase-config.js";

function App() {
  const [dataGallery, setDataGallery] = useState({});
  const [dataPortfolio, setDataPortfolio] = useState({});
  const [fetchedData, setFetchedData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioModalIsOpen, setPortfolioModalIsOpen] = useState(false);
  const [videoForModal, setVideoForModal] = useState(null);

  const redirectTo = (url) => {
    window.open(url, "_blank");
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const portfolioModalToggleIsOpen = () => {
    setPortfolioModalIsOpen(!portfolioModalIsOpen);
  };

  // Disable scrolling when sidebar modal is open
  useEffect(() => {
    isOpen && (document.body.style.overflow = 'hidden');
    !isOpen && (document.body.style.overflow = 'unset');
 }, [isOpen ]);

 // Disable scrolling when portfolio video modal is open
 useEffect(() => {
  portfolioModalIsOpen && (document.body.style.overflow = 'hidden');
  !portfolioModalIsOpen && (document.body.style.overflow = 'unset');
}, [portfolioModalIsOpen ]);

  // Fetch data from Firebase
  useEffect(() => {
    const getPortfolio = async () => {
      const res = await getDocs(collection(db, "portfolio-yt-playlist"))
      setDataPortfolio(res.docs.map((doc) => ({...doc.data()})).reverse())
    }
    const getGallery = async () => {
      const res = await getDocs(collection(db, "portfolio-gallery"))
      setDataGallery(res.docs.map((doc) => ({...doc.data()})))
      setFetchedData(true);
    }
    getPortfolio();
    getGallery();
    console.log("Fetched data OK.");
  }, [])

  return fetchedData ? (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              redirectTo={redirectTo}
              toggleIsOpen={toggleIsOpen}
              isOpen={isOpen}
              dataGallery={dataGallery}
              dataPortfolio={dataPortfolio}
              portfolioModalIsOpen={portfolioModalIsOpen}
              portfolioModalToggleIsOpen={portfolioModalToggleIsOpen}
              videoForModal={videoForModal}
              setVideoForModal={setVideoForModal}
            />
          }
          exact
        />
      </Routes>
    </BrowserRouter>
  ) : (
    <Skeleton animation="pulse" height={100} />
  );
}

export default App;
