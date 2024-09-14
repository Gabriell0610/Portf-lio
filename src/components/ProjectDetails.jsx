/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../styles/components/project-component.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = ({ title, description, image, link, functionality }) => {
  return (
    <main>
      <h1>{title}</h1>
      <section>
        <article className="container mt-3">
          <div className="description">
            <p>{description}</p>
            <h2 className="mt-3">Funcionalidades</h2>
            <ul className="mt-1">
              {functionality.map((data, index) => {
                return <li key={index}>{data}</li>;
              })}
            </ul>
          </div>
          <div className="project">
            <a
              href="https://github.com/Gabriell0610/Desafio-Final-devMagro"
              target="_blank"
            >
              <img src={image} alt="" />
            </a>
          </div>
        </article>
        <section>
          <article>
            <h2 className="mt-3">Tecnologias</h2>
          </article>
        </section>
      </section>
    </main>
  );
};

export default ProjectDetails;
