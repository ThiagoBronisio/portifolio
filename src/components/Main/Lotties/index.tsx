import React from "react"
import Lottie from "lottie-react";
import animation from "./animation.json"
import styles from "./styles.module.scss"

const Lotties = () => {
    return (
        <div className={styles["container-lottie"]}>
            <Lottie
                animationData={animation}
                loop={true} />
        </div>
    )
}

export { Lotties }