import {Link, useLocation} from "react-router-dom";
import HLogo from "/H-logo.svg";

function Navbar() {
    return (
      <>
        <div className="navbar-main text-gold font-protokoll">
          <div className="navbar-background-main"></div>
          <div className="navbar-background"></div>
            <div className="navbar-content-container">
              <Link to="/" className=" h-[3rem] w-[3rem]">
                <img src={HLogo} className=""></img>
              </Link>
              <div className="navbar-menu">
                <div className="navbar-menu-left">
                  <div className="nav-entry-outside">
                    <div className="nav-entry-setup">
                      <div className="navbar-entry">
                        <div>
                          Products
                        </div>
                      </div>
                      <div className="navbar-entry">
                        <div>
                          Sports & Users
                        </div>
                      </div>
                      <div className="navbar-entry">
                        <div>
                          Explore
                        </div>
                      </div>
                      <div className="navbar-entry">
                        <div>
                          Pricing
                        </div>
                      </div>                                            
                    </div>
                  </div>
                </div>
                <div className="navbar-menu-right">
                  <div className="nav-entry-outside">
                    <div className="nav-entry-setup">
                      <div className="navbar-entry">
                        <div className="">
                          Products
                        </div>
                      </div>
                      <div className="navbar-entry">
                        <div>
                          Another
                        </div>
                      </div>
                      <div className="navbar-entry">
                        <div className="w-8 h-8 bg-gold rounded-full">
                          
                        </div>
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