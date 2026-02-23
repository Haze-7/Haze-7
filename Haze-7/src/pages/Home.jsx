  import InfiniteScrollAnimation from "../components/InfiniteScrollAnimation.jsx"
import {Link, useLocation} from "react-router-dom";

import ProfilePic from "/images/haze-profile-pic.png" 

import {onClick, useRef, useEffect, useState,} from 'react';
import {useInView} from "react-intersection-observer";

import emailjs from "@emailjs/browser";

import HLogo from "/H-logo.svg";

import DeadmanPreview from "/images/deadman-preview.svg";
import CSGPreview from "/images/csg-preview.svg";
import SuniPreview from "/images/suni-preview.svg"; 
import AboutMeImage from "/images/haze-about-me-pic.jpg";

import SuniProject from "/images/suni.svg" 
import DeadmanProject from "/images/deadman.svg" 
import CSGProject from "/images/csg.svg" 

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

    // Sending state to prevent double submit
    const [sending, setSending] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();

      if (sending) return;

      // Grab values from Inputs
      // Name Input
      const name = document.getElementById("name-input").value.trim();

      // Email Input
      const email = document.getElementById("email-input").value.trim();
      // Message Input
      const message = document.getElementById("message-input").value.trim();

      //Name Validation
      if (name === "" || name.length < 2) {
        alert("Please enter a valid name to send a message.")
        return;
      }
      // Email Validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        alert("Please enter valid email address.");
        return;
      }

      // Message Validation
      if (message === "" || message.length < 2) {
        alert("Please enter a message to send.");
        return;
      }

      // setSending(true);

      // Data sent to EmailJS template
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          alert("Message sent!");
            // Clear inputs
            document.getElementById("name-input").value = "";
            document.getElementById("email-input").value = "";
            document.getElementById("message-input").value = "";
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message.");
        })
        .finally(() => {
          setSending(false);
        });
    };

    return (
      <>
      {/* var(--primary- text-color) */}

        <div className="w-full">
          {/* Hero Section */}
          <section id="Hero" className="bg-sand h-[65rem] flex justify-center">
            <div className="hero-content-container layout-smooth">
              {/* Hero Name / Intro */}
                <div className=" order-2 lg:order-1 ">
                  <p className="lgl::pt-[2.7rem] sm:pt-0 text-[1.90rem] hero-secondary-text font-semibold">
                    Hello, I'm
                  </p>
                  <h1 className="text-[4rem] font-bold hero-primary-text leading-tight lg:leading-normal">
                    Hayes Chiasson
                  </h1>
                  <p className="text-[2rem] font-semibold hero-secondary-text">
                    Fullstack Developer
                  </p>
                  <div className="mt-[1.5rem] flex flex-row gap-[clamp(2rem,4vw,3rem)] justify-center items-center font-semibold">
                    <button onClick={() => window.open('/hayes-resume.pdf', '_blank')} className=" hero-primary-button primary-text-color rounded-3xl flex items-center justify-center ">
                      Download CV
                    </button>
                    <a href="#Contact-Me" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
                      Contact Info
                    </a>
                  </div>
                </div>              
                {/* Professional Photo */}
                <div className="hero-picture order-1 lg:order-2 ">
                  <img src={ProfilePic} alt="Haze Profile Picture" className=""></img>
                </div>
            </div>
          </section>

          {/* About Me Section */}
          <section id="About-Me" className="gradient-bg h-[] lg:h-[50rem] shadow-lg/50 shadow-gray gradient-link-offset">
            <div className="about-me-container">
              {/* About Title Container */}
              <div className="flex justify-center">
                <div className="gradient-title font-bold pt-[3.5rem]">
                  About Me
                </div>
              </div>
              {/* About Me Content Container*/}
              <div className="about-me-content-container">
                {/* About Me Image/ Box */}
                {/* Temp remove background for image fit, future image stretch properly at wide view widths (rectangle):  bg-mineshaft (is reason for lack of rounded edges at large*/}
                <div className="about-me-img-container font-semibold">
                  <img src={AboutMeImage} alt="About Me Image/Box" className="rounded-xl object-contain"></img>  {/* Will need to replace with more responsive image/ better scale */}
                </div>
                  {/* About Me Text / Description */}
                  <div className="about-me-description-container"> {/*  Missing Height*/}
                    <p className="about-me-description scrollbar-hidden">
                    I'm a Senior at Louisiana State University pursuing a Bachelors Degree in Software Engineering with a Minor in Digital Media Arts & Engineering. 
                    I thrive on taking innovative ideas from concept to execution through software development, and see myself working on hobby projects well into my career.
                  </p>
                    <div className="mt-[1.5rem] flex flex-row gap-[7%] lg:gap-[3rem] mb-[3rem] lg:mb-0 justify-center items-center font-semibold">
                      <Link to="/UnderConstruction" className=" hero-primary-button primary-text-color rounded-3xl flex items-center justify-center ">
                        Images
                      </Link>
                      <Link to="/UnderConstruction" className="hero-secondary-button secondary-text-color rounded-3xl flex items-center justify-center ">
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
                <div className="projects-title font-bold">
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
                  <div className=" relative z-10">
                  <img src={DeadmanProject} alt="BG Img" className="absolute inset-0 w-full h-full object-cover -z-10 rounded-4xl"></img>
                  <div className="dropdown-projects-display-entry-blur"></div> 
                      <Link to="/Deadman" className="projects-gradient-entry-title font-tungsten transition-none absolute mt-[5%] mx-[7%] text-center">
                        Deadman's Hand
                      </Link>
                      {/* <img src={DeadmanProject} alt="BG Img" className="inset-0 mt-[10%] -z-10 rounded-4xl"></img> */}
                      {/*Blur overlay */}
                      {/* <div className="dropdown-projects-display-entry-blur"></div>  */}
                      <div className="text-white text-2xl mt-[50%] w-[70%]">
                        Deadman's Hand Project Description Short\
                        Deadman's hnad Projects
                      </div>
                      <div className="flex flex-row w-full mt-[10%] gap-[10%] justify-center text-2xl">
                          <button className="flex bg-[var(--secondary-button-color)] text-[var(--secondary-button-text-color)] w-[40%] h-auto p-[1rem] rounded-3xl justify-center cursor-pointer hover:bg-[var(--primary-button-color)] hover:text-[var(--primary-button-text-color)]">
                              Calendar
                          </button>
                          <button className="flex bg-[var(--secondary-button-color)] text-[var(--secondary-button-text-color)] w-[40%] h-auto p-[1rem] rounded-3xl justify-center cursor-pointer hover:bg-[var(--primary-button-color)] hover:text-[var(--primary-button-text-color)]">
                              Budget
                          </button>
                      </div>
                  </div>
                  {/*  */}
                  <div className="w-full h-[30rem] rounded-4xl text-2xl relative z-10 border-4 border-gold">
                    <img src={DeadmanProject} alt="BG Img" className="absolute inset-0 w-full h-full object-cover -z-10 rounded-3xl"></img>
                    
                    <div className="text-4xl mt-[7%] flex justify-center font-bold">
                      Deadman's Hand 
                    </div>
                    <div className="mt-[53%] ml-[5%]">
                      Test Paragraph for explanation
                      Test Paragraph for explanation
                      Test Paragraph for explanation
                    </div>
                    <div className="flex flex-row w-full mt-[5%] gap-[10%] justify-center text-2xl">
                        <button className="flex bg-[var(--secondary-button-color)] text-[var(--secondary-button-text-color)] w-[40%] h-auto p-[1rem] rounded-3xl justify-center cursor-pointer hover:bg-[var(--primary-button-color)] hover:text-[var(--primary-button-text-color)]">
                            Calendar
                        </button>
                        <button className="flex bg-[var(--secondary-button-color)] text-[var(--secondary-button-text-color)] w-[40%] h-auto p-[1rem] rounded-3xl justify-center cursor-pointer hover:bg-[var(--primary-button-color)] hover:text-[var(--primary-button-text-color)]">
                            Budget
                        </button>
                    </div>                        
                  </div>
                  <div className="w-full h-[30rem] gradient-bg rounded-4xl shadow-lg projects-gradient-entry">
                    <Link to="/Deadman" className="projects-gradient-entry-title font-tungsten transition-none absolute mt-[1%] ">
                      Deadman's Hand
                    </Link>
                    {/* <img src={DeadmanProject} alt="BG Img" className="inset-0 rounded-t-xl w-full h-[50%] object-cover"></img> */}
                    <img src={DeadmanPreview} alt="Deadman's Project Image" className="w-full h-[50%] object-cover rounded-t-xl max-h-[20rem] min-h-[12rem] "/>
                    <div className="text-xl flex mx-[5%]">
                      The CSG (CSS Style Guide) is my place to store my own custom component library, notes resources, and development techniques.
                    </div>
                    <div className="rounded-b-xl h-[20%] w-full text-xl">
                      <div className="flex flex-row gap-[7%] md:gap-[1.25rem] lg:gap-[1rem] xl:gap-[10%] mx-[1.6rem] my-[1rem] justify-center items-center font-semibold">
                        <Link to="https://github.com/CatherineRodriquez04/BRIDGE" className="projects-primary-button primary-text-color rounded-2xl flex items-center justify-center ">
                          GitHub
                        </Link>
                        <Link to="https://bridge-lac.vercel.app/" className="projects-secondary-button secondary-text-color rounded-2xl flex items-center justify-center ">
                          Live Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons (View More, access General Github) */}
              <div className="flex flex-row gap-[2rem] m-[1.5rem] py-[3rem] justify-center items-center font-semibold">
                {/* Link to projects page */}
                <Link to="/UnderConstruction" className="hero-primary-button primary-text-color rounded-3xl flex items-center justify-center ">
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
            <div className="gradient-title font-bold experience-title">Experience</div>
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
                <Link to="/UnderConstruction" className="experience-entry-title font-tungsten text-[2.5rem] text-center xl:text-left">
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
          <section id="Contact-Me" className="bg-sand h-[65rem] lg:h-[70rem]">
            <div className="text-3rem">
              {/* Projects Title */}
              <div className="flex justify-center">
                <div className="projects-title font-bold">
                 Contact Me
               </div>
              </div>
              {/* Content Container (incl email input / list) */}
              <div className="contact-me-content-container">
                {/* Scrolling Contact Sources Box */}
                <div className="flex h-[7rem] lg:h-[42rem] lg:w-[35%] rounded-4xl ">
                  {/*Create grid / flexbox for each to scroll (vert in full, horiz in small) */}
                  <InfiniteScrollAnimation />
                </div>
                {/* Or Container*/}
                <div className="flex flex-row lg:flex-col h-[3rem] lg:h-[38rem] lg:mt-[2rem] lg:w-[5%] p-[0.5rem] items-center justify-center">
                  {/* Right Box */}
                  <div className="gradient-bg h-[1rem] lg:h-[15rem] w-[45%] lg:w-[17px] rounded-md ">
                  </div>
                  {/* Or Text */}
                  <div className="lg:h-[5rem] contact-me-text flex-1">
                    OR
                  </div>
                  {/* Left Box */}
                  <div className="gradient-bg h-[1rem] lg:h-[15rem] w-[45%] lg:w-[17px] rounded-md ">
                  </div>
                </div>
                {/*Leave a Message Form */}
                <form onSubmit={handleSubmit} className="relative h-auto lg:w-[55%] flex flex-col text-ivory gradient-bg rounded-4xl ">
                  {/* Direct Message Title */}
                  <div className="contact-me-form-title pt-[1rem] lg:pt-[1.8vh]">
                    Leave a Message
                  </div>
                  {/* Flex Wrapper*/}
                  <div className="flex-row lg:flex-col pt-[0.75rem] lg:pt-[0.5rem] contact-me-form-flex-wrapper">
                    {/* Input forms */}
                    {/* Name input  */}
                    <div className="contact-me-input-container flex-col sm:flex-row lg:flex-col gap-[5%] lg:gap-[3.3rem]">
                      <div className="w-full">
                        <label className="text-2xl font-bold contact-input-label" htmlFor="name">Name</label>
                          <input
                          type="text"
                          name="name"
                          id="name-input"
                          className="text-xl text-slate rounded-2xl px-2.5 contact-me-input h-[70%] lg:h-[80%]" //set width of inputs
                          />
                      </div>
                      {/* Email input */}
                      <div className="w-full">
                        <label className="text-2xl font-bold contact-input-label pt-[1vh] sm:pt-0" htmlFor="email">Email</label>
                          <input
                          type="text"
                          name="email"
                          id="email-input"
                          className="text-xl text-slate rounded-2xl px-2.5 contact-me-input h-[70%] lg:h-[80%]"
                          />
                      </div>
                    </div>
                    {/* Message Input */}
                    <div className="w-full">
                      <label className="text-2xl font-bold contact-input-label pb-[0.25rem] lg:pb-[0.5rem]" htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message-input"
                        // value={formData.html_code}
                        // onChange={handleChange}
                        className="contact-me-textarea h-[12vh] lg:h-[20vh] text-md font-mono text-slate rounded-2xl p-[0.7rem] resize-y max-h-[20vh]"
                        placeholder="Type your message here"
                      />
                    </div>

                  </div>
                    <div className="contact-me-submit-button-container font-semibold my-[1.5rem]">
                      <button
                       type="submit"
                       disabled={sending}
                       className="contact-me-submit-button secondary-text-color rounded-2xl flex items-center justify-center w-[10rem]"
                      > 
                        {sending ? "Sending..." : "Send"}
                      </button>
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