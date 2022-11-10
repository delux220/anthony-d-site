/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const site  = useStaticQuery(
    graphql`
      query seoQuery {
        strapiSeo {
          data {
            attributes {
              SiteName
              Description
              Image {
                data {
                  attributes {
                    localFile {
                      publicURL
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.strapiSeo.data.attributes.Description
  const defaultTitle = site.strapiSeo.data.attributes.SiteName;

  const imageUrl = site.strapiSeo.data.attributes.Image?site.strapiSeo.data.attributes.Image.data.attributes.localFile.publicURL:'';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} | ${defaultTitle}`}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: 'og:image',
          content: imageUrl
        },
        { 
          name: 'twitter:image',
          content: imageUrl
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: site.strapiSeo.data.attributes.SiteName,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: site.strapiSeo.data.attributes.SiteName,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
