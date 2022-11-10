import * as React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby";

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(query);

  const social = data.strapiSocialMedia.data.attributes;

  const [open, setOpen] = React.useState(false);

  return <header className="absolute w-full mx-auto  p-5 z-10">
    <div className="container mx-auto hidden md:block">
    <div className="flex justify-between">
      <div>
        <Link to="/"><span className="text-yellow-500  font-bebas  text-2xl font-bold">ANTHONY DiDOMENICO</span></Link>
      </div>
      <div className="">
        <Link to="/" className="text-white font-bebas uppercase text-2xl">Home</Link>
        <Link to="/about" className="text-white font-bebas uppercase text-2xl ml-5">About</Link>
        <Link to="/#podcast" className="text-white font-bebas uppercase text-2xl ml-5">KMF Podcast</Link>
        <Link to="/shows" className="text-white font-bebas uppercase text-2xl ml-5">Shows</Link>
        <a href={social.Patreon} target="_blank"  className="text-white font-bebas uppercase text-2xl ml-5">Patreon</a>
        <Link to="/contact" className="text-white font-bebas uppercase text-2xl ml-5">Contact</Link>
      </div>
    </div>
    
    </div>
    <div className="md:hidden">
      <Link to="/"><span className="text-yellow-500  font-bebas  text-2xl font-bold">ANTHONY DiDOMENICO</span></Link>
    </div>
    <div className="text-right z-10 fixed w-screen md:hidden" style={{top:10, left:0}}>
      <button className="text-gray-500  w-10 h-10 relative focus:outline-none bg-black" onClick={() => setOpen(!open)}>
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <span aria-hidden="true" className={"block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out "+(open?"rotate-45 ":"-translate-y-1.5")}></span>
              <span aria-hidden="true" className={"block absolute  h-0.5 w-5 bg-white   transform transition duration-500 ease-in-out "+(open?"opacity-0 ":"")}></span>
              <span aria-hidden="true" className={"block absolute  h-0.5 w-5 bg-white transform  transition duration-500 ease-in-out "+(open?"-rotate-45  ":"translate-y-1.5")}></span>
          </div>
      </button>
    </div>
    <div className={`fixed ${open?"block":"hidden"} w-screen h-screen bg-black/90 flex justify-center items-center`} style={{top:0, left:0}}>
      <div>
      <Link to="/" className="text-white font-bebas uppercase text-2xl block">Home</Link>
      <Link to="/about" className="text-white font-bebas uppercase text-2xl block">About</Link>
      <Link to="/#podcast" className="text-white font-bebas uppercase text-2xl  block">KMF Podcast</Link>
      <Link to="/shows" onClick={() => setOpen(false)}className="text-white font-bebas uppercase text-2xl block">Shows</Link>
      <a href={social.Patreon} target="_blank"  className="text-white font-bebas uppercase text-2xl block">Patreon</a>
        
      <Link to="/contact" className="text-white font-bebas uppercase text-2xl block">Contact</Link>



      <div className=" flex fixed justify-between  w-full px-10" style={{bottom:'25px', left:0}}>
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
  </header>
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const query = graphql`
query MyQuery5 {
  strapiSocialMedia {
    data {
      attributes {
        Facebook
        Instagram
        TikTok
        Twitter
        Patreon
      }
    }
  }
}`;



export default Header
