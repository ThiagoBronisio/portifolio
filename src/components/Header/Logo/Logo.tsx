import React from "react";

interface LogoProps {
    className: string,
    before: string,
    middle: string,
    after: string
}

const Logo = (props: LogoProps) => {

    const { className, before, middle, after } = props;

    return (
        <div className={className}>
            <span>{before}</span>
            <h2>{middle}</h2>
            <span>{after}</span>
        </div>
    )
}

export { Logo }