
import {  NavLink } from "react-router-dom";
import jakai from "../assets/jakai.png";
const Header = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-evenly font-bold text-gray-700 items-center">
        <i className="hover:text-orange-600 hover:underline sm:text-xl mx-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500 underline" : ""
            }
          >
            HOME
          </NavLink>
        </i>
        <i className="hover:text-orange-600 hover:underline sm:text-xl mx-1">
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "text-orange-500 underline" : ""
            }
          >
            ABOUT
          </NavLink>
        </i>
        <>
          <img src={jakai} alt="jakai" className="w-16 rounded-[50%]" />
        </>
        <i className="hover:text-orange-600 hover:underline sm:text-xl mx-1">
          <NavLink
            to="experience"
            className={({ isActive }) =>
              isActive ? "text-orange-500 underline" : ""
            }
          >
            EXPERIENCE
          </NavLink>
        </i>
        <i className="hover:text-orange-600 hover:underline sm:text-xl mx-1">
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "text-orange-500 underline" : ""
            }
          >
            CONTACT
          </NavLink>
        </i>
      </div>
    </div>
  );
};

export default Header;
