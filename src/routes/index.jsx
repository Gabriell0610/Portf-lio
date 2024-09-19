/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Artigo from "../pages/artigo/Artigo";
import CrudJava from "../pages/projetos/CrudJava";
import Projeto2 from "../pages/projetos/Projeto2";
import Curriculo from "../pages/cv/Curriculo";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/artigos" element={<Artigo />} />
      <Route path="/experiencias" element={<Curriculo />} />
      <Route path="/projeto/crud-java" element={<CrudJava />} />
      <Route path="/projeto/projeto2" element={<Projeto2 />} />
    </Routes>
  );
};

export default RoutesComponent;
