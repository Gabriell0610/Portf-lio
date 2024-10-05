/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../styles/components/project-component.scss";
import { FaGithub } from "react-icons/fa";

import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <article className="container-project mt-5">
      <div className="container-content">
        <div className="card-image">
          <img src="assets/img/image-java-project.webp" alt="" />
        </div>
        <div className="description-project  mt-2">
          <a
            href="https://github.com/Gabriell0610/Desafio-Final-devMagro"
            target="blank"
          >
            CRUD De Usuário <FaGithub />
          </a>
        </div>
      </div>
      <div className="container-content">
        <div className="card-image">
          <img src="assets/img/image-java-project.webp" alt="" />
        </div>
        <div className="description-project mt-2">
          <a href="#">
            CRUD De Usuário <FaGithub />
          </a>
        </div>
      </div>
      <div className="container-content">
        <div className="card-image">
          <img src="assets/img/image-java-project.webp" alt="" />
        </div>
        <div className="description-project  mt-2">
          <a href="#">
            CRUD De Usuário <FaGithub />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetails;
