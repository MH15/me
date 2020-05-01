import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'

type PostPreviewProps = {
    title: string,
    link: string,
    excerpt: string,
    date: string,
    readTime: string

}

export default (props: PostPreviewProps) => {
    console.log(props.readTime)
    return (
        <div>
            <Link to={props.link}><h1>{props.title}</h1></Link>
            <p>{props.excerpt}</p>
            <p>{props.date} • {props.readTime} minute read</p>
        </div>
    )
}

