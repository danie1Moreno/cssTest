import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NoMatchPage from "./pages/NoMatchPage";
import "./layout.css";

function App() {
  return (
    <div className="layout-container">
      <header>
        <div>nav</div>
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
        <div>foot</div>
      </footer>
    </div>
  );
}

export default App;
