import { FaFileDownload } from "react-icons/fa";

import React, { useContext } from "react";
import { MyContext } from "../Context";

import styles from "./History.module.css";

function Paragraph() {
  const { language, setLanguage } = useContext(MyContext);

  if (language == "brazil") {
    return (
      <>
        <div className={styles.paragraph}>
          <h1 className={styles.title}>Sobre mim:</h1>
          <p>
            Olá! Meu nome é Gabriel Paiva de Medeiros, tenho 17 anos e sou um
            entusiasta da programação, focando especialmente no desenvolvimento
            fullstack. Atualmente, estou em busca da minha primeira oportunidade
            de emprego para colocar em prática os conhecimentos que adquiri ao
            longo dos últimos dois anos de estudo intensivo em programação.
            Desde que comecei a explorar o vasto mundo da tecnologia, descobri
            minha paixão por criar soluções inovadoras e eficientes. Ao longo
            desse período, aprofundei-me em diversas linguagens de programação,
            frameworks e ferramentas, adquirindo uma visão abrangente do
            desenvolvimento de software. Minha jornada como desenvolvedor
            fullstack envolve a compreensão tanto do lado do servidor quanto do
            cliente, permitindo-me criar aplicações robustas e versáteis. Além
            disso, estou sempre aberto a aprender novas tecnologias e aprimorar
            minhas habilidades para me manter atualizado no dinâmico cenário
            tecnológico. A busca por desafios e a resolução criativa de
            problemas são características que impulsionam meu desejo de evoluir
            como profissional de desenvolvimento. Sou dedicado, curioso e
            motivado a contribuir para projetos inovadores e colaborar em
            equipes que valorizem a excelência técnica. Estou ansioso para
            integrar-me ao mercado de trabalho, aplicando minha paixão pela
            programação em projetos desafiadores e, assim, crescer
            profissionalmente. Estou certo de que, com minha dedicação e
            habilidades, posso agregar valor a qualquer equipe de
            desenvolvimento. Agradeço a oportunidade de me apresentar e estou à
            disposição para discutir como minhas habilidades e entusiasmo podem
            contribuir para o sucesso de sua equipe.
          </p>
        </div>

        <h1>Tecnologias:</h1>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.paragraph}>
          <h1 className={styles.title}>About me:</h1>
          <p>
            Hello! My name is Gabriel Paiva de Medeiros, I am 17 years old, and
            I am passionate about programming, with a focus on full-stack
            development. Currently, I am seeking my first job opportunity to
            apply the knowledge I have gained over the last two years of
            intensive programming studies. Since I started exploring the vast
            world of technology, I discovered my passion for creating innovative
            and efficient solutions. During this period, I delved into various
            programming languages, frameworks, and tools, gaining a
            comprehensive understanding of software development. My journey as a
            full-stack developer involves understanding both the server and
            client sides, allowing me to create robust and versatile
            applications. Additionally, I am always open to learning new
            technologies and enhancing my skills to stay updated in the dynamic
            technological landscape. The pursuit of challenges and the creative
            resolution of problems are characteristics that drive my desire to
            evolve as a development professional. I am dedicated, curious, and
            motivated to contribute to innovative projects and collaborate in
            teams that value technical excellence. I am eager to integrate into
            the workforce, applying my passion for programming to challenging
            projects and, in turn, growing professionally. I am confident that
            with my dedication and skills, I can add value to any development
            team. I appreciate the opportunity to introduce myself and am
            available to discuss how my skills and enthusiasm can contribute to
            the success of your team.
          </p>
        </div>

        <h1>Technologies:</h1>
      </>
    );
  }
}

export default Paragraph;
