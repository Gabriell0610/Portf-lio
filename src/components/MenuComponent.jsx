/* eslint-disable no-unused-vars */
import React from "react";

import "../styles/components/menu-header.scss";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { TbBrandLinktree } from "react-icons/tb";
import Button from "../components/Button";

const MenuComponent = () => {
  return (
    <header>
      <nav className="nav-bar">
        <span>
          <a className="logo-title" href="/">
            VieiraDev
          </a>
        </span>
        <ul className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Artigos</a>
          </li>
        </ul>
      </nav>
      <div className="description mt-5">
        <h1>Desenvolvedor de Software</h1>
        <h2>
          Entre em contato para desenvolver sistemas e sites personalizados!
          Transforme suas ideias em realidade.
        </h2>
        <div className="container-contact mt-8">
          <div className="social-links">
            <a href="https://www.instagram.com/">
              <FaInstagram title="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-vieira-028576255/">
              <FaLinkedin title="LinkedIn" />
            </a>
            <a href="https://www.threads.net/@gb__vieira">
              <FaThreads title="Threads" />
            </a>
            <a href="#">
              <TbBrandLinktree title="Linktree" />
            </a>
            <a href="#">
              <FaWhatsapp title="Whatsapp" />
            </a>
            <a href="mailto:gabrielbarbosaa432@gmail.com">
              <p className="email">gabrielbarbosaa432@gmail.com</p>
            </a>
          </div>
          <Button
            classe={"btn-header"}
            url={"/assets/resume.pdf"}
            download={"curriculo-gabriel.pdf"}
            text={"Download currículo"}
          />
        </div>
      </div>
    </header>
  );
};

export default MenuComponent;
