import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}
const ProjectDisplay = ({ children }: ChildrenProps) => {
  return (
    <div className={`rounded-3xl shadow-lg min-w-[50%] min-h-[40%] bg-[url('./src/assets/background-black.jpeg')] backgroundImage`}>
      {children}
    </div>
  );
};

export default ProjectDisplay;
