import styles from "./styles.module.scss"

interface TopicoProps {
    text: string
}

const Topicos = (props: TopicoProps) => {

    const { text } = props;

    return (
        <>
            <span className={styles["text-topicos"]}>{text}</span>
        </>
    )
}

export { Topicos }