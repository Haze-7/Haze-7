import {Link, useLocation} from "react-router-dom";
import HLogo from "/H-logo.svg";

function Footer() {
    return (
      <>
        <div className="gradient-bg sm:h-[30vh] h-[70vh] flex mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start items-center w-full pl-[2vw] pr-[5vw]">
            {/* Logo */}
              <div className="h-full w-[30vw]">
                <a href="#Hero" className="flex h-[10rem] w-[10rem] pt-8">
                  <img src={HLogo} className=""></img>
                </a>
              </div>
              {/* Grid / Links */}
              <div className="flex flex-col sm:flex-row w-auto gap-[5vw] text-center mt-[3vh] sm:mt-[5vh]">
                {/* Home */}
                <div>
                  <h2 className="footer-heading font-semibold">
                    Home
                  </h2>
                  {/* Container */}
                  <div>
                    {/* Items */}
                    <div>
                      <a href="/" className="footer-link hover:underline my-[1.5vh]">
                        Temp
                      </a>
                    </div>
                    <div>
                      <a href="/" className="footer-link hover:underline">
                        Temp
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="footer-heading font-semibold">
                    Home
                  </h2>
                  {/* Container */}
                  <div>
                    {/* Items */}
                    <div>
                      <a href="/" className="footer-link hover:underline my-[1.5vh]">
                        Temp
                      </a>
                    </div>
                    <div>
                      <a href="/" className="footer-link hover:underline">
                        Temp
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="footer-heading font-semibold">
                    Home
                  </h2>
                  {/* Container */}
                  <div>
                    {/* Items */}
                    <div>
                      <a href="/" className="footer-link hover:underline my-[1.5vh]">
                        Temp
                      </a>
                    </div>
                    <div>
                      <a href="/" className="footer-link hover:underline">
                        Temp
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="footer-heading font-semibold">
                    Home
                  </h2>
                  {/* Container */}
                  <div>
                    {/* Items */}
                    <div>
                      <a href="/" className="footer-link hover:underline my-[1.5vh]">
                        Temp
                      </a>
                    </div>
                    <div>
                      <a href="/" className="footer-link hover:underline">
                        Temp
                      </a>
                    </div>
                  </div>
                </div>

                {/* End Grid */}
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