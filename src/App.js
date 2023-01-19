import Home from "./Home";
import About from "./About";
import Detail from "./Detail";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="detail/:detailId" element={<Detail />} />
    </Routes>
  );
};

export default App;
