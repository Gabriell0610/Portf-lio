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
    <main>
      <h1 className="title">{title}</h1>
      <section>
        <article className="container mt-3">
          <div className="description">
            <h2 className="main-title">Descrição</h2>
            <p className="mt-1">{description}</p>
            <p className="mt-3">Tecnologias usadas nesse projeto:</p>
            <div className="tech-icons flex mt-2">
              {tecnologies.map((data, index) => (
                <span key={index}>{data.icon}</span>
              ))}
            </div>
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
          <h2 className="mt-3 main-title">Funcionalidades</h2>
          <ul className="mt-1">
            {functionality.map((data, index) => {
              return (
                <li className="mt-1" key={index}>
                  {data}
                </li>
              );
            })}
          </ul>
        </article>
      </section>
      <div className="footer">
        &copy; Gabriel Vieira - Todos os direitos reservados
      </div>
    </main>
  );
};

export default ProjectDetails;
