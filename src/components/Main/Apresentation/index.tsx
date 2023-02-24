import React from "react"

interface ApresentationProps {
    classname: string,
    greet: string,
    name: string,
    work: string

}

const Apresentation = (props: ApresentationProps) => {

    const { classname, greet, name, work } = props;

    return (
        <section className={classname}>
            <h2>{greet}</h2>
            <h1>{name}</h1>
            <h2>{work}</h2>
        </section>
    )
}

export { Apresentation }