/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../styles/components/project-component.scss";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = ({
  title,
  description,
  image,
  linkRepository,
  linkProject,
  functionality,
  tecnologies,
}) => {
  return (
    <div className="page-container">
      <main>
        <h1 className="title">{title}</h1>
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
              <img src={image} alt="" />
              <a className="btn-link" href={linkRepository} target="blank">
                <FaGithub /> Repositório
              </a>
            </div>
          </article>
        </section>
        <section>
          <article>
            <h2 className="mt-3">Tecnologias</h2>
            <p className="mt-1">
              Nesse projeto puder aprimorar meus conhecimentos nas seguintes
              tecnologias:
            </p>
            <div className="tech-icons flex mt-2">
              {tecnologies.map((data, index) => (
                <span key={index}>{data.icon}</span>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetails;
