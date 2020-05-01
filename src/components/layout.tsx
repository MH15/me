/**
 * Master layout
 */


import React from "react"

import Header from "./header";
import Footer from "./footer";
import layoutStyles from "./layout.module.scss"

export default ({ children }) => (
    <div className={layoutStyles.pageContainer}>
        <div className={layoutStyles.contentWrap}>
            <Header />

            {children}
        </div>

        <Footer />
    </div>
)