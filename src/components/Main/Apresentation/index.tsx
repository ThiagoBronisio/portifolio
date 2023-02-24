import React from "react"

interface ApresentationProps {
    greet: string,
    name: string,
    work: string

}

const Apresentation = (props: ApresentationProps) => {

    const { greet, name, work } = props;

    return (
        <>
            <h2>{greet}</h2>
            <h1>{name}</h1>
            <h2>{work}</h2>
        </>
    )
}

export { Apresentation }