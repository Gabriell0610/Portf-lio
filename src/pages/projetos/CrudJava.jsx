/* eslint-disable no-unused-vars */
import React from "react";
import MenuComponent from "../../components/MenuComponent";
import ProjectDetails from "../../components/ProjectDetails";
import image from "../../assets/img/Java-logo-008.avif";
// import { FaJava } from "react-icons/fa";
// import { SiJunit5 } from "react-icons/si";
// import { SiSpring } from "react-icons/si";
// import { SiHibernate } from "react-icons/si";
// import { BiLogoPostgresql } from "react-icons/bi";

const CrudJava = () => {
  const detailsProject = {
    title: "Crud Java",
    description:
      "Desenvolvi um CRUD de usuários onde pude aprimorar meus conhecimentos em desenvolvimento de APIs REST, integração com bancos de dados relacionais, arquitetura MVC e boas práticas de testes unitários e de integração.O sistema pode ser operado via terminal, mas também oferece suporte para operações via Insomnia ou outro cliente de API.",
    solution: "Esse projeto foi criado apenas para estudo!",
    image: image,
    functionality: [
      "Cadastrar Usuário ✅",
      "Listar Todos os Usuários ✅",
      "Atualizar Dados do Usuário ⌛",
      "Excluir Usuário ✅",
      "Buscar Usuário pelo Nome, Email ou Idade ✅",
    ],
    linkRepository: "https://github.com/Gabriell0610/Desafio-Final-devMagro",
    linkProject: "",
    tecnologies: [
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",
      "https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white",
      "https://img.shields.io/badge/JPA-007396?style=for-the-badge&logo=java&logoColor=white",
      "https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white",
      "https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit5&logoColor=white",
      "https://img.shields.io/badge/Mockito-25A162?style=for-the-badge&logo=mockito&logoColor=white",
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
          linkProject={detailsProject.linkProject}
          tecnologies={detailsProject.tecnologies}
          solution={detailsProject.solution}
        />
      </main>
    </>
  );
};

export default CrudJava;
