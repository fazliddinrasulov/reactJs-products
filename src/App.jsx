import React from "react";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./context";
import MyBasket from "./components/MyBasket";
import Navbar from "./components/Navbar";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mybasket" element={<MyBasket />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
