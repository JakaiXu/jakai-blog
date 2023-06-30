
import Home from "../components/Home";

import Profile from "../components/Profile";
import Footer from "../components/Footer";
import SelfIntro from "../components/SelfIntro";
import CarouselList from "../components/CarouselList";
import ProjectList from "../components/ProjectList";
const HomePage = () => {
  return (
    <div>
      <Home />
      <Profile />
      <SelfIntro />
      <CarouselList />
      <ProjectList />
      <Footer showProfile={true} />
    </div>
  );
};

export default HomePage;
