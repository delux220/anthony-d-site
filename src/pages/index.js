import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo";
import moment from 'moment';

const IndexPage = () => {

  const data = useStaticQuery(query);

  const social = data.strapiSocialMedia.data.attributes;

  const [noEvents, setNoEvents] = React.useState(false);

  React.useEffect(() => {

    var found = false;

    if (data.allStrapiEvent.edges.length == 0) {
      setNoEvents(true);
    }

    for(var i = 0; i < data.allStrapiEvent.edges[0].node.data.length; i++) {
      if (moment().unix() < (moment(data.allStrapiEvent.edges[0].node.data[i].attributes.DateTime).subtract(1, 'day').unix() )) {
        found = true;
        break;
      }
      
    }

    if (found == false) {
      setNoEvents(true);
    }



  }, []);

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
      <div className="container mx-auto p-10 pb-20" id="events">
        <div className="text-center py-10">
          <h1 className="text-white mb-10">Upcoming Shows</h1>
        </div>

        {
          noEvents&&<div className="text-center px-5 pb-10">
            <p className="text-gray-500 font-thin">Check back soon for upcoming shows + events!</p>
          </div>
        }

        {
          !noEvents&&data.allStrapiEvent.edges.length>0&&data.allStrapiEvent.edges[0].node.data.map((event, i) => {
            if (moment().unix() > (moment(event.attributes.startDate).add(1, 'day').unix() )) {
              return <div key={`event-${i}`}/>;
            }

            return <div className="grid grid-cols-3 mb-10" key={`event-${i}`}>
                    <div>
                      <strong className="text-white block">{moment(event.attributes.DateTime).format('MMMM Do')}</strong>
                      <span className="text-gray-400 text-lg font-bebas uppercase">{moment(event.attributes.DateTime).format('h:mm a')}</span>
                    </div>
                    <div className=" col-span-2 md:col-span-1">
                      <h3 className="text-white font-sans ">{event.attributes.Title}</h3>
                      <span className="text-gray-400 text-lg font-bebas uppercase block">{event.attributes.VenueName}, {event.attributes.VenueAddress}</span>
                    </div>
                    <div className="text-right pt-3 col-span-3 md:col-span-1">
                      <a href="#" className="py-3 md:py-5 px-10 bg-yellow-500 mt-3 block md:inline text-center">Details</a>
                    </div>
                  </div>


          })
        }

        
        
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
  allStrapiEvent (sort: { fields: data___attributes___DateTime, order:ASC}) {
    edges {
      node {
        data {
          attributes {
            DateTime
            Title
            VenueAddress
            VenueName
          }
        }
      }
    }
  }
}
`;

export default IndexPage
