import { Routes, Route } from "react-router-dom";
import Card from "./Pages/Main";
import Success from "./Pages/Success";
import './App.css';

function App() {
  return (
    <div className="App-header">
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <footer>
        <p align="center" className="copy">© 2020 - {new Date().getFullYear()}, Yeonwoo Seo </p>
      </footer>
    </div>
  );
}

export default App;
