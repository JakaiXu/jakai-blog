import { useState } from "react";
import { Button as ContactButton } from "./UI/Button";
import { useNavigate, Link } from "react-router-dom";
import RightArrow from "./UI/RightArrow";
import ProjectDisplay from "./ProjectDisplay";
import Card from "./UI/Card";
import imageA2 from "../assets/A2.png";
import imageA1 from "../assets/A1.png";
const Home = () => {
  const [isCHover, setIsCHover] = useState<boolean>(false);
  const [isDHover, setIsDHover] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <Card>
      <h1 className="text-gray-400 sm:text-[400%] pt-[8%] pb-[4%] leading-normal">
        Front End Web Developer Based in <br /> Sydney Australia
      </h1>
      <p className="text-gray-400 px-[15%] pb-10 leading-loose ">
        I'm a Front-End Web developer, The skills of proficiency are: HTML, XML,
        CSS, JavaScript, React, NodeJS, MongoDB,Mongoose, TailWindCSS, Bulma,
        SemanticUI, ExpressJS ...
      </p>
      <div className="mb-10 relative flex justify-center font-bold">
        <ContactButton
          fontSize="120%"
          color="white"
          border="none"
          radius="30px"
          backgroundColor="Orange"
          backgroundImage="linear-gradient(to bottom, rgba(255,145,100,0),rgba(250,95,30,1))"
          width="12rem"
          height="3rem"
          onClick={() => navigate("contact")}
        >
          Contact Me <RightArrow />
        </ContactButton>
      </div>
      <div className="flex justify-evenly my-10">
        <div className="relative items-center">
          <ProjectDisplay>
            <div className="flex items-center justify-center">
              {" "}
              <img
                src={imageA2}
                alt="GAME"
                className="rounded-xl"
              ></img>
            </div>

            <div className="text-gray-400 font-bold  absolute bottom-0  w-full">
              <h2 className="absolute left-10 bottom-5 sm:text-2xl hover:text-orange-400 hover:underline hover:decoration-orange-500">
                <Link to="experience">Commercial Webs</Link>
              </h2>
              {!isCHover && (
                <i
                  className="absolute right-0 bottom-5"
                  onMouseEnter={() => {
                    setIsCHover(true);
                  }}
                >
                  <Link to="experience">
                    {" "}
                    <RightArrow />
                  </Link>
                </i>
              )}
              {isCHover && (
                <i
                  className="absolute right-5 bottom-5 "
                  onMouseLeave={() => {
                    setIsCHover(false);
                  }}
                >
                  <div className="flex w-[150px] h-[30px] border rounded-[50px] bg-white items-center justify-end cursor-pointer">
                    <i className="absolute left-5">
                      <RightArrow />
                    </i>
                    <p className="text-orange-500 absolute left-10">
                      Learn More
                    </p>
                  </div>
                </i>
              )}
            </div>
          </ProjectDisplay>
        </div>
        <div className="relative items-center">
          <ProjectDisplay>
            <div className="flex justify-center">
              {" "}
              <img
                src={imageA1}
                alt="Chart"
                className="rounded-xl"
              ></img>
            </div>

            <div className="text-gray-400 font-bold  absolute bottom-0  w-full">
              <h2 className="absolute left-10 bottom-5 sm:text-2xl hover:text-orange-400 hover:underline hover:decoration-orange-500">
                <Link to="experience">Digital Webs</Link>
              </h2>
              {!isDHover && (
                <i
                  className="absolute right-0 bottom-5"
                  onMouseEnter={() => {
                    setIsDHover(true);
                  }}
                >
                  <Link to="experience">
                    {" "}
                    <RightArrow />
                  </Link>
                </i>
              )}
              {isDHover && (
                <i
                  className="absolute right-5 bottom-5 "
                  onMouseLeave={() => {
                    setIsDHover(false);
                  }}
                >
                  <div className="flex w-[150px] h-[30px] border rounded-[50px] bg-white items-center justify-end cursor-pointer">
                    <i className="absolute left-5">
                      <RightArrow />
                    </i>
                    <p className="text-orange-500 absolute left-10">
                      Learn More
                    </p>
                  </div>
                </i>
              )}
            </div>
          </ProjectDisplay>
        </div>
      </div>
    </Card>
  );
};

export default Home;
