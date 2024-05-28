import React from "react";

const NavArrowBottom = ({color}) => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.42871 1.00012L7.00014 7.00012L12.5716 1.00012"
        stroke={color?color:'#354150'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NavArrowBottom;
