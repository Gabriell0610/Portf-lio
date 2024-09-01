/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/components/left-menu.scss";
import ButtonMenuComponent from "./ButtonMenuComponent";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

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
        <div className="container">
          <h3>Projetos Pessoais </h3>
          <ButtonMenuComponent title="Api Java" />
          <ButtonMenuComponent title="Portfólio" />
          <ButtonMenuComponent title="Desafio DevMagro" />
        </div>
        <div className="container mt-3">
          <h3>Ideias / Desafios</h3>
          <ButtonMenuComponent title="Gerenciador Financeiro  " />
          <ButtonMenuComponent title="Desafio Nubank" />
        </div>
      </div>

      <div className="social-menu">
        <h3>Contato</h3>
        <a href="#">
          <FaEnvelope /> Email
        </a>
        <a href="#">
          {" "}
          <FaGithub /> Github
        </a>
        <a href="#">
          {" "}
          <FaLinkedin /> Linkedin
        </a>
      </div>
    </aside>
  );
};

export default MenuComponent;
