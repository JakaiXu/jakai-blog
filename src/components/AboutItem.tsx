import React from "react";
interface AboutItemProps {
  title: string;
  timeLine: string;
  content: string;
}
const AboutItem: React.FC<AboutItemProps> = ({ title, timeLine, content }) => {
  return (
    <div className="text-gray-500">
      <div className="flex justify-between mt-5 mb-3">
        <div className="font-bold">{timeLine}</div>
        <div className="font-bold pr-5">{title}</div>
      </div>
      <p className="mb-5">{content}</p>
      <hr className="border"/>
    </div>
  );
};

export default AboutItem;
