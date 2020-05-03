/**
 * Title, main links, dark mode toggle
 */

import React from "react"
import bioStyles from "./layout.module.scss"
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
        <div>
            <p>{data.site.siteMetadata.bio}</p>
        </div>
    )
}


