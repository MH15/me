/**
 * Master layout
 */


import React from "react"

import Header from "./header";
import Footer from "./footer";
import layoutWide from "./layout-wide.module.scss"

export default ({ children }) => (
    <div className={layoutWide.pageContainer}>
        <div className={layoutWide.contentWrap}>
            <div className={layoutWide.header}>
                <Header />
            </div>

            <div className={layoutWide.content}>
                {children}

            </div>
        </div>

        <div className={layoutWide.footerWide}>
            <Footer />
        </div>
    </div>
)