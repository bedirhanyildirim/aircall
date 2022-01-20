import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CallList from "./components/CallList.jsx";
import CallDetails from "./components/CallDetails.jsx";

function App() {
  return (
    <div className="container">
      <Header/>
      <div className="container-view">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<CallList/>}/>
                  <Route path="/call/:id" element={<CallDetails/>}/>
              </Routes>
          </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
