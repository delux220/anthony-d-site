import * as React from "react"
import {  graphql, useStaticQuery } from "gatsby";
import {  GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from 'react-markdown'
import Layout from "../components/layout"
import Seo from "../components/seo";

const PodcastPage = () => {

  const data = useStaticQuery(query);

  const podcast = data.strapiPodcast.data.attributes;
  return <Layout>
    <Seo title="KMF Podcast" />
    <div className="container mx-auto grid md:grid-cols-3 py-20 gap-5 md:px-0 px-5 min-h-screen">
      <div className="col-span-3 md:col-span-1">
          <GatsbyImage image={podcast.CoverArt.data.attributes.localFile.childImageSharp.gatsbyImageData} className="w-full"/>

      </div>
      <div className="col-span-3 md:col-span-2">
        <h1 className="text-white mb-5">{podcast.Title}</h1>
        <ReactMarkdown className="text-gray-200 font-thin mb-10">
          {podcast.Description}
        </ReactMarkdown>
        <a href={podcast.Link} className="py-5 px-10 bg-yellow-500 text-center block md:inline">Listen</a>
        <a href="https://www.patreon.com/kmfpodcast" className="py-5 px-10 bg-yellow-300 text-center block md:inline">Support KMF on Patreon</a>
        <h3 className="mt-10 text-white">Latest Episode</h3>
        <div className="mt-5">
<iframe src="https://open.spotify.com/embed/show/4iew4PiRlzdqDmFoDMHxiT?utm_source=generator&theme=0" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>      </div>
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
