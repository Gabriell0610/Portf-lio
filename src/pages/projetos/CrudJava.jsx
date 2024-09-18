/* eslint-disable no-unused-vars */
import React from "react";
import MenuComponent from "../../components/MenuComponent";
import ProjectDetails from "../../components/ProjectDetails";
import image from "../../assets/img/Java-logo-008.avif";
import { FaJava } from "react-icons/fa";
import { SiJunit5 } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const CrudJava = () => {
  const detailsProject = {
    title: "Crud Java",
    description:
      "Desenvolvi um CRUD de usuários onde pude aprimorar meus conhecimentos em desenvolvimento de APIs REST, integração com bancos de dados relacionais, arquitetura MVC e boas práticas de testes unitários e de integração.O sistema pode ser operado via terminal, mas também oferece suporte para operações via Insomnia ou outro cliente de API",
    image: image,
    functionality: [
      "Cadastrar Usuário ✅",
      "Listar Todos os Usuários ✅",
      "Atualizar Dados do Usuário ⌛",
      "Excluir Usuário ✅",
      "Buscar Usuário pelo Nome, Email ou Idade ✅",
    ],
    linkRepository: "https://github.com/Gabriell0610/Desafio-Final-devMagro",
    tecnologies: [
      { icon: <FaJava title="Java" /> },
      { icon: <SiJunit5 title="Junit 5" /> },
      { icon: <SiSpring title="Spring" /> },
      { icon: <SiHibernate title="Hibernate" /> },
      { icon: <BiLogoPostgresql title="PostgreSQL" /> },
    ],
  };

  return (
    <>
      <MenuComponent />
      <main className="content-main">
        <ProjectDetails
          title={detailsProject.title}
          description={detailsProject.description}
          image={detailsProject.image}
          functionality={detailsProject.functionality}
          linkRepository={detailsProject.linkRepository}
          tecnologies={detailsProject.tecnologies}
        />
      </main>
    </>
  );
};

export default CrudJava;
