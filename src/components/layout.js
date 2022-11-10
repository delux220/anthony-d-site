/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      strapiSocialMedia {
        data {
          attributes {
            Facebook
            Instagram
            TikTok
            Twitter
          }
        }
      }
    }
  `);

  const social = data.strapiSocialMedia.data.attributes;

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
       className="bg-gradient-to-r from-gray-900 to-black overflow-x-hidden"
      >
        <main className=" overflow-x-hidden">{children}</main>
        <footer
          className="bg-black"
        >
          <div className="container mx-auto py-10 text-center">
          <div className="flex justify-between  w-full px-10 mx-auto md:w-1/4 mb-5 w-2/3">
            <a href={social.Facebook} target="_blank">
              <img src="/fb.svg" className="w-5 h-5 mx-3"/>
            </a>
            <a href={social.Twitter} target="_blank">
              <img src="/twitter.svg" className="w-5 h-5 mx-3"/>
            </a>
            <a href={social.Instagram} target="_blank">
              <img src="/ig.svg" className="w-5 h-5 mx-3"/>
            </a>
            <a href={social.TikTok} target="_blank">
              <img src="/tiktok.svg" className="w-5 h-5 mx-3"/>
            </a>
          </div>


          <span className="text-gray-500 font-thin">&copy; {new Date().getFullYear()} Anthony DiDomenico</span>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
