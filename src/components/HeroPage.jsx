import tablet from "../assets/tablet.png";
import VideoInput from "./VideoInput";
import TypewriterComponent from "typewriter-effect";

const HeroPage = () => {
  return (
    <>
      <div className="flex justify-around items-center p-5">
        <h3 className="lg:text-4xl text-white m-8">
          Video{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
            Ink
          </span>
        </h3>
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-center px-11">
        <div className="typewriter-container">
          <h1 className="flex lg:text-7xl md:text-6xl sm:text-9xl text-white">
            Turn any video into a writing
          </h1>
          <h1 className="text-transparent lg:text-7xl md:text-6xl sm:text-9xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <TypewriterComponent
              options={{
                strings: ["Springboard", "Sketchbook", "Scribble"],

                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>

        <img className="flex  tablet-image" src={tablet} alt="" />
      </div>

      <div>
        <VideoInput />
      </div>
    </>
  );
};

export default HeroPage;
