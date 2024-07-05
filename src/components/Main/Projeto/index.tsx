import React from "react";
import styles from "./styles.module.scss"
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import { SkilFlag } from "../SkilFlag";

interface InfoProject {
    titleProject: string,
    image: string,
    textAlternative: string,
    description: string,
    textLinkFront?: string,
    textLinkBack?: string,
    urlLinkFront?: string,
    urlLinkBack?: string,
    skills: string[]
}

const Projeto = (props: InfoProject) => {

    const [loadedImage, setLoadedImage] = useState<string>(props.image);

    return (
        <div className={styles["container-project"]}>
            <div className={styles["container-project__wrapper-project"]}>
                <div className={styles["container-project__wrapper-project__content-img"]}>
                    <img src={loadedImage} alt={props.textAlternative} />
                </div>

                <div className={styles["container-project__wrapper-project__content-infoProject"]}>
                    <h3>{props.titleProject}</h3>
                    <p>{props.description}</p>
                    {props.skills.map((skill, index) => (
                        <SkilFlag key={index} skill={skill} />
                    ))}
                    <div className={styles["container-project__wrapper-project__content-infoProject__links"]}>
                        <a href={props.urlLinkFront} type="button" >{props.textLinkFront}
                            <FaLongArrowAltRight />
                        </a>
                        <a href={props.urlLinkBack} type="button" >{props.textLinkBack}
                            <FaLongArrowAltRight />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export { Projeto }