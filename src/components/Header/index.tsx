import React from "react";
import styles from "./styles.module.scss"
import { Links } from "./Links/Links";
import { Logo } from "./Logo/Logo";
import { MenuHamburguer } from "./MenuHamburguer";

const Header = () => {
    return (
        <header className={styles["container"]}>
            <MenuHamburguer />
            <Logo className={styles["container__logo"]} before="<" middle="Thiago Bronisio" after="/>" />
            <Logo className={styles["container__logo-mobile"]} before="<" middle="TB" after="/>" />
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