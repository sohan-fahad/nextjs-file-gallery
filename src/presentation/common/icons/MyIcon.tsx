import React from "react";
import { CustomIconType } from "./iconData"; // Make sure to import the types you need.
import { CustomIconData } from "./iconData";

interface Props {
  color?: string;
  stroke?: string;
  filled?: boolean;
  fillColor?: string;
  size?: number;
  name?: CustomIconType;
  classes?: string;
  strokeWidth?: number;
}

const MyIcon: React.FC<Props> = ({
  color = "#fff",
  stroke = color,
  filled = false,
  size = 1.5,
  name = "heart",
  classes = "",
  strokeWidth = 1.5,
}) => {
  const fillColor = filled ? color : "none";

  return (
    <svg
      className={`name ${classes}`}
      viewBox="0 0 24 24"
      fill={fillColor}
      width={`${size}em`}
      height={`${size}em`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={CustomIconData[name]}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MyIcon;
