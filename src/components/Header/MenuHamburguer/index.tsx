import React, { useState } from "react"
import styles from "./styles.module.scss"
import Modal from "react-modal"
import { ReactComponent as Hamburguer } from "../../../assets/hamburguer.svg"
import { ReactComponent as Close } from "../../../assets/close.svg"
import { Links } from "../Links/Links"

const MenuHamburguer = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <div className={styles["container_wrapper"]}>
                <button onClick={openModal} className={styles["button-hamburguer"]}>
                    <Hamburguer title="Menu" />
                </button>
            </div>

            {
                modalIsOpen &&
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    className={styles["container-modal"]}
                >
                    <div className={styles["container-modal__close"]}>
                        <Close onClick={closeModal} title="Fechar menu" />
                    </div>

                    <div className={styles["container-modal__wrapper-list"]}>
                        <ul className={styles["container-modal__wrapper-list__list"]}>
                            <Links className={styles["container__links"]} href="/" text="Sobre mim" />
                            <Links className={styles["container__links"]} href="/" text="Projetos" />
                            <Links className={styles["container__links"]} href="/" text="Skills" />
                            <Links className={styles["container__links"]} href="/" text="Contatos" />
                        </ul>
                    </div>

                </Modal>
            }
        </>
    )
}

export { MenuHamburguer };