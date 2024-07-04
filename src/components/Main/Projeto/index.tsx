import React from "react";
import styles from "./styles.module.scss"
import { useState } from "react";

interface InfoProject {
    titleProject: string,
    image: string,
    textAlternative: string,
    description: string,
    textLinkFront?: string,
    textLinkBack?: string,
    urlLinkFront?: string,
    urlLinkBack?: string
}

const Projeto = (props: InfoProject) => {

    const [loadedImage, setLoadedImage] = useState<string>(props.image);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setLoadedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles["container-project"]}>
            <div className={styles["container-project__wrapper-project"]}>
                <h3>{props.titleProject}</h3>
                <img src={loadedImage} alt={props.textAlternative} />
                <p>{props.description}</p>

                <div className={styles["container-project__wrapper-project__links"]}>
                    <a href={props.urlLinkFront} type="button" >{props.textLinkFront}</a>
                    <a href={props.urlLinkBack} type="button" >{props.textLinkBack}</a>
                </div>
            </div>
        </div>
    )
}

export { Projeto }