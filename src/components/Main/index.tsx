import React from "react";
import { Apresentation } from "./Apresentation";
import { Lotties } from "./Lotties";
import { Network } from "./NetworkComponent";
import styles from "./styles.module.scss"

const Main = () => {

    return (
        <main className={styles["container"]}>
            <section className={styles["container__wrapper-apresentation"]}>
                <div>
                    <Apresentation greet="Olá, meu nome é" name="Thiago Bronisio" work="Desenvolvedor Web" />
                    <Network />
                </div>
                <Lotties />
            </section>
        </main>
    )
}

export { Main }