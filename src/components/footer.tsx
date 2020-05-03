/**
 * Title, main links, dark mode toggle
 */

import React from "react"
import footerStyles from "./layout.module.scss"
import { useStaticQuery, Link, graphql } from 'gatsby';

export default () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        socials {
                            name
                            url
                        }
                    }
                }
            }
            `
    )
    let socials = data.site.siteMetadata.socials
    let i = 0;
    let items = []
    socials.map((social: any, i: number) => {
        i++
        if (i < socials.length) {
            items.push(
                <div key={i}>
                    <a key={i} href={social.url}>{social.name}</a>&nbsp;•&nbsp;
                </div>
            )
        } else {
            items.push(
                <div key={i}>
                    <a key={i} href={social.url}>{social.name}</a>
                </div>
            )

        }


    })
    // separate each social link with a dot •
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerInner}>
                {/* <div className={footerStyles.left}> */}
                {items}
                {/* </div> */}
                <div className={footerStyles.right}>
                    <a href="/rss">rss</a>
                </div>
            </div>
        </footer>
    )
}


// •