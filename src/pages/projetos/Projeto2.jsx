/* eslint-disable no-unused-vars */
import React from "react";
import MenuComponent from "../../components/MenuComponent";
import ProjectDetails from "../../components/ProjectDetails";
import image from "../../assets/img/react.png";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Projeto2 = () => {
  const detailsProject = {
    title: "Portfólio",
    description:
      "Esse Portfólio foi feito com o intuito de mostrar todos os meu projetos e um pouco sobre mim. Com esse projeto pude aprimorar meus conhecimentos em React e FrontEnd e também pude aprimorar meus conhecimentos com Node e MongoDb na parte de criação de artigos",
    image: image,
    functionality: ["Navegar entre os menus ✅", "Avaliar meus artigos ⌛"],
    linkRepository: "",
    tecnologies: [
      { icon: <FaReact title="React" /> },
      { icon: <FaHtml5 title="HTML" /> },
      { icon: <FaCss3Alt title="CSS" /> },
      { icon: <FaSass title="SASS" /> },
      { icon: <FaNodeJs title="NodeJs" /> },
      { icon: <SiMongodb title="MongoDb" /> },
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

export default Projeto2;
