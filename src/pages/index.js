import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import Layout from "../components/layout"
import Seo from "../components/seo";
import moment from 'moment';

const IndexPage = () => {

  const data = useStaticQuery(query);

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
      <div className="bg-contain bg-fixed container mx-auto h-screen bg-bottom bg-no-repeat" style={{backgroundImage: "url('https://res.cloudinary.com/meshed-nyc/e_grayscale,q_auto,w_1200,c_fill/Removal-256_n4abys.png')"}}>
        <div className="flex justify-center items-center h-full">
          <div className="md:w-1/2 text-center mx-auto">
          <h1 className="text-white font-sans text-5xl mb-5 font-bold">Anthony DiDomenico</h1>
          <h3 className="text-white font-sans">Stand up Comedian &amp; Host of <span className="italic text-yellow-500">Keep Moving Forward</span></h3>
          <div className="mt-5">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl"/>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} className="text-white ml-5 text-2xl "/>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="text-white ml-5 text-2xl "/>
          </a>
          </div>

          </div>
        </div>
      </div>
      <div className="container mx-auto bg-blue-500 p-10">
        <div>
          <h3 className="text-white mx-auto md:w-1/2 w-full mb-5">Join my mailing list</h3>
        </div>
        <form>
          <div className="flex mx-auto md:w-1/2 w-full">
            <input type="email" name="" placeholder="Email Address" className="p-5 bg-white border-b font-sans w-2/3"/>
            <button className="p-5 bg-black text-white font-sans w-1/3">SUBSCRIBE</button>
          </div>
        </form>
      </div>
      <div className="container mx-auto p-10 pb-20">
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
                    <div>
                      <h3 className="text-white font-sans block">{event.attributes.Title}</h3>
                      <span className="text-gray-400 text-lg font-bebas uppercase">{event.attributes.VenueName}, {event.attributes.VenueAddress}</span>
                    </div>
                    <div className="text-right pt-3">
                      <a href="#" className="py-5 px-10 bg-yellow-500 mt-3">Details</a>
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
