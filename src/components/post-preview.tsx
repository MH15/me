import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'

import styles from "./post-preview.module.scss"

type PostPreviewProps = {
    title: string,
    link: string,
    excerpt: string,
    date: string,
    readTime: string

}

export default (props: PostPreviewProps) => {
    return (
        <div className={styles.preview}>
            <div className={styles.content}>
                <Link to={props.link}><h1>{props.title}</h1></Link>
                <p>{props.excerpt}</p>
                <p>{props.date} • {props.readTime} minute read</p>
            </div>
            {/* <div className={styles.imgPreview}>a</div> */}
        </div>
    )
}

