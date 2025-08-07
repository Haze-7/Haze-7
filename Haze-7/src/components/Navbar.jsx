import HLogo from "/H-logo.svg";

import { useState } from 'react';
import {Link, useLocation} from "react-router-dom";

function Navbar() {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <>
        <div className="navbar-main text-gold font-protokoll">
          <div className="navbar-background-main"></div>
          <div className="navbar-background"></div>
            <div className={` ${!menuOpen ? "hidden" : "flex"} navbar-content-container`}>
              <Link to="/" className=" h-[3rem] w-[3rem]">
                <img src={HLogo} className=""></img>
              </Link>
              <div className="navbar-menu">
                {/* Navbar Menu Left */}
                <div className="flex">
                  <div className="nav-entry-outside">
                    <div className="nav-entry-setup">
                      <div className="navbar-entry">
                        <Link to="/">
                          About Me
                        </Link>
                        <div className="navbar-chevron" >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" strokeWidth="2"><path d="M6 9l6 6l6 -6"></path></svg>
                        </div>
                      </div>
                      <div className="navbar-entry">
                        <Link to="/">
                          Experience
                        </Link>
                        <div className="navbar-chevron">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" strokeWidth="2"><path d="M6 9l6 6l6 -6"></path></svg>
                        </div>
                      </div>
                      <div className="navbar-entry">
                        <Link to="/">
                          Projects
                        </Link>
                        <div className="navbar-chevron">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" strokeWidth="2"><path d="M6 9l6 6l6 -6"></path></svg>
                        </div>
                      </div>
                      <div className="navbar-entry">
                        <Link to="/">
                          Contact Me
                        </Link>
                        <div className="navbar-chevron">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" strokeWidth="2"><path d="M6 9l6 6l6 -6"></path></svg>
                        </div>                        
                      </div>                                            
                    </div>
                  </div>
                </div>
                {/* Nav Menu Right */}
                <div className="flex">
                  <div className="nav-entry-outside">
                    <div className="nav-entry-setup">
                      <div className="navbar-entry">
                        <Link to="/">
                          Contact
                        </Link>
                      </div>
                      <div className="navbar-entry">
                        <Link to="/" className="w-[6rem] h-[2rem] bg-gold rounded-3xl flex items-center justify-center">
                          Learn More
                        </Link>
                      </div>
                      <div className="navbar-entry">
                        <Link to="" className="w-[2rem] h-[2rem] bg-gold rounded-full">
                          
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </>
    )
} 
export default Navbar;

// sticky w-full h-[5vh] flex z-40 shadow-md bg-gold shadow-slate top-[1rem] 

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%" stroke-width="2">
  <path d="M6 9l6 6l6 -6"></path>
</svg> */}