import "./App.css";
import { useState } from "react";

//Pages
import { Home } from "./components/Pages/Home/Home";
import { Header } from "./components/Organisms/Header";
import { TsCharts } from "./components/Pages/TsCharts/TsCharts";
import { QconvQrad } from "./components/Pages/QconvQrad.jsx/QconvQrad";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <div className="app_container">
        <Header />
        <div className="tabs">
          <button onClick={() => changePage("home")}>Home</button>
          <button onClick={() => changePage("TsCharts")}>Ts Charts</button>
          <button onClick={() => changePage("Qconv Qrad")}>Qconv Qrad</button>
        </div>

        <main>
          {currentPage === "home" && <Home />}
          {currentPage === "TsCharts" && <TsCharts />}
          {currentPage === "Qconv Qrad" && <QconvQrad />}
        </main>
      </div>
    </div>
  );
};

export default App;
