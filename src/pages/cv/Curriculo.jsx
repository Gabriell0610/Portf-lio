/* eslint-disable no-unused-vars */
import React from "react";
import MenuComponent from "../../components/MenuComponent";
import "../../styles/components/curriculo.scss";

const Curriculo = () => {
  const experiencias = [
    {
      titulo: "Técnico de Ti - Universidade De Vassouras",
      periodo: "Abril 2024 - Set 2024",
    },
  ];
  return (
    <>
      <MenuComponent />
      <main className="content-main">
        <h1 className="title">Experiências</h1>
        <div className="timeline mt-3">
          {experiencias.map((exp, index) => (
            <div className="experience" key={index}>
              <div className="circle" />
              <div className="details">
                <h2>{exp.titulo}</h2>
                <p className="mt-1">{exp.periodo}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="footer">
          &copy; Gabriel Vieira - Todos os direitos reservados
        </div>
      </main>
    </>
  );
};

export default Curriculo;
