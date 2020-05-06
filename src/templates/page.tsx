

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default (props) => {
    return (
        <Layout title={props.title}>
            {props.children}
        </Layout>
    )
}
