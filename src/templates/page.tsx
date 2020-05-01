

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ children }) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}
