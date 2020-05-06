
import React from "react"
import Page from "../templates/page"
import Stats from "../components/stats"
import Header from "../components/header"
import styles from "./about.module.scss"
import LayoutWide from "../components/layout-wide"
import Layout from "../components/layout"

import { graphql } from "gatsby"

export default ({ data }: any) => {
  return (
    <Layout title="About">
      <div className={styles.main}>

        <div className={styles.article} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />


        {/* <div className={styles.sidebar}>
                    <Stats />
                </div> */}


      </div>
    </Layout>
  )
}


export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/about-content/" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`