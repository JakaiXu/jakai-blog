
import AboutItem from "./AboutItem";

const AboutList = () => {
  const aboutData = [
    {
      id: "1",
      timeLine: "2 0 2 8 - 2 0 3 0",
      title: "M A N A G E R",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi nobis commodi! Distinctio molestiae a nulla laudantium porro amet consectetur voluptates esse architecto qui, deserunt consequatur unde! Mollitia, magni praesentium.",
    },
    {
      id: "2",
      timeLine: "2 0 2 5 - 2 0 2 7",
      title: "S E N I O R - D E V E L O P E R",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi nobis commodi! Distinctio molestiae a nulla laudantium porro amet consectetur voluptates esse architecto qui, deserunt consequatur unde! Mollitia, magni praesentium.",
    },
    {
      id: "3",
      timeLine: "2 0 2 3 - 2 0 2 4",
      title: "J U N I O R - D E V E L O P E R",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi nobis commodi! Distinctio molestiae a nulla laudantium porro amet consectetur voluptates esse architecto qui, deserunt consequatur unde! Mollitia, magni praesentium.",
    },
    {
      id: "4",
      timeLine: "2 0 2 2 - P R E S E N T",
      title: "I N T E N S H I P",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi nobis commodi! Distinctio molestiae a nulla laudantium porro amet consectetur voluptates esse architecto qui, deserunt consequatur unde! Mollitia, magni praesentium.",
    },
  ];
  return (
    <div className="py-10 text-left flex justify-between">
      <div className="w-[40%]">
        <h3 className="text-xl text-gray-500 py-5">E X P E R I E N C E</h3>
      </div>
      <div className="w-[60%]">
        {aboutData.map((item) => (
          <AboutItem
            key={item.id}
            title={item.title}
            timeLine={item.timeLine}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutList;
