import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import ProShop from "./components/ProShop";
import Specials from "./components/Specials";
import League from "./components/League";
import Food from "./components/Food";
import Party from "./components/Party";
import "./App.css";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [shopSelect, setShopSelect] = useState([]);
  const [partySelect, setPartySelect] = useState([]);

  const getShop = async () => {
    const res = await axios.get("http://localhost:3001/proshop");
    setShopSelect(res.data);
  };

  const getParty = async () => {
    const res = await axios.get("http://localhost:3001/party");
    setPartySelect(res.data);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/proshop"
            element={<ProShop getShop={getShop} shopSelect={shopSelect} />}
          />
          <Route path="/specials" element={<Specials />} />
          <Route path="/food" element={<Food />} />
          <Route path="/leagues" element={<League />} />
          <Route
            path="/Party"
            element={<Party getParty={getParty} partySelect={partySelect} />}
          />
        </Routes>
      </main>
    </div>
  );
};
export default App;
