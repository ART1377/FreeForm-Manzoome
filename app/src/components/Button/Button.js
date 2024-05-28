import React from "react";

function Button({ children, icon, css, isWhite = false }) {
  return (
    <>
      {isWhite ? (
        <button
          className={`px-[30px] py-2.5 bg-white text-primary flex items-center justify-center gap-3 rounded-15 ${css}`}
        >
          <span>{children}</span>
          {icon && icon}
        </button>
      ) : (
        <button
          className={`px-[30px] py-2.5 bg-primary text-white flex items-center justify-center gap-3 rounded-15 ${css}`}
        >
          <span>{children}</span>
          {icon && icon}
        </button>
      )}
    </>
  );
}
export default Button;
