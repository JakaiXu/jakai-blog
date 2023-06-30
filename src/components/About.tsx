import Profile from "./Profile";

const About = () => {
  const content = " I'm a Front-End Web developer, The skills of proficiency are: HTML, XML, CSS, JavaScript, React, NodeJS, MongoDB, Mongoose, TailWindCSS, Bulma, SemanticUI, ExpressJS ..."
  const renderedContent = content.toUpperCase()
  return (
    <div className="flex justify-between">
      <div className="w-[30%]">
        <Profile />
      </div>
      <div className="w-[70%] rounded-lg shadow-xl mb-5 mr-5">
        <p className="text-xl text-left p-10 leading-loose hover:text-orange-500 hover:font-bold">
         {renderedContent}
        </p>
      </div>
    </div>
  );
};

export default About;
