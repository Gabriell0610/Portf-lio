/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../styles/components/project-component.scss";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = ({
  title,
  description,
  solution,
  image,
  linkRepository,
  linkProject,
  functionality,
  tecnologies,
}) => {
  return (
    <main>
      <h1 className="title">{title}</h1>
      <section>
        <article className="container mt-3">
          <div className="description">
            <h2 className="main-title">Descrição</h2>
            <p className="mt-1">{description}</p>
            <h2 className="mt-2 main-title">Problema Sanado</h2>
            <p className="mt-1">{solution}</p>
          </div>
          <div className="project">
            <img src={image} alt="" />
            <div className="container-button">
              <button>
                <a className="button mt-2" href={linkRepository} target="blank">
                  {"Código"}
                </a>
              </button>
              <button>
                <a className="button mt-2" href={linkProject} target="blank">
                  {"Projeto"}
                </a>
              </button>
            </div>
          </div>
        </article>
      </section>
      <section>
        <article>
          <h2 className="mt-3 main-title">Funcionalidades</h2>
          <ul>
            {functionality.map((data, index) => (
              <li className="mt-1" key={index}>
                {data}
              </li>
            ))}
          </ul>
          <h2 className="mt-3 main-title">Tecnologias</h2>
          <div className="container-badges">
            {tecnologies.map((url, index) => (
              <img className="mt-1" key={index} src={url} alt="" />
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default ProjectDetails;
