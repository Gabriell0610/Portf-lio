/* eslint-disable no-unused-vars */
import React from "react";
import MenuComponent from "../../components/MenuComponent";
import ProjectDetails from "../../components/ProjectDetails";
import image from "../../assets/img/react.png";

const Projeto2 = () => {
  const detailsProject = {
    title: "Portfólio",
    description:
      "Este portfólio foi criado com o objetivo de apresentar meus projetos e compartilhar um pouco sobre mim. Durante o desenvolvimento, pude aprimorar meus conhecimentos em React e Front-End, além de expandir minhas habilidades com Node e MongoDB na criação de artigos.",
    solution:
      "Eu precisava de um espaço para exibir meus projetos e permitir que as pessoas conhecessem um pouco mais sobre mim. Por isso, desenvolvi este portfólio.",
    image: image,
    functionality: ["Navegar entre os menus ✅", "Avaliar meus artigos ⌛"],
    linkRepository: "https://github.com/Gabriell0610/Portfolio",
    linkProject: "",
    tecnologies: [
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
      "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
      "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=black",
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

export default Projeto2;
