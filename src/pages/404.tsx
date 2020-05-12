import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby'
import PostPreview from "../components/post-preview"



export default ({ data }) => {
    console.log("404", data)
    return (
        <Layout>
            <h1>There's nothing here.</h1>
        </Layout>
    )
}


