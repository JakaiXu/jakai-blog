import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageP1 from '../../assets/p1.png';
import imageP2 from '../../assets/p2.png';
import imageP3 from '../../assets/p3.png';
import imageP4 from '../../assets/p4.png';
const DemoCarousel = () => {
  return (
    <Carousel
      autoPlay
      centerMode
      infiniteLoop
      stopOnHover
      showArrows
      thumbWidth={40}
      width="100%"
      onClickThumb={(index, item) => {
        console.log(index, item);
      }}
    >
      <div className="">
        <img src={imageP1} alt="C1" />
        <p className="legend">Digital Web Design</p>
      </div>
      <div className="">
        <img src={imageP2} alt="C2" />
        <p className="legend">Offical Web Design</p>
      </div>
      <div className="">
        <img src={imageP3} alt="C3" />
        <p className="legend">Commerial Projects</p>
      </div>
      <div className="">
        <img src={imageP4} alt="C3" />
        <p className="legend">Personal Blog Show</p>
      </div>
    </Carousel>
  );
};
export default DemoCarousel;
