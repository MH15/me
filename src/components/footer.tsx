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
    socials.map((social: any) => {
        i++
        if (i < socials.length) {
            items.push(
                <div>
                    <a href={social.url}>{social.name}</a>•
                </div>
            )
        } else {
            items.push(
                <div>
                    <a href={social.url}>{social.name}</a>
                </div>
            )

        }


    })
    // separate each social link with a dot •
    return (
        <div className={footerStyles.footer}>
            {items}
            <div className={footerStyles.right}>
                <a href="/rss">rss</a>
            </div>
        </div>
    )
}


// •