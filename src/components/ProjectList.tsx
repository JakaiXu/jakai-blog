
import ProjectItem from "./ProjectItem";
const projects = [
  {
    id: "1",
    title: "F A C E B O O K",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi nobis commodi! Distinctio molestiae a nulla laudantium porro amet consectetur voluptates esse architecto qui, deserunt consequatur unde! Mollitia, magni praesentium.",
    order: "0 1",
  },
  {
    id: "2",
    title: "I N S T A G R A M",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi nobis commodi! Distinctio molestiae a nulla laudantium porro amet consectetur voluptates esse architecto qui, deserunt consequatur unde! Mollitia, magni praesentium.",
    order: "0 2",
  },
  {
    id: "3",
    title: "L I N K E D I N",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi nobis commodi! Distinctio molestiae a nulla laudantium porro amet consectetur voluptates esse architecto qui, deserunt consequatur unde! Mollitia, magni praesentium.",
    order: "0 3",
  },
];
const ProjectList = () => {
  return (
    <div className="py-10 text-left">
      <h3 className="text-xl text-gray-500 py-5">P A S T C L I E N T </h3>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.title}
          content={project.content}
          order={project.order}
        />
      ))}
    </div>
  );
};

export default ProjectList;
