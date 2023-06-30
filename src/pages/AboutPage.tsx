
import Footer from "../components/Footer";
import About from "../components/About";
import CarouselList from "../components/CarouselList";
import AboutList from "../components/AboutList";

const AboutPage = () => {
  return (
    <div>
      <About />
      <CarouselList />
      <AboutList />
      <Footer showProfile={true} />
    </div>
  );
};

export default AboutPage;
