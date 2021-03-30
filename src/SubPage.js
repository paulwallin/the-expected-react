import React from "react";

const SubPage = props => {
    return (
        <>
        <section className="subpage">
            <header className="subpage__header">
                <h1 className="subpage__header-h1">Subpage</h1>
            </header>
            <main className="subPage__content">
                {props.children}
            </main>
            <aside className="subpage__aside">

            </aside>
            <footer className="subpage__footer">

            </footer>
        </section>
        </>
    )
}

export default SubPage