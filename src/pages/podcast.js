import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import {  GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import Layout from "../components/layout"
import Seo from "../components/seo";
import moment from 'moment';

const PodcastPage = () => {

  const data = useStaticQuery(query);

  const podcast = data.strapiPodcast.data.attributes;
  console.log(podcast);
  return <Layout>
    <Seo title="Home" />
    <div className="container mx-auto grid md:grid-cols-3 py-20 gap-5 md:px-0 px-5">
      <div className="col-span-3 md:col-span-1">
          <GatsbyImage image={podcast.CoverArt.data.attributes.localFile.childImageSharp.gatsbyImageData} className="w-full"/>

      </div>
      <div className="col-span-3 md:col-span-2">
        <h1 className="text-white mb-5">{podcast.Title}</h1>
        <ReactMarkdown className="text-gray-200 font-thin mb-10">
          {podcast.Description}
        </ReactMarkdown>
        <a href={podcast.Link} className="py-5 px-10 bg-yellow-500 text-center block md:inline">Listen</a>
      </div>

     </div>
  </Layout>
};
const query = graphql`
query podcastQuery {
  strapiPodcast {
    data {
      attributes {
        Title
        Description
        Link
        CoverArt {
          data {
            attributes {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 95, width: 1000, height: 1000)
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

export default PodcastPage
