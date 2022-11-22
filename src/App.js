import { Routes, Route, BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import Mint from "./Pages/Mint";
import Mbl_Mint from "./Pages/Mbl_Mint";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/mint' element={<Mint />} />
      <Route path='/mbl_mint' element={<Mbl_Mint />} />
    </Routes>
  );
}

export default App;