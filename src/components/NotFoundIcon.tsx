import React from "react";

function NotFoundIcon(): JSX.Element {
  return (
    <div className="rounded-lg">
      <svg viewBox="0 0 800 600" className="h-screen w-full">
        <rect width="100%" height="100%" fill="#f8f8f8" />
        <text
          x="50%"
          y="50%"
          fill="#333"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="120px"
          fontWeight="bold"
        >
          404
        </text>
        <text
          x="50%"
          y="60%"
          fill="#333"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="36px"
        >
          Oops! The page you requested cannot be found.
        </text>
      </svg>
    </div>
  );
}

export default NotFoundIcon;
