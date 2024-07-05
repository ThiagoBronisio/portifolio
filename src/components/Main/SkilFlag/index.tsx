import styles from "./styles.module.scss"

const SkilFlag = (props: { skill: string }) => {
    return <span className={styles["flag"]}>{props.skill}</span>
}

export { SkilFlag }