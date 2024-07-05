import React from "react";
import { Apresentation } from "./Apresentation";
import { Lotties } from "./Lotties";
import { Network } from "./NetworkComponent";
import styles from "./styles.module.scss"
import { Projeto } from "./Projeto";
import { Topicos } from "./Topicos";
import { Separator } from "./Separator";
import { Experiencia } from "./Experiencia";

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

            <section className={styles["container__wrapper-experiencia"]}>
                <Topicos text="../expêriencia" />
                <Experiencia
                    title="Experiência profissional" 
                    descricaoTitle="Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos para criar soluções incríveis para sua empresa"
                    empresa="@ Jaé"
                    cargo="Desenvolvedor Fullstack"
                    tempo="Jun 2024 - Atual"
                    descricao="Designado para colaborar com o time na refatoração completa do modelo digital da empresa. Toda a estrutura está sendo redesenhada do zero, promovendo assim a transformação digital da organização."
                    skills={[".NET Core 8", "Vue", "EF CORE", "Microsserviço", "Postgres", "MongoDB", "Docker", "Linux", "Git", "Utilização de Metodologia Ágil Scrum - Jira"]}
                    />
            </section>
        </main>
    )
}

export { Main }