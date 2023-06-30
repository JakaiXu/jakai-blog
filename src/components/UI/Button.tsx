import React from "react";
interface ButtonProps {
  fontSize: string;
  color: string;
  border: string;
  radius: string;
  backgroundImage: string;
  backgroundColor: string;
  width: string;
  height: string;
  children?: React.ReactNode;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({
  fontSize,
  color,
  border,
  radius,
  backgroundImage,
  backgroundColor,
  width,
  height,
  children,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        fontSize,
        backgroundImage,
        color,
        backgroundColor,
        width,
        height,
        border,
        borderRadius: radius,
      }}
    >
      {children}
    </button>
  );
};

export { Button };
