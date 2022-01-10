import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo";
import moment from 'moment';

const ShowsPage = () => {

  const data = useStaticQuery(query);

  const page = data.strapiEventsPage.data.attributes;
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
    <Seo title="About" />
    
     <div className="container mx-auto p-10 pb-20 min-h-screen pt-20" id="events">
        <div className="text-center py-10">
          <h1 className="text-white mb-5">{page.title}</h1>
          <p className="text-gray-500 font-thin mb-10">{page.Subtitle}</p>

        </div>

        {
          noEvents&&<div className="text-center px-5 pb-10">
            <p className="text-gray-500 font-thin">Check back soon for upcoming shows + events!</p>
          </div>
        }

        {
          !noEvents&&data.allStrapiEvent.edges.length>0&&data.allStrapiEvent.edges[0].node.data.map((event, i) => {
            
            if (moment().unix() > (moment(event.attributes.DateTime).add(1, 'day').unix() )) {
              
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
                      <a href={event.attributes.Link} target="_blank" className="py-3 md:py-5 px-10 bg-yellow-500 mt-3 block md:inline text-center">Details</a>
                    </div>
                  </div>


          })
        }

        
        
    </div>
  </Layout>
};
const query = graphql`
query ShowsPage {
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
            Link
          }
        }
      }
    }
  }
  strapiEventsPage {
    data {
      attributes {
        title
        Subtitle
        NoEventsMessage
      }
    }
  }
}
`;

export default ShowsPage
