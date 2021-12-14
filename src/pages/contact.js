import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo";
import moment from 'moment';
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from "react-google-recaptcha-v3";

const ContactPage = () => {

  const data = useStaticQuery(query);

  const page = data.strapiContactPage.data.attributes;

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [token, setToken] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const validate= (e) => {

    setErrorMessage('');
    
    var error = false;

    if (name == '' || email == '' || message == '') {
      error =  true;
    }

    if (error) {
      e.preventDefault();
      setErrorMessage("All fields are required");
      return false;
    }


    return true;

    
  }

  return <Layout>
    <Seo title="Contact" />
    <div className="container mx-auto grid md:grid-cols-2 py-20 gap-5 md:px-0 px-5 min-h-screen">
      
      <div className="col-span-2 md:col-span-1">
        <h1 className="text-white mb-5">{page.Title}</h1>
        <div className="text-gray-200 font-thin mb-10">
          {page.Content}
        </div>
        
      </div>
      <div className="col-span-2 md:col-span-1">
      <GoogleReCaptchaProvider reCaptchaKey="6LdhcqAdAAAAAOA1PDTtqjrcFR-OBm7gbrwY7lf9">
          <form action={page.GetFormURL} method="post" target="_blank" onSubmit={validate}>
            <label className="font-bebas text-gray-400 block uppercase">Name</label>
            <input type="text" name="name" maxlength="255" className="p-3 bg-white block w-full mb-5" value={name} onChange={(e) => setName(e.value)}/>
            <label className="font-bebas text-gray-400 block uppercase">Email Address</label>
            <input type="email" name="email" maxlength="255" className="p-3 bg-white block w-full mb-5" value={email} onChange={(e) => setEmail(e.value)}/>
            <label className="font-bebas text-gray-400 block uppercase">Message</label>
            <textarea name="message" maxlength="255" className="p-3 bg-white block w-full mb-8" value={message} onChange={(e) => setMessage(e.value)} rows="4"></textarea>
            <GoogleReCaptcha
                onVerify={token => {
                  setToken(token)
                }}
              />
            <input type="hidden" name="g-recaptcha-response" value={token} />
            {errorMessage!=''&&<span className="text-red-500 block mb-8">{errorMessage}</span>}
            <button className="bg-yellow-500 px-5 py-3 text-black block md:inline w-full md:w-auto">Submit</button>
          </form>
        </GoogleReCaptchaProvider>
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
