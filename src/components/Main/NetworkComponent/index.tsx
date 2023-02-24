import React from "react";
import styles from "./styles.module.scss"
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si"
import { MdOutlineMail } from "react-icons/md"

const Network = () => {
    return (
        <ul className={styles["wrapper-list"]}>
            <li>
                <a href="https://www.linkedin.com/in/thiago-bronisio-87b51a21b/" target="_blank" rel="noreferrer">
                    <SiLinkedin />
                </a>
            </li>

            <li>
                <a href="https://contate.me/thiago.bronisio" target="_blank" rel="noreferrer">
                    <SiWhatsapp />
                </a>
            </li>

            <li>
                <a href="https://github.com/ThiagoBronisio" target="_blank" rel="noreferrer">
                    <SiGithub />
                </a>
            </li>

            <li>
                <a href="mailto:thiagobronisioo@gmail.com" target="_blank" rel="noreferrer">
                    <MdOutlineMail />
                </a>
            </li>
        </ul>
    )
}

export { Network };