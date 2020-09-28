import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Products } from "../components"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripeProduct {
      edges {
        node {
          id
          name
          metadata {
            description
            img
            wear
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/gracias/">Go to Gracias</Link> */}
      <Products products={data.allStripeProduct.edges} />
    </>
  )
}

export default IndexPage
