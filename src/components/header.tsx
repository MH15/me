/**
 * Title, main links, dark mode toggle
 */

import React from "react"
import headerStyles from "./layout.module.scss"
import { useStaticQuery, Link, graphql } from 'gatsby';

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )
    return (
        <div className={headerStyles.header}>
            <Link to="/" className={headerStyles.title}>
                <h1>matt</h1>
                <h1>hall</h1>
            </Link>
            <Link to="/about" className={headerStyles.pageLink}><h3>about</h3></Link>
            <Link to="/photos" className={headerStyles.pageLink}><h3>photos</h3></Link>
            <Link to="/work" className={headerStyles.pageLink}><h3>work</h3></Link>
        </div>)
}


