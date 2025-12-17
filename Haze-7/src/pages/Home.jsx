import Navbar from "../components/Navbar.jsx"
import {Link, useLocation} from "react-router-dom";

import ProfilePic from "/images/haze-profile-pic.png" 

import {onClick, useRef, useEffect, useState} from 'react';
import {useInView} from "react-intersection-observer";


import HLogo from "/H-logo.svg";

import DeadmanPreview from "/images/deadman-preview.svg";
import CSGPreview from "/images/csg-preview.svg";
import SuniPreview from "/images/suni-preview.svg"; 
import AboutMeImage from "/images/haze-about-me-pic.jpg";

import OlolImage from "/images/olol.svg";
import LsuIts from "/images/lsu-its.svg";
import BarberImage from "/images/barber.svg";

function Home({ mode, setMode }) {

    // Handle Experience section slide in / out (track page)
    const { ref: expOneRef, inView: expOneIsVisible } = useInView({
      threshold: 0.35,
      triggerOnce: false,
      rootMargin: '-5% 0px -25% 0px',
    });

    const { ref: expTwoRef, inView: expTwoIsVisible } = useInView({
      threshold: 0.2,              // lower threshold = triggers sooner
      triggerOnce: false,
      rootMargin: '-20% 0px -20% 0px', // top margin negative = triggers even earlier
    });

    const { ref: expThreeRef, inView: expThreeIsVisible } = useInView({
      threshold: 0.35,             // lower threshold = triggers sooner
      triggerOnce: false,
      rootMargin: '-20% 0px -20% 0px', // negative top margin = triggers earlier
    });

      // const { ref: epFourRef, inView: expFourIsVisible } = useInView({
      //   threshold: 0.5, // Triggers when 50% of the element is visible
      // });

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
                    <Link to="#Contact-Me" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
                      Contact Info
                    </Link>
                  </div>
                </div>              
                {/* Professional Photo */}
                <div className="hero-picture pt-[2.5rem] order-1 lg:order-2">
                  <img src={ProfilePic} alt="Haze Profile Picture" className=""></img>
                </div>
            </div>
          </section>
          {/* About Me Section */}
          <section id="About-Me" className="gradient-bg h-[] lg:h-[50rem] shadow-lg/50 shadow-gray gradient-link-offset">
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
                {/* Temp remove background for image fit, future image stretch properly at wide view widths (rectangle):  bg-mineshaft (is reason for lack of rounded edges at large*/}
                <div className="flex rounded-xl overflow-hidden w-[17rem] lg:w-[45%] h-[17rem] lg:h-[25rem] justify-center items-center font-semibold text-[1.5rem] lg:text-[2rem]">
                  <img src={AboutMeImage} alt="About Me Image/Box" className="rounded-xl w-full h-full object-contain"></img>  {/* Will need to replace with more responsive image/ better scale */}
                </div>
                  {/* About Me Text / Description */}
                  <div className="flex w-[100%] lg:w-[55%] flex-col pt-[2%]"> {/*  Missing Height*/}
                    <p className="about-description text-[1.3rem] sm:text-[1.5rem]">
                    I'm a Senior at Louisiana State University pursuing a Bachelors Degree in Software Engineering with a Minor in Digital Media Arts & Engineering. 
                    I thrive on taking innovative ideas from concept to execution through software development, and see myself working on hobby projects well into my career.
                  </p>
                    <div className="mt-[1.5rem] flex flex-row gap-[7%] lg:gap-[3rem] mb-[3rem] lg:mb-0 justify-center items-center font-semibold">
                      <Link to="" className=" hero-primary-button primary-text-color rounded-3xl flex items-center justify-center ">
                        Images
                      </Link>
                      <Link to="/about-me" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          </section>

          
          {/* Projects section */}
          <section id="Projects" className="bg-sand min-h-[70rem]">
            <div className="text-[3rem]">
              {/* Projects Title */}
              <div className="flex justify-center">
                <div className="projects-title font-bold pt-[5rem] sm:pt-[6rem]">
                 Projects
               </div>
              </div>
            {/* Projects Display Grid*/}
              <div className="mx-[1.2rem] md:mx-0 mt-[7%] sm:mt-[3%]">
                <div className="projects-display items-stretch w-[95%] sm:w-[85%] lg:w-[90%] xl:max-w-[1280px] mx-auto gap-[2rem] md:gap-[3%] lg:gap-[2.3%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
                  {/* Project Entry 1 */}
                  <div className="projects-entry rounded-xl gradient-bg">
                    {/* Project Image */}
                    <div className="projects-entry-image">
                        <img src={DeadmanPreview} alt="Deadman's Project Image" className="w-full h-full object-cover rounded-xl max-h-[5rem] min-h-[12rem] "/>
                    </div>
                    {/* Project Title */}
                    <div className="projects-entry-title font-bold "> 
                      Deadman's Hand
                    </div>
                    {/* Project Description */}
                    <div className="projects-entry-description overflow-auto scrollbar-hidden gradient-bg rounded-xl max-h-[8rem] lg:max-h-[8rem] xl:max-h-[8rem]">
                     Deadman's Hand is a simulation game that seeks to educate players on the manipulative, gambling, like tactics used by game companies. 
                     Players engage with a modern card battler that implements gacha tactics, currency manipulation, shop limitations, leaderboard pressure, 
                     and artificial scarcity to entice the player to spend real world currency. Players then receive a T.A.S.K (Tactics Awareness Score Keeper) 
                     assessment at the end of their experience that details their habits, spending levels, and the tactics they fell for which are combined to give them an overall score. 
                     This element also serves as an educational tool, giving in depth analysis, tips, and backgrounds on the various tactics used by these companies. 
                     This project was part of a Capstone course for my Digital Media & Engineering Minor, and was featured by Louisiana State University for its creativity and functionality. 
                     The tech stack includes React w/ Next.js, Node.js, Firebase, and Figma (for design work).The game is hosted online for anyone to experience, 
                     so feel free to check it out yourself!
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-row gap-[7%] md:gap-[1.25rem] lg:gap-[1rem] xl:gap-[10%] mx-[1.6rem] my-[1rem] justify-center items-center font-semibold">
                      <Link to="https://github.com/CatherineRodriquez04/BRIDGE" className="projects-primary-button primary-text-color rounded-2xl flex items-center justify-center ">
                        GitHub
                      </Link>
                      <Link to="https://bridge-lac.vercel.app/" className="projects-secondary-button secondary-text-color rounded-2xl flex items-center justify-center ">
                        Live Demo
                      </Link>
                    </div>
                  </div>
                  {/* Project Entry 2 */}
                  <div className="projects-entry rounded-xl gradient-bg ">
                    {/* Project Image */}
                    <div className="projects-entry-image">
                        <img src={CSGPreview} alt="CSG Project Image" className="w-full h-full object-cover rounded-xl max-h-[5rem] min-h-[12rem] "/>
                    </div>
                    {/* Project Title */}
                    <div className="projects-entry-title font-bold">
                      CSS Style Guide
                    </div>
                    {/* Project Description */}
                    <div className="projects-entry-description overflow-auto scrollbar-hidden rounded-xl max-h-[8rem] lg:max-h-[8rem] xl:max-h-[8rem] ">
                     The CSG (CSS Style Guide) is my place to store my own custom component library, notes resources, and development techniques. 
                     The goal of the site has shifted over time, expanding to encompass any and all needs of a front end developer. 
                     As a repository of information, it has the capability to store and categorize my components and study notes for future study and reusability. 
                     This also extends into its teaching capability, as it is my aim to make these notes accessible to others, along with the interactive component creation game. 
                     The goal of this game is to present the user with a component ( a box, modal, grid, etc) and have them recreate it within a given time frame. 
                     This method of study (though not in a dedicated game experience) was a major contributor to my progression with essential CSS frameworks like tailwindCSS and Bootstrap. 
                     The site also includes useful developer tools, such as measuring screens comprised of the various web development unit types (px, REM, vw/vh, etc). 
                     This allows for efficient size calculations among various screen sizes and easy measuring of reference images for inspiration. 
                    I hope to see this page become a place for others to learn, grow, and practice the art of web design, just as I did in making it!
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-row gap-[7%] md:gap-[1.25rem] lg:gap-[1rem] xl:gap-[10%] mx-[1.6rem] my-[1rem] justify-center items-center font-semibold">
                      <Link to="https://github.com/Haze-7/css-style-guide" className="projects-primary-button primary-text-color rounded-2xl flex items-center justify-center">
                        Github
                      </Link>
                      <Link to="https://css-style-guide.vercel.app/" className="projects-secondary-button secondary-text-color rounded-2xl flex items-center justify-center ">
                        Live Demo
                      </Link>
                    </div>
                  </div>
                  {/* Project Entry 3 */}
                  <div className="projects-entry col-span-full lg:col-span-1 rounded-xl gradient-bg max-h-[100%] md:max-h-[39rem] lg:max-h-[100%]">
                    {/* Project Image */}
                    <div className="projects-entry-image max-h-[100%] md:max-h-[48%] lg:max-h-[50%]">
                        <img src={SuniPreview} alt="Suni Project Image" className="w-full md:w-[98%] lg:w-full h-full md:h-[97%] lg:h-full object-cover rounded-xl max-h-[5rem] min-h-[12rem] md:max-h-none md:min-h-0 lg:max-h-[5rem] lg:min-h-[12rem] "/>
                    </div>
                    {/* Project Title */}
                    <div className="projects-entry-title font-bold">
                      Suni
                    </div>
                    {/* Project Description */}
                    <div className="projects-entry-description overflow-auto scrollbar-hidden rounded-xl max-h-[9rem] md:max-h-[4%] lg:max-h-[8rem] xl:max-h-[8rem] md:min-h-[24%] lg:min-h-0 ">
                     Suni is a responsive, full stack web application that enables users to share their vacation preferences with our Suni Algorithm 
                     to automatically schedule their itinerary based on budget, weather conditions, and practical time constraints. 
                     This data is represented on an interactive calendar and budget wheel, which dynamically displays weather conditions, 
                     provides access to relavent businesses, and creates a dynamic budget wheel for tracking spending by category.
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-row gap-[7%] md:gap-[1.25rem] lg:gap-[1rem] xl:gap-[10%] mx-[1.6rem] my-[1rem] justify-center items-center font-semibold">
                      <Link to="https://github.com/CSC-3380-Fall-2024/Team-19" className="projects-primary-button primary-text-color rounded-2xl flex items-center justify-center ">
                        Github
                      </Link>
                      <Link to="/" className="projects-secondary-button secondary-text-color rounded-2xl flex items-center justify-center ">
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons (View More, access General Github) */}
              <div className="flex flex-row gap-[2rem] m-[1.5rem] py-[3rem] justify-center items-center font-semibold">
                {/* Link to projects page */}
                <Link to="/projects" className="hero-primary-button primary-text-color rounded-3xl flex items-center justify-center ">
                  View More
                </Link>
                  {/* Link to github home*/}
                <Link to="https://github.com/Haze-7" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
                  Github Home
               </Link>
              </div>
            </div>
          </section>
          {/* Experience Section */}
        <section id="Experience" className="gradient-bg h-auto shadow-lg/50 shadow-gray gradient-link-offset overflow-x-hidden">
          <div className="flex flex-col w-full items-center py-[4rem] pb-[6rem] px-[1.5rem] md:px-[2rem] lg:px-[3rem] gap-[2rem] md:gap-[3rem] lg:gap-[3.5rem] xl:gap-[4rem]">
            {/* Section Title */}
            <div className="gradient-title font-bold text-[3rem] text-center pb-[2rem]">Experience</div>
            {/* Our Lady of the Lake (Right) */}
            <div ref={expOneRef} className={`experience-entry justify-end gap-[1.5rem] sm:gap-[2rem] lg:gap-[2.5rem] xl:gap-[3rem] slide-animate-right ${expOneIsVisible ? 'show' : ''}`}>
              <div className="experience-entry-image">
                <img src={OlolImage} alt="OLOL Image" />
              </div>
              <div className="experience-card flex-1 shadow-lg gradient-bg rounded-2xl">
                <Link to="https://www.fmolhs.org/locations/greater-baton-rouge" className="experience-entry-title font-tungsten text-[2.5rem] text-center xl:text-left">
                  Our Lady of the Lake Health
                </Link>
                <p className="experience-card-description">
                  Developed AI Orchestrator model that organizes, interacts with, and automatically connects users to vendors. 
                  Created integrated GUI for adding new vendors, making project scalable for future acquisitions/partners. 
                  Integrated seamlessly into Microsoft Teams application with adaptive cards & API routing.
                </p>
              </div>
            </div>

            {/* LSU ITS Student Developer (Left) */}
            <div ref={expTwoRef} className={`experience-entry justify-start gap-[1.5rem] sm:gap-[2rem] lg:gap-[2.5rem] xl:gap-[3rem] slide-animate-left ${expTwoIsVisible ? 'show' : ''}`}>
              <div className="experience-card flex-1 shadow-lg gradient-bg rounded-2xl">
                <Link to="https://www.lsu.edu/its/index.php" className="experience-entry-title font-tungsten text-[2.5rem] text-center xl:text-left">
                  LSU ITS Student Developer
                </Link>
                <p className="experience-card-description">
                  Maintain and modernize critical LSU web programs utilized by over 40k staff, students, and licensed contractors.
                  Facilitated migration of LSU database systems from localized mainframe to the Workday platform.
                  Spearheaded UI redesign of 3 prominent web applications in active use by students & departmental staff.
                </p>
              </div>
              <div className="experience-entry-image">
                <img src={LsuIts} alt="LSU ITS Image" />
              </div>
            </div>

            {/* Barber (Temp) (Right)*/}
            <div ref={expThreeRef} className={`experience-entry justify-end gap-[1.5rem] sm:gap-[2rem] lg:gap-[2.5rem] xl:gap-[3rem] slide-animate-right ${expThreeIsVisible ? 'show' : ''}`}>
              <div className="experience-entry-image">
                <img src={BarberImage} alt="Barber Image" />
              </div>
              <div className="experience-card flex-1 shadow-lg gradient-bg rounded-2xl">
                <Link to="/experienceThree" className="experience-entry-title font-tungsten text-[2.5rem] text-center xl:text-left">
                  BARBER
                </Link>
                <p className="experience-card-description">
                  Barber is the all-in-one place for barbers, shop owners, and customers to interact, schedule, and build their business.
                  Barbers can register their profile and create a custom page to attract customers and directly handle scheduling / payment infastructure. Shop owners can also find barbers
                  through this system, hiring and handling rent or % dues directly within the application.
                </p>
              </div>
            </div>
          </div>
        </section>


          {/* Contact Me Section */}
          <section id="Contact-Me" className="bg-sand h-[80rem] lg:h-[65rem]">
            <div className="text-3rem">
              {/* Projects Title */}
              <div className="flex justify-center">
                <div className="projects-title font-bold pt-[5rem] sm:pt-[6rem]">
                 Contact Me
               </div>
              </div>
              {/* Content Container (incl email input / list) */}
              {/* make giant grid (med, sm, lg box) */}
              <div className="pt-[5vh] flex flex-col  lg:flex-row gap-[2rem] lg:gap-[4rem] px-[3rem]">
                {/* Scrolling Contact Sources Box */}
                <div className="flex h-[10rem] lg:h-[42rem] lg:w-[30%] gradient-bg rounded-4xl items-center justify-center">
                  {/*Create grid / flexbox for each to scroll (vert in full, horiz in small) */}
                  Scroll Box
                </div>
                {/* Or Box */}
                <div className="flex h-[5rem] lg:h-[38rem] mt-[2rem] lg:w-[5%] bg-white rounded-xl">
                  OR
                </div>
                <form className="relative h-[40.2rem] lg:h-[42rem] lg:w-[55%] flex flex-col text-ivory gradient-bg rounded-2xl px-[3rem]">
                  {/* Direct Message Title */}
                  <div className="contact-me-form-title">
                    Leave a Message
                  </div>
                  {/* Flex Wrapper grid-cols-2 lg:grid-cols-3*/}
                  <div className="flex flex-col gap-[3.3rem] justify-center">
                    {/* Input forms */}
                    {/* Name input  */}
                    <div className="">
                      <label className="text-2xl font-bold contact-input-label" for="name">Name</label>
                        <input
                        type="text"
                        name="name"
                        className="text-xl text-slate rounded-2xl px-2.5 contact-me-input" //set width of inputs
                        />
                    </div>
                    {/* Email input */}
                    <div>
                      <label className="text-2xl font-bold contact-input-label" for="email">Email</label>
                        <input
                        type="text"
                        name="email"
                        className="text-xl text-slate rounded-2xl px-2.5 contact-me-input"
                        />
                    </div>
                    {/* Message Input */}
                    <div>
                      <label className="text-2xl font-bold contact-input-label" for="message">Message</label>
                      <textarea
                        name="message"
                        // value={formData.html_code}
                        // onChange={handleChange}
                        className="contact-me-textarea h-40 lg:h-[20vh] text-md font-mono text-slate rounded-2xl p-[0.7rem] resize-y max-h-[20vh]"
                        placeholder="Type your request here"
                      />
                    </div>

                  </div>
                    <div className="flex flex-row mx-[1.6rem] justify-center items-center font-semibold my-[1.5rem]">
                      <Link to="/" className="contact-me-submit-button secondary-text-color rounded-2xl flex items-center justify-center w-[10rem]"> 
                        Send
                      </Link>
                    </div>
                </form>
              {/* Submit Button */}
              </div>
            </div>
          </section>
        </div>
      </>
    )
}

export default Home;