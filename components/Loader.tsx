import React from "react";
function Loader() {
  return (
    <div>
      <svg>
        <path d="M50 100A1 1 0 0150 0M50 75a1 1 0 000-100"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FF56A1"></stop>
            <stop offset="100%" stopColor="#FF9350"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Loader;
