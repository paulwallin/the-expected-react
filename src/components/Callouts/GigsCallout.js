import React from "react";
import Header from "./Header"
import Paragraf from "./Paragraf"
import Link from "./Link"


const GigsCallout = () => (
    <article className="callout" id="gigs">
        <Header text="Next gig" />
        <Paragraf text="No gigs at the moment" />
        <Link link="gigs/" text="All gigs" />
    </article>
)

export default GigsCallout 