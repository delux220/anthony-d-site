import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import Layout from "../components/layout"
import Seo from "../components/seo";
import moment from 'moment';

const ContactPage = () => {

  const data = useStaticQuery(query);

  const page = data.strapiContactPage.data.attributes;

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  return <Layout>
    <Seo title="Home" />
    <div className="container mx-auto grid md:grid-cols-2 py-20 gap-5 md:px-0 px-5 min-h-screen">
      
      <div className="col-span-2 md:col-span-1">
        <h1 className="text-white mb-5">{page.Title}</h1>
        <div className="text-gray-200 font-thin mb-10">
          {page.Content}
        </div>
        
      </div>
      <div className="col-span-2 md:col-span-1">
          <form action={page.GetFormURL} method="POST" target="_blank">
            <label className="font-bebas text-gray-400 block uppercase">Name</label>
            <input type="text" name="name" maxlength="255" className="p-3 bg-white block w-full mb-5" value={name} onChange={(e) => setName(e.value)}/>
            <label className="font-bebas text-gray-400 block uppercase">Email Address</label>
            <input type="text" name="name" maxlength="255" className="p-3 bg-white block w-full mb-5" value={email} onChange={(e) => setEmail(e.value)}/>
            <label className="font-bebas text-gray-400 block uppercase">Message</label>
            <textarea name="message" maxlength="255" className="p-3 bg-white block w-full mb-8" value={message} onChange={(e) => setMessage(e.value)} rows="4"></textarea>
            <button className="bg-yellow-500 px-5 py-3 text-black block md:inline w-full md:w-auto">Submit</button>
          </form>
      </div>

     </div>
  </Layout>
};
const query = graphql`
query ContactPageQuery {
  strapiContactPage {
    data {
      attributes {
        Title
        Content
        GetFormURL
      }
    }
  }
}
`;

export default ContactPage
