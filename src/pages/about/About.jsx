/* eslint-disable no-unused-vars */
import React from "react";
import MenuComponent from "../../components/MenuComponent";
import "../../styles/components/about-component.scss";
import resume from "../../assets/img/resume.pdf";

const About = () => {
  return (
    <>
      <MenuComponent />
      <main className="content-main">
        <h1 className="title ">Desenvolvedor Web</h1>
        <section className="container-about mt-5">
          <div className="description-about">
            <h2 className="title-section">Sobre Mim</h2>
            <p className="description mt-2">
              Olá a todos, me chamo Gabriel Barbosa, tenho 20 anos e sou de
              Niterói, Rio de Janeiro. Minha paixão por tecnologia começou desde
              cedo. Aos 9 anos, ganhei meu primeiro notebook e, desde então, não
              larguei mais essa vida em frente às telas. Hoje estudo programação
              e curso Sistemas de Informação. No momento trabalho como
              freelancer.
            </p>
            <button className="mt-3">
              <a className="button" href={resume} download="resume">
                {"Download Currículo"}
              </a>
            </button>
          </div>
          <div className="image-about">
            <img src="src\assets\img\eu-perfil.jpg.jpg" alt="" />
            <div className="image-desc">
              <img
                className="mt-3"
                src="src\assets\img\image-portfolio.jpg"
                alt=""
              />
              <p>Icaraí/Niterói</p>
            </div>
          </div>
        </section>
        <section className="container-courses mt-4">
          <h2 className="title-section">Educação</h2>
          <div className="course mt-3">
            <h2>Universidade Estácio de Sá</h2>
            <p className="mt-1">
              Bacharelado em Sistema de Informação - Atualmente no 4° semestre
            </p>
            <button className="mt-2">
              <a
                className="button mt-2"
                href="https://drive.google.com/file/d/1ORs-Xuh5DneKeY7eqUQVjPO-W5jFwdro/view?usp=sharing"
              >
                {"Verificar CR"}
              </a>
            </button>
          </div>
          <div className="course mt-3">
            <h2>Oracle Next Education</h2>
            <p className="mt-1">
              Curso com foco em desenvolvimento backend - Java + SpringBoot +
              Banco de Dados
            </p>
            <button className="mt-1">
              <a
                className="button mt-2"
                href="https://drive.google.com/file/d/1ORs-Xuh5DneKeY7eqUQVjPO-W5jFwdro/view?usp=sharing"
                target="blank"
              >
                {"Certificado  "}
              </a>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
