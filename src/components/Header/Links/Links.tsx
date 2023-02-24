import React from "react";

interface LinksProps {
    className: string,
    href: string,
    text: string
}

const Links = (props: LinksProps) => {

    const { href, text } = props;

    return (
        <li>
            <a href={href}>{text}</a>
        </li>
    )
}

export { Links }