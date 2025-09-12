import Navbar from "../components/Navbar.jsx"
import {Link, useLocation} from "react-router-dom";

import ProfilePic from "/images/haze-profile-pic.png" 

import {onClick} from 'react';

import HLogo from "/H-logo.svg";

import DeadmanPreview from "/images/deadman-preview.svg" 
import CSGPreview from "/images/csg-preview.svg"
import SuniPreview from "/images/suni-preview.svg" 


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
          <section id="About-Me" className="gradient-bg h-[55rem] lg:h-[50rem] shadow-lg/50 shadow-gray gradient-link-offset">
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
          <section id="Projects" className="bg-sand min-h-[70rem]">
            <div className="text-[3rem]">
              {/* Projects Title */}
              <div className="flex justify-center">
                <div className="projects-title font-bold pt-[5rem]">
                 Projects
               </div>
              </div>
            {/* Projects Display Grid */}
              <div className="m-[1.5rem] md:m-[2rem] lg:m-[3rem]">
                {/* w-[85%] md:w-[97%] xl:w-[90%] mx-auto */}
                <div className="projects-display items-stretch w-[95%] sm:w-[90%] lg:w-[90%] xl:max-w-[1280px] mx-auto gap-[1.5rem] md:gap-[1.25rem] lg:gap-[1.5rem] xl:gap-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
                  {/* Project Entry 1 */}
                  <div className="projects-entry rounded-xl gradient-bg">
                    {/* Project Title */}
                    {/* text-[clamp(1.5rem,2vw,2.5rem)] */}
                    <div className="text-3xl xl:text-4xl  projects-entry-title font-bold "> 
                      Deadman's Hand
                    </div>
                    {/* Project Image */}
                    <div className="projects-entry-image">
                        <img src={DeadmanPreview} alt="Deadman's Project Image" className="w-full h-full object-cover rounded-xl"/>
                    </div>
                    {/* Project Description */}
                    <div className="projects-entry-description overflow-auto scrollbar-hidden gradient-bg rounded-xl">
                     Deadman's Hand is a web application designed to create x y z thing
                     this is good for teaching and blah blah blah balh blah
                     blah blahb blah
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-row gap-[1rem] md:gap-[1.25rem] lg:gap-[1rem] xl:gap-[2rem] mx-[1rem] m-[1.5rem] justify-center items-center font-semibold">
                      <button to="/" className="hero-primary-button primary-text-color rounded-3xl flex items-center justify-center ">
                        GitHub
                      </button>
                      <button to="/" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
                        Live Demo
                      </button>
                    </div>
                  </div>
                  {/* Project Entry 2 */}
                  <div className="projects-entry rounded-xl gradient-bg ">
                    {/* Project Title */}
                    <div className="text-3xl xl:text-4xl projects-entry-title font-bold">
                      CSS Style Guide
                    </div>
                    {/* Project Image */}
                    <div className="projects-entry-image">
                        <img src={CSGPreview} alt="Deadman's Project Image" className="w-full h-full object-cover rounded-xl"/>
                    </div>
                    {/* Project Description */}
                    <div className="projects-entry-description overflow-auto scrollbar-hidden rounded-xl lg:max-h-[100%]">
                     Deadman's Hand is a web application designed to create x y z thing
                     this is good for teaching and blah blah blah balh blah
                     blah blahb blah
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-row gap-[1rem] md:gap-[1.25rem] lg:gap-[1rem] xl:gap-[2rem] mx-[1rem] m-[1.5rem] justify-center items-center font-semibold">
                      <button className=" hero-primary-button primary-text-color rounded-3xl flex items-center justify-center">
                        Github
                      </button>
                      <button to="/" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
                        Live Demo
                      </button>
                    </div>
                  </div>
                  {/* Project Entry 3 */}
                  <div className="projects-entry col-span-full lg:col-span-1 rounded-xl gradient-bg max-h-[100%] md:max-h-[70%] lg:max-h-[100%]">
                    {/* Project Title */}
                    <div className="text-3xl xl:text-4xl projects-entry-title font-bold">
                      Suni
                    </div>
                    {/* Project Image */}
                    <div className="projects-entry-image max-h-[100%] md:max-h-[40%] lg:max-h-[50%]">
                        <img src={SuniPreview} alt="Deadman's Project Image" className="w-full h-full object-cover rounded-xl"/>
                    </div>
                    {/* Project Description */}
                    <div className="projects-entry-description overflow-auto scrollbar-hidden rounded-xl max-h-[100%] md:max-h-[4%] lg:max-h-[100%]">
                     Deadman's Hand is a web application designed to create x y z thing
                     this is good for teaching and blah blah blah balh blah
                     blah blahb blah
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-row gap-[1rem] md:gap-[1.25rem] lg:gap-[1rem] xl:gap-[2rem] mx-[1rem] m-[1.5rem] justify-center items-center font-semibold">
                      <button className="hero-primary-button primary-text-color rounded-3xl flex items-center justify-center ">
                        Github
                      </button>
                      <button to="/" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons (View More, access General Github) */}
              <div className="flex flex-row gap-[2rem] m-[1.5rem] py-[3rem] justify-center items-center font-semibold">
                {/* Link to projects page */}
                <button to="/" className="hero-primary-button primary-text-color rounded-3xl flex items-center justify-center ">
                  View Projects
                </button>
                  {/* Link to github home*/}
                <button to="/" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
                  Github Home
               </button>
              </div>
            </div>
          </section>
          {/* Experience Section */}
          <section id="Experience" className="gradient-bg h-[40rem] shadow-lg/50 shadow-gray gradient-link-offset">
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