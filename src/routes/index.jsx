/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import DesafioDevMagroPage from "../pages/desafiodevmagro/DesafioDevMagroPage";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route
        path="/projeto/desafio-devmagro"
        element={<DesafioDevMagroPage />}
      />
      <Route path="/" element={<About />} />
      <Route path="/" element={<About />} />
    </Routes>
  );
};

export default RoutesComponent;
