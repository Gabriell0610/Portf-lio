/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import MenuComponent from "../../components/MenuComponent";
import ProjectDetails from "../../components/ProjectDetails";
import FooterComponent from "../../components/FooterComponent";
import Button from "../../components/Button";

import "../../styles/components/home-component.scss";
const Home = () => {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <MenuComponent
        onMenuClick={(section) => {
          if (section === "projetos") scrollToSection(projectsRef);
          else if (section === "sobre") scrollToSection(aboutRef);
          else if (section === "contato") scrollToSection(contactRef);
        }}
      />
      <main className="content-main">
        <section ref={projectsRef} id="section-projects">
          <h2>Projetos Atuais</h2>
          <ProjectDetails />
        </section>
        <section ref={aboutRef} id="section-about">
          <h2 className="mt-9">Sobre Mim</h2>
          <article className="container-about">
            <div className="rigth-side mt-1">
              <div className="description">
                <p>
                  Olá, sou Gabriel Vieira, tenho 20 anos sou de Niterói/RJ.
                  Estou graduando em Sistemas de Informação, com foco em
                  desenvolvimento de software. Tenho conhecimento intermediário
                  tanto em back-end quanto em front-end, com experiência na
                  criação de interfaces eficientes e interativas,
                  desenvolvimento de APIs e solução de problemas técnicos.
                </p>
                <p className="mt-1">
                  Atualmente, estou me especializando em back-end com ênfase em
                  Java, buscando aprofundar minhas habilidades e ampliar meu
                  impacto no desenvolvimento de soluções robustas.
                </p>
              </div>
              <div className="education mt-2 ">
                <h2>Educação</h2>
                <div className="edcutation-desc mt-1">
                  <h3>Faculdade Estácio De Sá</h3>
                  <p className="mt-1">
                    Bacharelado em Sistema de Informação, atualmente no 4°
                    período.
                  </p>
                  <Button classe={"button-main mt-1"} text={"CR"} />
                </div>
                <div className="edcutation-desc mt-1">
                  <h3>Curso Oracle Next Education</h3>
                  <p className="mt-1">
                    Curso com foco em BackEnd com Java, SpringBoot e Banco De
                    Dados Sql
                  </p>
                  <Button classe={"button-main mt-1"} text={"Certificado"} />
                </div>
              </div>
            </div>
            <div className="left-side">
              <div className="image">
                <img src="src/assets/img/eu-perfil.jpg.jpg" alt="" />
              </div>
              <div className="image mt-4">
                <img src="src/assets/img/image-portfolio.jpg" alt="" />
                <span>Icarai/Niterói</span>
              </div>
            </div>
          </article>
        </section>
      </main>
      <section ref={contactRef} id="section-contact">
        <FooterComponent />
      </section>
    </>
  );
};

export default Home;
