import React from "react"

const Link = (props) => {
    return (
        <>
            <a href="{props.url}" className="button small radius info">
                {props.text}
            </a>
        </>
    )
}
export default Link