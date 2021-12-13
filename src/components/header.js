import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {

  const [open, setOpen] = React.useState(false);

  return <header className="absolute w-screen mx-auto  p-5 z-10">
    <div className="container mx-auto hidden md:block">
    <div className="flex justify-between">
      <div>
        <Link to="/"><span className="text-yellow-500  font-bebas  text-2xl font-bold">ANTHONY DiDOMENICO</span></Link>
      </div>
      <div className="">
        <Link to="/" className="text-white font-bebas uppercase text-2xl">Home</Link>
        <Link to="/about" className="text-white font-bebas uppercase text-2xl ml-5">About</Link>
        <Link to="/podcast" className="text-white font-bebas uppercase text-2xl ml-5">KMF Podcast</Link>
        <Link to="/#events" className="text-white font-bebas uppercase text-2xl ml-5">Events</Link>
        <Link to="/contact" className="text-white font-bebas uppercase text-2xl ml-5">Contact</Link>
      </div>
    </div>
    
    </div>
    <div className="text-right z-10 fixed w-screen md:hidden" style={{top:0, left:0}}>
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
      <Link to="/" className="text-white font-bebas uppercase text-2xl">Home</Link>
      <Link to="/about" className="text-white font-bebas uppercase text-2xl ml-3">About</Link>
      <Link to="/podcast" className="text-white font-bebas uppercase text-2xl ml-3">KMF Podcast</Link>
      <Link to="/#events" className="text-white font-bebas uppercase text-2xl ml-3">Events</Link>
      <Link to="/contact" className="text-white font-bebas uppercase text-2xl ml-3">Contact</Link>
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

export default Header
