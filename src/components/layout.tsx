/**
 * Master layout
 */


import React from "react"

import Header from "./header";
import Footer from "./footer";
import SEO from "./SEO";
import layoutStyles from "./layout.module.scss"

export default (props) => {

    return (
        <div>
            <SEO title={props.title} />
            <div className={layoutStyles.pageContainer}>
                <div className={layoutStyles.contentWrap}>
                    <Header />

                    {props.children}
                </div>

                <Footer />
            </div>
        </div>

    )
}