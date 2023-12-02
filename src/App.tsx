import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NoMatchPage from "./pages/NoMatchPage";
import "./layout.css";
import LinePlot from "./components/LinePlot";
import * as d3 from "d3";
import { useState } from "react";
import DrawBoard from "./components/DrawBoard.tsx";
import WorldMap from "./components/WorldMap.tsx";

function App() {
  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  function onMouseMove(event: React.MouseEvent<HTMLElement>) {
    const [x, y] = d3.pointer(event);
    setData(data.slice(-200).concat(Math.atan2(x, y)));
  }
  return (
    <div className="layout-container">
      <header>
        {/* <div onMouseMove={onMouseMove}>
          <LinePlot data={data} />
        </div> */}
      </header>
      <aside>
        <p>Aside</p>
        <div className="">4</div>
        <div className="card">5</div>
        <div className="">6</div>
        <div className="">7</div>
        <div className="">8</div>
        <div className="">9</div>
      </aside>
      <main className="">
        <div>
          <WorldMap />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/5000CommonWords" element={<Commonwords />}>
              <Route index path="list" element={<WordList />} />
              <Route path="newword" element={<NewWord />} />
              <Route path="search" element={<SearchWord />} />
            </Route> */}
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </main>
      <footer>
        <div>Footer</div>
        <DrawBoard />
      </footer>
    </div>
  );
}

export default App;
