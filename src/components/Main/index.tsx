import React from "react";
import { Apresentation } from "./Apresentation";
import { Lotties } from "./Lotties";
import { Network } from "./NetworkComponent";
import styles from "./styles.module.scss"
import { Projeto } from "./Projeto";
import { Topicos } from "./Topicos";
import { Separator } from "./Separator";

const Main = () => {

    const projectData = {
        image: "https://fia.com.br/wp-content/uploads/2022/06/gestao-de-projetos-o-que-e-guia-qual-importancia-PMI.jpg"
    }

    return (
        <main className={styles["container"]}>
            <section className={styles["container__wrapper-apresentation"]}>
                <div>
                    <Apresentation greet="Olá, meu nome é" name="Thiago Damascena" work="Desenvolvedor Fullstack" />
                    <Network />
                </div>
                <Lotties />
            </section>

            <section className={styles["container__wrapper-projeto"]}>
                <Topicos text="../projetos" />
                <h3 className={styles["container__wrapper-projeto__title-project"]}>Projetos em destaque</h3>
                <Separator />
                <Projeto
                    titleProject="Gerenciamento de contatos"
                    image={projectData.image} textAlternative="Imagem Projeto"
                    description="Esse projeto foi feito afim de aprimorar minhas habilidades nas skills abaixo"
                    textLinkFront="Repositório Frontend"
                    textLinkBack="Repositório Backend"
                    skills={["HTML", "SASS", "REACT", "C#", "EF CORE"]}
                    urlLinkFront="#"
                    urlLinkBack="#"
                />
                <Separator />
                <Projeto
                    titleProject="Controle de tarefas"
                    image={projectData.image} textAlternative="Imagem Projeto"
                    description="Esse projeto foi feito afim de aprimorar minhas habilidades nas skills abaixo"
                    textLinkFront="Repositório Frontend"
                    textLinkBack="Repositório Backend"
                    skills={["HTML", "SASS", "REACT", "C#", "EF CORE"]}
                    urlLinkFront="#"
                    urlLinkBack="#"
                />
            </section>

            <section className={styles["container__wrapper-skills"]}>
                <Topicos text="../skills" />
                <h3 className={styles["container__wrapper-skills__title-skill"]}>Conhecimentos</h3>
            </section>
        </main>
    )
}

export { Main }