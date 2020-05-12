/**
 * Title, main links, dark mode toggle
 */

import React from "react"
import headerStyles from "./layout.module.scss"
import { useStaticQuery, Link, graphql } from 'gatsby';

export default ({ children, ...props }: any) => {
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
            <FancyLink to="/about" className={headerStyles.pageLink}><h3>about</h3></FancyLink>
            {/* <FancyLink to="/photos" className={headerStyles.pageLink}><h3>photos</h3></FancyLink> */}
            <FancyLink to="/work" className={headerStyles.pageLink}><h3>work</h3></FancyLink>
        </div>
    )
}


const invalidPaths = ['/favorites/', '/about/', '/contact/']

const isActive = (className: string, to2: string) => ({ isCurrent, isPartiallyCurrent, location }: any) => {
    const activeClassName = { className: `${className} active` }

    if (isPartiallyCurrent || location.pathname === to2) {
        return activeClassName
    } else {
        return { className }
    }
}


const FancyLink = ({ className, to, children, ...props }: any) => {
    return (
        < Link to={to} getProps={isActive(className, to)} {...props}>
            {children}
        </Link >
    )
}
