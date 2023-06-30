import imageP1 from "../assets/searchterm.png";
import imageP2 from "../assets/BookStore.png";
import imageP3 from "../assets/movielist.png";
import imageP4 from "../assets/fetchUsers.png";
import imageP5 from "../assets/carcheck.png";
import ProjectDisplay from "./ProjectDisplay";
// import classNames from "classnames";
const Experience = () => {
  // const hoverClass = classNames(" rounded-xl hover:");
  return (
    <div className="bg-black rounded-3xl">
      <ProjectDisplay>
        <div className="h-[100%] text-gray-300 sm:m-[2%] sm:py-[2%]">
          <section>
            <div className="flex justify-between sm:m-[2%] items-center">
              <div className="w-[25%]">
                <h3 className="sm:mb-5">
                  C A S E - A P P L I C A T I O N - 0 1
                </h3>
                <p className="text-left sm:pl-3 ">
                  SKILL PRACTICE:UnsplashApi, useState, communication between
                  parent and child, some CSS configuration.
                </p>
              </div>
              <div className="sm:w-[70%]">
                <img className="rounded-xl" src={imageP1} alt="searchterm" />
              </div>
            </div>
          </section>
          <section>
            <div className="flex justify-between sm:m-[2%] items-center">
              <div className="sm:w-[70%]">
                <img className="rounded-xl" src={imageP2} alt="bookstore" />
              </div>
              <div className="w-[25%]">
                <h3 className="sm:mb-5">
                  C A S E - A P P L I C A T I O N - 0 2
                </h3>
                <p className="text-left sm:pl-3">
                  SKILL PRACTICE:useContext, custom hook, react-icon, restApi,
                  Database of JSON, Lorem Picsum library ....
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="flex justify-between sm:m-[2%] items-center">
              <div className="w-[25%]">
                <h3 className="sm:mb-5">
                  C A S E - A P P L I C A T I O N - 0 3
                </h3>
                <p className="text-left sm:pl-3">
                  SKILL PRACTICE:useReducer, createSlice, useDispatch,
                  useSelector, createAction...{" "}
                </p>
              </div>
              <div className="sm:w-[70%]">
                <img className="rounded-xl" src={imageP3} alt="movielist" />
              </div>
            </div>
          </section>
          <section>
            <div className="flex justify-between sm:m-[2%] items-center">
              <div className="sm:w-[70%]">
                <img className="rounded-xl" src={imageP4} alt="fetchusers" />
              </div>
              <div className="w-[25%]">
                <h3 className="sm:mb-5">
                  C A S E - A P P L I C A T I O N - 0 4
                </h3>
                <p className="text-left sm:pl-3">
                  SKILL PRACTICE:useEffect, useThunk, React-redux,
                  @reduxjs/toolkit, UnsplashApi, Postman...
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="flex justify-between sm:m-[2%] items-center">
              <div className="w-[25%]">
                <h3 className="sm:mb-5">
                  C A S E - A P P L I C A T I O N - 0 5
                </h3>
                <p className="text-left sm:pl-3">
                  SKILL PRACTICE:React-redux, fuzzy query, method of array,
                  custom UI card ...
                </p>
              </div>
              <div className="sm:w-[70%]">
                <img className="rounded-xl" src={imageP5} alt="carcheck" />
              </div>
            </div>
          </section>
        </div>
      </ProjectDisplay>
    </div>
  );
};

export default Experience;
