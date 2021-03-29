import React from "react";
//import "../styles/styles.scss";
const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}


const Callout = () => (
    <article class="callout" id="gigs">
        <Header name = { Callout.title } />
        <p>No Upcoming Gigs at the moment...</p>
        <a href="gigs-and-info/" class="button small radius info">
            All gigs
        </a>
    </article>
)

export default Callout 