import Navbar from "../components/Navbar.jsx"
import {Link, useLocation} from "react-router-dom";

import ProfilePic from "/images/haze-profile-pic.png" 

import {onClick} from 'react';

function Home({ mode, setMode }) {
    return (
      <>
      {/* var(--primary- text-color) */}

        <div className="w-full">
          {/* Hero Section */}
          <section className="bg-sand h-[80rem] flex justify-center gap-[5rem]">
            <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-28 h-auto lg:h-[95vh] pt-[10rem] lg:pt-0">
              {/* Hero Name / Intro */}
                <div className="pt-[4.5rem] order-2 lg:order-1">
                  <p className="text-[1.90rem] hero-secondary-text font-semibold">
                    Hello, I'm
                  </p>
                  <h1 className="text-[4rem] font-bold hero-primary-text mt-[-.5rem]">
                    Hayes Chiasson
                  </h1>
                  <p className="text-[2rem] font-semibold hero-secondary-text">
                    Fullstack Developer
                  </p>
                  <div className="mt-[1.5rem] flex lg:flex-row flex-col gap-[2rem] lg:gap-[3rem] justify-center items-center font-semibold">
                    <button onClick={() => window.open('/hayes-resume.pdf', '_blank')} className=" hero-primary-button primary-text-color rounded-3xl flex items-center justify-center ">
                      Download CV
                    </button>
                    <button to="/" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
                      Contact Info
                    </button>
                  </div>
                </div>              
                {/* Professional Photo */}
                <div className="hero-picture pt-[2.5rem] order-1 lg:order-2">
                  <img src={ProfilePic} alt="Haze Profile Picture" className=""></img>
                </div>
            </div>
          </section>
          {/* About Me Section */}
          <section className="gradient-bg h-[50rem] shadow-lg/50 shadow-gray">
            <div className="flex justify-center ">
              <div className="about-title font-bold">
                About Me
              </div>
              {/* About Me content? */}
              <div className="">

              </div>
            </div>
          </section>
          {/* Projects Section */}
          <section className="bg-sand h-[80rem]">
            <div className="">

            </div>
          </section>
          {/* Contact Me Section */}
          <section className="gradient-bg h-[40rem] shadow-lg/50 shadow-gray">

          </section>
          {/* Etc Section */}
          <section className="bg-sand h-[80rem]">
            <div className="">

            </div>
          </section>
        </div>
      </>
    )
}

export default Home;