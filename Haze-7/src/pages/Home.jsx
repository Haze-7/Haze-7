import Navbar from "../components/Navbar.jsx"

function Home() {
    return (
      <>
        <div className=" w-full">
            {/* Primary  */}
          <section className="bg-black-sand h-[80rem] flex justify-center gap-[5rem]">
            {/* Hero Section */}
            <div className="flex lg:flex-row flex-col justify-center items-center gap-[3rem] lg:gap-28 h-auto lg:h-[95vh] pt-[10rem] lg:pt-0">
              {/* Hero Name / Intro */}
                <div className="hero-text">
                  <p className="text-[1.7rem] text-whiterock">
                    Hello, I'm
                  </p>
                  <h1 className="text-[4rem]">
                    Hayes Chiasson
                  </h1>
                  <p className="text-[2rem] text-akaroa">
                    Fullstack Developer
                  </p>
                </div>              
                {/* Professional Photo */}
                <div className="hero-picture">
                  <img src="./src/assets/haze-profile-pic.png" className=""></img>
                </div>
            </div>
          </section>
          <section className="about-bg h-[40rem] shadow-lg/50 shadow-gray">
            
          </section>
          <section className="bg-black-sand h-[80rem]">
            
          </section>
        </div>
      </>
    )
}

export default Home;