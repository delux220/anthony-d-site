import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import Layout from "../components/layout"
import Seo from "../components/seo";
import moment from 'moment';

const AboutPage = () => {

  const data = useStaticQuery(query);

  const page = data.strapiAboutPage.data.attributes;

  const social = data.strapiSocialMedia.data.attributes;

  return <Layout>
    <Seo title="Home" />
    <div className="container mx-auto grid md:grid-cols-3 py-20 gap-5 md:px-0 px-5 min-h-screen">
      <div className="col-span-3 md:col-span-1">
          <GatsbyImage image={page.Photo.data.attributes.localFile.childImageSharp.gatsbyImageData} className="w-full"/>

      </div>
      <div className="col-span-3 md:col-span-2">
        <h1 className="text-white mb-5">{page.Title}</h1>
        <div className="text-gray-200 font-thin mb-10">
          {page.Description}
        </div>
        <div className="flex justify-start">
          <a href={social.Facebook} target="_blank">
            <img src="/fb.svg" className="w-5 h-5 mr-3"/>
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
      </div>

     </div>
  </Layout>
};
const query = graphql`
query AboutPage {
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
  strapiAboutPage {
    data {
      attributes {
        Title
        Description
        Photo {
          data {
            attributes {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 95, width: 1000, height:1000)
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export default AboutPage
