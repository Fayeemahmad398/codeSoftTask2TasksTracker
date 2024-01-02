/* eslint-disable react/jsx-no-duplicate-props */
import Navbar from "./Components/Navbar";
import "./Style/main.css";
import MainSection from "./Components/MainSection";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [searchTerm, setSearchTerm] = useState([]);
  const [isGrid, setGrid] = useState(false);

  return (
    <div className="app">
      <ToastContainer />
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isGrid={isGrid}
        setGrid={setGrid}
      />
      <MainSection isGrid={isGrid} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
