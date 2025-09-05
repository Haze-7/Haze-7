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
          <section id="Hero" className="bg-sand h-[80rem] flex justify-center gap-[5rem]">
            <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-28 h-auto lg:h-[95vh] pt-[10rem] lg:pt-0">
              {/* Hero Name / Intro */}
                <div className="pt-[4.5rem] order-2 lg:order-1">
                  <p className="pt-[2.7rem] sm:pt-0 text-[1.90rem] hero-secondary-text font-semibold">
                    Hello, I'm
                  </p>
                  <h1 className="text-[4rem] font-bold hero-primary-text mt-[-.5rem]">
                    Hayes Chiasson
                  </h1>
                  <p className="text-[2rem] font-semibold hero-secondary-text">
                    Fullstack Developer
                  </p>
                  <div className="mt-[1.5rem] flex flex-row gap-[2rem] lg:gap-[3rem] justify-center items-center font-semibold">
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
          <section id="About-Me" className="gradient-bg h-[55rem] lg:h-[50rem] shadow-lg/50 shadow-gray">
            <div className="">
              {/* About Title Container */}
              <div className="flex justify-center">
                <div className="gradient-title font-bold pt-[3.5rem]">
                  About Me
                </div>
              </div>
              {/* About Me content Container*/}
              <div className="flex flex-col lg:flex-row w-full gap-[1.5rem] lg:gap-[3rem] justify-center items-center pt-[2.5rem] lg:pt-[3.5rem] px-[3rem]">
                {/* About Me Image/ Box */}
                <div className="bg-mineshaft flex rounded-xl w-[17rem] lg:w-[45%] h-[17rem] lg:h-[25rem] justify-center items-center font-semibold text-[1.5rem] lg:text-[2rem]">
                  {/* <img src={} alt="About Me Image/Box"></img> */}
                  About Me Image/ Box
                </div>
                  {/* About Me Text / Description */}
                  <div className="flex w-[100%] lg:w-[55%] flex-col"> {/*  Missing Height*/}
                    <p className="about-description text-[1.3rem] sm:text-[1.5rem]">
                    I’m Hayes Chiasson, i’m 21 years old. I’m originally from Thibodaux, Louisiana. I attend Lousiana State University, and will be a senior in the coming year blah blah balh
                  </p>
                    <div className="mt-[1.5rem] flex flex-row gap-[2rem] lg:gap-[3rem] justify-center items-center font-semibold">
                      <button to="" className=" hero-primary-button primary-text-color rounded-3xl flex items-center justify-center ">
                        Images
                      </button>
                      <button to="/" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          {/* Projects Section */}
          <section id="Projects" className="bg-sand h-[70rem]">
            <div className=" text-[3rem]">
              {/* Projects Title */}
              <div className="flex justify-center">
                <div className="projects-title font-bold pt-[5rem]">
                 Projects
               </div>
              </div>
            {/* Projects Display Grid */}
              <div className="m-[3rem]">
                <div className="projects-display flex-col xl:flex-row pt-[3rem]">
                  {/* Project Entry 1 */}
                  <div className="projects-entry rounded-xl gradient-bg">
                    {/* Project Title */}
                    <div className="flex text-4xl justify-center mt-[1rem]">
                      Deadman's Hand
                    </div>
                    {/* Project Image */}
                    <div className="flex m-[1.5rem] mt-[1rem] h-[14rem] bg-gold rounded-xl items-center justify-center">
                        Project Image
                    </div>
                    {/* Project Description */}
                    <div className="projects-entry-description rounded-xl">
                     Deadman's Hand is a web application designed to create x y z thing
                     this is good for teaching and blah blah blah balh blah
                     blah blahb blah
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-row gap-[2rem] m-[1.5rem] justify-center items-center font-semibold">
                      <button to="/" className="hero-primary-button primary-text-color rounded-3xl flex items-center justify-center ">
                        GitHub
                      </button>
                      <button to="/" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
                        Live Demo
                      </button>
                    </div>
                  </div>
                  {/* Project Entry 2 */}
                  <div className="projects-entry rounded-xl gradient-bg">
                    {/* Project Title */}
                    <div className="flex text-4xl justify-center mt-[1rem]">
                      Deadman's Hand
                    </div>
                    {/* Project Image */}
                    <div className="flex m-[1.5rem] mt-[1rem] h-[14rem] bg-gold rounded-xl items-center justify-center">
                        Project Image
                    </div>
                    {/* Project Description */}
                    <div className="projects-entry-description rounded-xl">
                     Deadman's Hand is a web application designed to create x y z thing
                     this is good for teaching and blah blah blah balh blah
                     blah blahb blah
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-row gap-[2rem] m-[1.5rem] justify-center items-center font-semibold">
                      <button onClick={() => window.open('/hayes-resume.pdf', '_blank')} className=" hero-primary-button primary-text-color rounded-3xl flex items-center justify-center ">
                        Download CV
                      </button>
                      <button to="/" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
                        Contact Info
                      </button>
                    </div>
                  </div>
                  {/* Project Entry 3 */}
                  <div className="projects-entry rounded-xl gradient-bg">
                    {/* Project Title */}
                    <div className="flex text-4xl justify-center mt-[1rem]">
                      Deadman's Hand
                    </div>
                    {/* Project Image */}
                    <div className="flex m-[1.5rem] mt-[1rem] h-[14rem] bg-gold rounded-xl items-center justify-center">
                        Project Image
                    </div>
                    {/* Project Description */}
                    <div className="projects-entry-description rounded-xl">
                     Deadman's Hand is a web application designed to create x y z thing
                     this is good for teaching and blah blah blah balh blah
                     blah blahb blah
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-row gap-[2rem] m-[1.5rem] justify-center items-center font-semibold">
                      <button onClick={() => window.open('/hayes-resume.pdf', '_blank')} className=" hero-primary-button primary-text-color rounded-3xl flex items-center justify-center ">
                        Download CV
                      </button>
                      <button to="/" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
                        Contact Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Experience Section */}
          <section id="Experience" className="gradient-bg h-[40rem] shadow-lg/50 shadow-gray">
            <div className="">
                {/* About Title Container */}
                <div className="flex justify-center">
                  <div className="gradient-title font-bold pt-[4rem]">
                    Experience
                  </div>
                </div>
            </div>
          </section>
          {/* Contact Me Section */}
          <section id="Contact-Me" className="bg-sand h-[80rem]">
            <div className="">

            </div>
          </section>
        </div>
      </>
    )
}

export default Home;