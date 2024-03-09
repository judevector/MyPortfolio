import { HiArrowNarrowRight } from "react-icons/hi";
// bg-[#537FE7]
const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-700">Hello 👋, my name is</p>
        <h1 className=" text-pink-700 text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Jude Ndubuisi
        </h1>
        <h4 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a passionate Backend Engineer and Blockchain Enthusiast.
        </h4>
        {/* <p className="py-4 max-w-[700px] text-[#8892b0] ">
          I'm a Backend Engineer and Blockchain Enthusiast with a solid foundation in languages like
          JavaScript, Python, and frameworks such as Node.js, FastAPI, and Flask, I excel at
          crafting robust and scalable backend solutions. Leveraging my expertise in database
          management and API development, I thrive on building efficient and reliable web
          applications that power seamless user experiences.
        </p> */}
        <div>
          <a href="https://github.com/judevector" target="_blank" rel="noreferrer">
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
              View Work
              <span className="group-hover:rotate-90 duration-300 ">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
