import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "twin.macro"
import "../styles/ErrorPage.css"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const NotFoundPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <Seo title="Not Found" />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <a tw="cursor-pointer" href="/">
            Homepage
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
