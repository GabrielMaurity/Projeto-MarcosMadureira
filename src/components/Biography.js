import React from "react";
import styles from "./Biography.module.css";
import image from "../assets/marcosmadureira1.png";

const Biography = () => {
  return (
    <section id="biography" className={styles.biography}>
      <img src={image} alt="Marco Madureira" />
      <div>
        <h2>Biografia</h2>
        <p>
          Marco Madureira é um líder de 78 anos de experiência no setor público,
          sempre focado em transformar o Rio de Janeiro em uma cidade mais justa
          e acessível para todos. Sua trajetória inclui projetos nas áreas de
          educação, segurança e infraestrutura, sempre com a comunidade no
          centro de suas decisões.
        </p>
      </div>
    </section>
  );
};

export default Biography;
