import React from "react";
import styles from "./styles.module.scss"
import { Links } from "./Links/Links";
import { Logo } from "./Logo/Logo";

const Header = () => {
    return (
        <header className={styles["container"]}>
            <Logo className={styles["container__logo"]} before="<" middle="Thiago Bronisio" after="/>" />
            <div className={styles["container__links"]}>
                <ul>
                    <Links className={styles["container__links"]} href="/" text="Sobre mim" />
                    <Links className={styles["container__links"]} href="/" text="Projetos" />
                    <Links className={styles["container__links"]} href="/" text="Skills" />
                    <Links className={styles["container__links"]} href="/" text="Contatos" />
                </ul>
            </div>
        </header>
    )
}

export { Header }