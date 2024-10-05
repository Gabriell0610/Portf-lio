/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/components/footer-component.scss";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { TbBrandLinktree } from "react-icons/tb";

const FooterComponent = () => {
  return (
    <footer>
      <div className="container-description-footer">
        <div className="description-footer">
          <h1>
            Entre em <span>Contato</span>
          </h1>
          <p className="mt-1">
            Transforme suas ideias em realidade! Se você quiser agendar uma
            reunião, entre em contato comigo por e-mail ou através das minhas
            redes sociais.
          </p>
        </div>
        <a href="mailto:gabrielbarbosaa432@gmail.com">
          <p className="email mt-2">gabrielbarbosaa432@gmail.com</p>
        </a>
        <div className="container-icons mt-2">
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
        </div>
      </div>
      <p className="copy mt-7">&copy; Feito por Gabriel Vieira</p>
    </footer>
  );
};

export default FooterComponent;
