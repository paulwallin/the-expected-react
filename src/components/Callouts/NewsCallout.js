import React from "react";
import Header from "./Header"
import Paragraf from "./Paragraf"
import Link from "./Link"


const NewsCallout = () => (
    <article className="callout" id="gigs">
        <Header text="Latest News" />
        <Paragraf text="Somethings going on" />
        <Link link="news/" text="News Archive" />
    </article>
)

export default NewsCallout 