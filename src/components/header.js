import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="absolute w-screen mx-auto hidden md:block p-5">
    <div className="container mx-auto">
    <div className="flex justify-between">
      <div>
        <Link to="/"><span className="text-yellow-500  font-bebas  text-2xl font-bold">ANTHONY DiDOMENICO</span></Link>
      </div>
      <div className="">
        <Link to="/" className="text-white font-bebas uppercase text-2xl">Home</Link>
        <Link to="/about" className="text-white  font-bebas uppercase text-2xl ml-5">About</Link>
     
        <Link to="/podcast" className="text-white  font-bebas uppercase text-2xl ml-5">KMF Podcast</Link>
        <Link to="/events" className="text-white  font-bebas uppercase text-2xl ml-5">Events</Link>
        <Link to="/contact" className="text-white font-bebas uppercase text-2xl ml-5">Contact</Link>
      </div>
    </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
