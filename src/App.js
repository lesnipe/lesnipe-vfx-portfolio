import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import HomePage from "./pages/HomePage";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./services/firebase-config.js";
import dataPortfolioLocal from "./resPortfolio.json";
import dataGalleryLocal from "./resGallery.json";


function App() {
  const [dataGallery, setDataGallery] = useState({});
  const [dataPortfolio, setDataPortfolio] = useState({});
  const [fetchedData, setFetchedData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioModalIsOpen, setPortfolioModalIsOpen] = useState(false);
  const [videoForModal, setVideoForModal] = useState({});

  const redirectTo = (url) => {
    window.open(url, "_blank");
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  // Get data from Firebase
  // useEffect(() => {
  //   const getPortfolio = async () => {
  //     const res = await getDocs(collection(db, "portfolio-yt-playlist"))
  //     setDataPortfolio(res.docs.map((doc) => ({...doc.data()})).reverse())
  //     // reverseObject(dataPortfolio);
  //   }
  //   const getGallery = async () => {
  //     const res = await getDocs(collection(db, "portfolio-gallery"))
  //     setDataGallery(res.docs.map((doc) => ({...doc.data()})))
  //     setFetchedData(true);
  //   }
  //   getPortfolio();
  //   getGallery();
  // }, [])

  // Get data from Local (for developing phasee)
  useEffect(() => {
    setDataGallery(dataGalleryLocal);
    setDataPortfolio(dataPortfolioLocal.reverse());
    setFetchedData(true);
    
  }, []);

  console.log(dataPortfolio);
  console.log(dataGallery);

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
              setPortfolioModalIsOpen={setPortfolioModalIsOpen}
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
