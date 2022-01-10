import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo";
import moment from 'moment';

const IndexPage = () => {

  const data = useStaticQuery(query);

  const social = data.strapiSocialMedia.data.attributes;

  return <Layout>
    <Seo title="Home" />
    <div className="bg-gradient-to-r from-gray-900 to-black">
      <div className="bg-contain lg:bg-fixed container mx-auto h-[80vh] md:max-h-screen md:h-screen bg-bottom bg-no-repeat" style={{backgroundImage: "url('https://res.cloudinary.com/meshed-nyc/e_grayscale,q_auto,w_1200,c_fill/brushed.png')"}}>
        <div className="relative flex items-start justify-center md:items-center h-full">
          <div className=" md:text-center mx-auto px-5 py-10 relative h-full md:h-auto">
          <h1 className="text-white font-sans text-5xl mb-5 font-bold hidden md:block">Anthony DiDomenico</h1>
          <h3 className="text-white font-sans block mt-3 md:mt-0">Stand up Comedian &amp; Host of <span className="italic text-yellow-500">Keep Moving Forward</span></h3>
          <div className="mt-5 md:pt-5 flex absolute md:relative justify-between md:justify-center w-full px-10" style={{bottom:'25px', left:0}}>
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

          </div>
        </div>
      </div>
      <div className=" mx-auto bg-gray-900 p-10">
        <div className="container mx-auto">
        <div>
          <h3 className="text-white mx-auto md:w-1/2 w-full mb-3 text-center">Join my mailing list</h3>
          <p className="text-center font-thin font-sans text-gray-100 mb-5 text-sm">Get updates about Keep Moving Forward, upcoming shows, and other projects.</p>
        </div>
        <form>
          <div className="flex mx-auto md:w-1/2 w-full">
            <input type="email" name="" placeholder="Email Address" className="px-5 py-3 bg-white border-b font-sans w-2/3"/>
            <button className="px-5 py-3 bg-yellow-500 text-black font-bebas md:font-sans w-1/3">SUBSCRIBE</button>
          </div>
        </form>
      </div>
      </div>
      <div className="container mx-auto p-10 pb-20" id="podcast">
        <div className="text-center py-10">
          <h1 className="text-white mb-5">Listen to the latest episode</h1>
          <h3 className="text-white mb-5">of <span className="text-yellow-500">Keep Moving Forward</span></h3>
        </div>
        <iframe src="https://open.spotify.com/embed/show/4iew4PiRlzdqDmFoDMHxiT?utm_source=generator&theme=0" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <div className="grid grid-cols-3 mt-10">
          
          <div className="col-span-3 md:col-span-2  md:border-r border-white pb-0 md:pr-10">
            <h3 className="text-white mb-5">About Keep Moving Forward</h3>
            <p className="text-gray-300 font-thin mb-8">Anthony DiDomenico and guests talk about over all wellness, weight loss, motivation, mental health, success, and how important it is to always keep moving forward.</p>
            <a href="https://www.patreon.com/kmfpodcast" className="bg-yellow-500 text-black px-5 py-3  block text-center">Support KMF on Patreon</a>
          </div>
          <div class="col-span-3 md:col-span-1 md:pl-10 pt-5 md:pt-3">
            <a href="https://open.spotify.com/show/4iew4PiRlzdqDmFoDMHxiT" className="text-yellow-300 block mb-3">Spotify</a>
            <a href="https://www.iheart.com/podcast/256-the-ww-bro-podcast-w-antho-31073123/" className="text-yellow-300 block mb-3">iHeartRadio</a>
            <a href="https://www.stitcher.com/show/keep-moving-forward-w-anthony-didomenico" className="text-yellow-300 block mb-3">Stitcher</a>
            <a href="https://podcasts.apple.com/zw/podcast/keep-moving-forward-w-anthony-didomenico/id1342021363" className="text-yellow-300 block mb-3">iTunes</a>
          </div>
        </div>
      </div>
     
    </div>
  </Layout>
};
const query = graphql`
query MyQuery {
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
`;

export default IndexPage
