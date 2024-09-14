/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Artigo from "../pages/artigo/Artigo";
import CrudJava from "../pages/projetos/CrudJava";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/artigos" element={<Artigo />} />
      <Route path="/projeto/crud-java" element={<CrudJava />} />
    </Routes>
  );
};

export default RoutesComponent;
