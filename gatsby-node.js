const path = require("path")

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({
			node,
			getNode
		})
		// let fixedSlug = slug.split(path.sep)
		let parent = getNode(node.parent)
		console.log(parent)
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}

exports.createPages = async ({ graphql, actions }) => {

	const { createPage } = actions
	const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
						}	
						frontmatter {
							title
						}
						id
          }
        }
      }
    }
	`)
	// Create blog posts pages.
	const posts = result.data.allMarkdownRemark.edges

	posts.forEach((post, index) => {
		const previous = index === posts.length - 1 ? null : posts[index + 1].node
		const next = index === 0 ? null : posts[index - 1].node
		if (post.node.fields.slug != "/about-content/") {
			createPage({
				path: post.node.fields.slug,
				component: path.resolve(`./src/templates/blog-post.tsx`),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: post.node.fields.slug,
					previous,
					next,
				},
			})
		}

	})
}