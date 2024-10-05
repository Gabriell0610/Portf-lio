/* eslint-disable no-unused-vars */
import React from "react";
import MenuComponent from "../../components/MenuComponent";
import "../../styles/components/home-component.scss";
import ProjectDetails from "../../components/ProjectDetails";
import FooterComponent from "../../components/FooterComponent";
const Home = () => {
  return (
    <>
      <MenuComponent />
      <main className="content-main">
        <section id="section-projects ">
          <h2>Projetos Atuais</h2>
          <ProjectDetails />
        </section>
        <section id="section-about">
          <h2 className="mt-5">Sobre Mim</h2>
          <article className="container-about">
            <div className="rigth-side"></div>
            <div className="left-side"></div>
          </article>
        </section>
      </main>
      <FooterComponent />
    </>
  );
};

export default Home;
