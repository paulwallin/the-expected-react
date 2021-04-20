import React from "react"
import Callout from './components/Callouts/Callout'

const SubPage = props => {
    return (
        <>
        <section className="subpage">
            <header className="subpage__header">
                <h1 className="subpage__header-h1">Subpage</h1>
            </header>
            <main className="subpage__content">
                {props.children}
            </main>
            <aside className="subpage__aside">
                <Callout calloutSlug="the-expected-is"/>
            </aside>
            <footer className="subpage__footer">
            </footer>
        </section>
        </>
    )
}

export default SubPage