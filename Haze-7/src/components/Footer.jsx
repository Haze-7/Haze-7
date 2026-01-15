import {Link, useLocation} from "react-router-dom";
import HLogo from "/H-logo-full.svg";

function Footer() {
    return (
      <>
        <div className="gradient-bg md:h-[50vh] h-[70vh]">
          {/*Content Container*/}
          <div className="flex flex-col mx-[9rem]">
            {/* Logo Row Container */}
            <div className="">
            {/* Logo */}
              <div className="h-[20vh] w-[30vw] pt-8">
                <a href="#Hero" className="flex h-[8.5rem] w-[8.5rem]">
                  <img src={HLogo} className=""></img>
                </a>
              </div>
            </div>
            {/* Footer Bar Top */}
            <div className="flex footer-bar text-4xl w-full mt-[1rem] mb-[2rem]"> </div>
            {/* Middle Content Container */}
            <div className="sm:h-[20vh] w-full"> 
              {/* Middle Content (Links) Grid */}
              <div className="flex flex-col md:flex-row">
                {/*Column 1 */}
                <div className="flex flex-col">
                  <a href="/" className="footer-info font-semibold">
                  Baton Rouge, La 70808
                  </a>
                  <a href="/" className="footer-info font-semibold">
                  United States
                  </a>
                  <a href="/" className="footer-info font-semibold mt-[1rem]">
                  hchias2@lsu.edu
                  </a>
                </div>
                {/* Column 2 */}
                <div className="flex flex-col ml-auto">
                  <a href="/" className="footer-info font-semibold">
                    CSG Guide
                  </a>
                  <a href="/" className="footer-info font-semibold">
                    Deadman's Hand
                  </a>
                  <a href="/" className="footer-info font-semibold">
                    OrchestrAI
                  </a>
                </div>
                {/* Column 3 */}
                <div className="flex flex-col pl-[1vw]">
                  <a href="/" className="footer-info font-semibold">
                    BARBER
                  </a>
                  <a href="/" className="footer-info font-semibold">
                    Suni: The Travel Companion
                  </a>
                </div>
                {/* "Column 4" H Logo (only show at above sm) */}
                <div className="hidden sm:flex ml-auto">
                  <a href="#Hero" className="flex h-[6rem] w-[6rem]">
                    <img src={HLogo} className=""></img>
                  </a>
                </div>
              </div>
              {/*Contact Me List */}
              <div className="flex flex-col sm:flex-row mt-auto">
                <div className="flex ">
                  LinkedIn
                </div>
              </div>
            </div>
            {/* Footer Bar Top */}
            <div className="flex footer-bar text-4xl w-full my-[1rem]"> </div>
          </div>
        </div>
      </>
    )
};

export default Footer;

// Contact Me Garage

              