import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby'
import PostPreview from "../components/post-preview"



export default ({ data }) => {
	return (
		<Layout>
			{data.allMarkdownRemark.edges.map(({ node }, i) => {
				if (node.frontmatter && node.frontmatter.hidden != true) {
					if (node.fields.slug != "/about-content/") {
						return (
							< PostPreview key={i}
								title={node.frontmatter.title}
								link={node.fields.slug}
								excerpt={node.excerpt}
								date={node.frontmatter.date}
								readTime={node.timeToRead}
							/>
						)
					}
				}
			})}
		</Layout>
	)
}


export const query = graphql`
  query {
	allMarkdownRemark(
		sort: { fields: [frontmatter___date], order: DESC }
		limit: 1000
	) {
	  totalCount
	  edges {
		node {
		  id
		  fields {
			  slug
		  }
		  frontmatter {
			title
			date(formatString: "DD MMMM, YYYY")
			hidden
		  }
		  excerpt(pruneLength: 300)
		  timeToRead
		}
	  }
	}
  }
`

/*
query MyQuery {
  allDirectory(filter: {relativeDirectory: {eq: "posts"}}) {
	edges {
	  node {
		base
		relativeDirectory

	  }
	}
  }
}
*/