
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";

import Experience from "../components/Experience";

const ExperiencePage = () => {
  return (
    <div>
      <Experience />
      <ProjectList />
     
      <Footer showProfile={true} />
    </div>
  );
};

export default ExperiencePage;
