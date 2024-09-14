/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/components/left-menu.scss";
import ButtonMenuComponent from "./ButtonMenuComponent";

const MenuComponent = () => {
  const navigate = useNavigate();

  return (
    <aside className="menu-main">
      <div className="menu-header menu-space">
        <h1 onClick={() => navigate("/")} className="title-header">
          VieiraDev
        </h1>
        <h3 onClick={() => navigate("/")}>Sobre</h3>
        <h3 onClick={() => navigate("/artigos")}>Artigos</h3>
        <h3>CV</h3>
      </div>

      <div className="menu-projects menu-space">
        <div className="container-project">
          <h3>Projetos Pessoais </h3>
          <ButtonMenuComponent title="Portfólio" />
          <ButtonMenuComponent
            title="Crud Java"
            onClick={() => navigate("/projeto/crud-java")}
          />
          <ButtonMenuComponent title="Site de encomenda " />
        </div>
        <div className="container-project mt-3">
          <h3>Estudos / Ideias</h3>
          <ButtonMenuComponent title="Kanban" />
          <ButtonMenuComponent title="Organizador de Vaga" />
        </div>
      </div>

      <div className="social-menu">
        <h3>Contato</h3>
        <a className="btn-link" href="">
          <FaEnvelope /> Email
        </a>
        <a
          className="btn-link"
          href="https://github.com/Gabriell0610"
          target="blank"
        >
          {" "}
          <FaGithub /> Github
        </a>
        <a
          className="btn-link"
          href="https://www.linkedin.com/in/gabriel-vieira-028576255/"
          target="blank"
        >
          {" "}
          <FaLinkedin /> Linkedin
        </a>
      </div>
    </aside>
  );
};

export default MenuComponent;
