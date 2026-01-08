import {Link, useLocation} from "react-router-dom";
import HLogo from "/H-logo.svg";

function Footer() {
    return (
      <>
        <div className="gradient-bg sm:h-[20vh] h-[50vh] flex mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start items-center w-full pl-[2vw] pr-[5vw]">
            {/* Logo */}
              <a href="#Hero" className=" h-[3rem] w-[3rem] pt-8">
                 <img src={HLogo} className=""></img>
              </a>
              {/* Grid / Links */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-[5vh] w-full text-center ml-auto sm:w-auto mt-[3vh] sm:mt-[5vh]">
                {/* Home */}
                <div>
                  <h2 className="footer-heading font-semibold">
                    Home
                  </h2>
                  <a href="/" className="footer-link hover:underline my-[1.5vh]">
                    Temp
                  </a>
                  <a href="/" className="footer-link hover:underline">
                    Temp
                  </a>
                </div>
                {/* Repeat above To create Grid */}
              </div>
          </div>
        </div>
      </>
    )
};

export default Footer;

              // <a href="#Hero" className=" h-[3rem] w-[3rem]">
              //   <img src={HLogo} className=""></img>
              // </a>