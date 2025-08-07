import Navbar from "../components/Navbar.jsx"

function Home() {
    return (
      <>
        <div className=" text-white w-screen flex flex-col justify-between">
            {/* Primary  */}
            
          <section className="bg-black-sand h-[80rem]">
            {/* Hero Section */}
            <div className="flex flex-col xl:flex-row pt-[10rem] h-[80vh] w-[80vw] mx-auto">
              {/* Hero Name / Intro */}
              <div className="text-center my-auto w-[50vw]">
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
                <div className="flex mt-[3rem] ">
                  <img src="./src/assets/haze-profile-pic.png" className="absolute h-[550px] w-[550px]"></img>
                </div>
            </div>
          </section>
          <section className="bg-akaroa bg-black-a h-[35rem] shadow-lg/50 shadow-gray">
            
          </section>
          <section className="bg-black-sand h-[80rem]">
            
          </section>
        </div>
      </>
    )
}

export default Home;