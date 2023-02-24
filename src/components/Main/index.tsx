import React from "react";
import { Apresentation } from "./Apresentation";
import styles from "./styles.module.scss"

const Main = () => {
    return (
        <main className={styles["container"]}>
            <Apresentation
                classname={styles["container__wrapper-apresentation"]}
                greet="Olá, meu nome é"
                name="Thiago Bronisio"
                work="Desenvolvedor Web" />
        </main>
    )
}

export { Main }