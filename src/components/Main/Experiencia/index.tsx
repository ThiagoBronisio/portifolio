import { SkilFlag } from "../SkilFlag";
import styles from "./styles.module.scss"

interface ExperienciaProps {
    title?: string,
    descricaoTitle?: string,
    empresa: string,
    cargo: string,
    tempo: string,
    descricao: string,
    skills: string[]
}

const Experiencia = (props: ExperienciaProps) => {

    const { title, empresa, cargo, tempo, descricao, descricaoTitle } = props;

    return (
        <div className={styles["container"]}>
            <div className={styles["container__intro"]}>
                <h3>{title}</h3>
                <p>{descricaoTitle}</p>
            </div>

            <div className={styles["container__contend-separator"]}>
                    <div className={styles["container__contend-separator__rounded"]}></div>
                    <div className={styles["container__contend-separator__seprator"]}></div>
            </div>

            <div className={styles["container__separatorEinfo"]}>
                <div className={styles["container__separatorEinfo__wrapper-info"]}>
                    <div className={styles["container__separatorEinfo__wrapper-info__content-descricao"]}>
                        <h3 >{empresa}</h3>
                        <p className={styles["container__separatorEinfo__wrapper-info__content-descricao__cargo"]}>{cargo}</p>
                        <p className={styles["container__separatorEinfo__wrapper-info__content-descricao__tempo"]}>{tempo}</p>
                        <p className={styles["container__separatorEinfo__wrapper-info__content-descricao__descricao"]}>{descricao}</p>
                    </div>

                    <div className={styles["container__separatorEinfo__wrapper-info__content-skils"]}>
                        <h3>Tecnologias utilizadas</h3>
                        <div>
                        {props.skills.map((skill, index) => (
                        <SkilFlag key={index} skill={skill} />
                    ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Experiencia }