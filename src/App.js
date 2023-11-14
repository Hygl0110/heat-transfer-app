import "./App.css";
import { useState } from "react";

//Pages
import { Home } from "./components/Pages/Home/Home";
import { Header } from "./components/Organisms/Header";
import { TsCharts } from "./components/Pages/TsCharts/TsCharts";
import { QconvQrad } from "./components/Pages/QconvQrad/QconvQrad";
import { PiQconvQrad } from "./components/Pages/PiQconvQrad/PiQconvQrad";
import { Footer } from "./components/Organisms/Footer";
import { Conclusions } from "./components/Pages/Conclusions/Conclusions";

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
          <>
            <button onClick={() => changePage("home")}>
              <b>Home</b>
            </button>
          </>
          <>
            <button onClick={() => changePage("TsCharts")}>
              <b>
                T<sub>s</sub> v.s. h & 𝜺
              </b>
            </button>
          </>
          <>
            <button onClick={() => changePage("Qconv Qrad")}>
              <b>
                Q&#x0307;<sub>conv</sub> Q&#x0307;<sub>rad</sub> v.s. h & 𝜺
              </b>
            </button>
          </>
          <>
            <button onClick={() => changePage("Pi Qconv Qrad")}>
              <b>
                (1-n)P<sub>i</sub> Q&#x0307;<sub>conv</sub> Q&#x0307;
                <sub>rad</sub> v.s. h & 𝜺
              </b>
            </button>
          </>
          <>
            <button onClick={() => changePage("Conclusions")}>
              <b>Conclusions</b>
            </button>
          </>
        </div>

        <main>
          {/* paginas */}
          {currentPage === "home" && <Home />}
          {currentPage === "TsCharts" && <TsCharts />}
          {currentPage === "Qconv Qrad" && <QconvQrad />}
          {currentPage === "Pi Qconv Qrad" && <PiQconvQrad />}
          {currentPage === "Conclusions" && <Conclusions />}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
