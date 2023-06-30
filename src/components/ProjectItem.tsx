
interface ProjectProps {
  title: string;
  content: string;
  order: string;
  id: string;
}
const ProjectItem = ({ title, content, order }: ProjectProps) => {
  return (
    <div>
      <div className="flex justify-between text-gray-500 py-8">
        <div className="w-[50%] text-2xl">{order}</div>
        <div className="w-[50%]">
          <h2 className="text-left smL:text-3xl  pb-10">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
      <hr className="border-gray-300" />
    </div>
  );
};

export default ProjectItem;
