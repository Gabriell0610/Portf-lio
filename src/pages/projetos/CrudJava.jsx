/* eslint-disable no-unused-vars */
import React from "react";
import MenuComponent from "../../components/MenuComponent";
import ProjectDetails from "../../components/ProjectDetails";
import image from "../../assets/img/image-project-1.avif";

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
        />
      </main>
    </>
  );
};

export default CrudJava;
