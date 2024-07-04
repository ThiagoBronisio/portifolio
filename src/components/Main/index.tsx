import React from "react";
import { Apresentation } from "./Apresentation";
import { Lotties } from "./Lotties";
import { Network } from "./NetworkComponent";
import styles from "./styles.module.scss"
import { Projeto } from "./Projeto";
import { SiGithub } from "react-icons/si"

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
                <div className={styles["container__wrapper-projeto__content"]}>
                    <Projeto
                        titleProject="Gerenciamento de contatos"
                        image={projectData.image} textAlternative="Imagem Projeto"
                        description="Esse projeto foi feito em React e C#"
                        textLinkFront="Repositório Frontend"
                        textLinkBack="Repositório Backend"
                        urlLinkFront="#"
                        urlLinkBack="#"
                    />

                    <Projeto
                        titleProject="Controle de estoque"
                        image={projectData.image} textAlternative="Imagem Projeto"
                        description="Esse projeto foi feito em React e C#"
                        textLinkFront="Repositório Frontend"
                        textLinkBack="Repositório Backend"
                        urlLinkFront="#"
                        urlLinkBack="#"
                    />
                </div>

                <div className={styles["container__wrapper-projeto__content"]}>
                    <Projeto
                        titleProject="Gerenciamento de contatos"
                        image={projectData.image} textAlternative="Imagem Projeto"
                        description="Esse projeto foi feito em React e C#"
                        textLinkFront="Repositório Frontend"
                        textLinkBack="Repositório Backend"
                        urlLinkFront="#"
                        urlLinkBack="#"
                    />

                    <Projeto
                        titleProject="Controle de estoque"
                        image={projectData.image} textAlternative="Imagem Projeto"
                        description="Esse projeto foi feito em React e C#"
                        textLinkFront="Repositório Frontend"
                        textLinkBack="Repositório Backend"
                        urlLinkFront="#"
                        urlLinkBack="#"
                    />
                </div>
            </section>
        </main>
    )
}

export { Main }