import React from "react";

interface NetworkProps {
    href: string;
    className?: string;
    style?: string;

}

const Network = (props: NetworkProps) => {

    const { href, className, style } = props;

    return (
        <li className={className} id={style}>
            <a href={href}>

            </a>
        </li>
    )
}

export { Network };