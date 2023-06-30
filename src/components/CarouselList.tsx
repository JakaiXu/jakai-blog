import Card from "./UI/Card";
import DemoCarousel from "./UI/Carousel";
import classNames from "classnames";
import { Link } from "react-router-dom";
const CarouselList = () => {
  const hover = classNames(
    "hover:text-orange-500 hover:underline hover:decoration-orange-500 hover:cursor-pointer text-gray-400 sm:text-6xl leading-normal"
  );
  return (
    <Card>
      <div className="">
        <h2 className="text-gray-500 pt-[8%] pb-[4%]">
          W H A T I' M D O I N G
        </h2>
        <h4 className={hover}>
          <Link to="experience">DIGITAL WEB DESIGN</Link>
        </h4>
        <h4 className={hover}>
          <Link to="experience">OFFICIAL WEB DESIGN</Link>
        </h4>
        <h4 className={hover}>
          <Link to="experience">COMMERCIAL PROJECTS</Link>
        </h4>
        <h4 className={`${hover} pb-[2%]`}>
          <Link to="experience">PERSONAL BOLG SHOW</Link>
        </h4>
      </div>
      <div className="flex justify-between px-10 pb-6 items-center">
        <h4 className="text-gray-400">S E L E C T E D - P R O J E C T</h4>
        {/* <div className="flex">
          <i className="text-gray-500 text-4xl hover:text-white">
            {" "}
            <IoIosArrowDropleft />
          </i>
          <i className=" text-gray-500 text-4xl hover:text-white">
            <IoIosArrowDropright />
          </i>
        </div> */}
      </div>
      <DemoCarousel />
    </Card>
  );
};

export default CarouselList;
