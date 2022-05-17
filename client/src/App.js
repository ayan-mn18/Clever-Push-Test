import AllPhotos from "./components/AllPhotos/AllPhotos";
import {BrowserRouter  } from 'react-router-dom'
import  {Route , Routes} from 'react-router'
import React from "react";
import  Navbar from "./components/Navbar";
import  Footer from "./components/Footer";
import HomePage from "./views/HomePage/HomePage";
import SearchPage from "./views/SearchPage/SearchPage";
import SingleImagePage from "./views/SingleImagePage/SingleImagePage";

function App() {
  return (
      <React.Fragment>
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>}  />
            <Route path="/search/:q" element={<SearchPage/>}  />
            <Route path="/image/:id" element={<SingleImagePage/>}  />
          </Routes>
        {/* <Footer/> */}
      </React.Fragment>
  );
}

export default App;
