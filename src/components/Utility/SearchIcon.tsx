import React from "react";

interface SearchIconProps {
  handleClick: React.MouseEventHandler<SVGElement>;
}

const SearchIcon = ({ handleClick }: SearchIconProps) => {
  const defaultStyle = {
    stroke: "none",
    fillRule: "nonzero",
    fill: "hsla(0, 0%, 100%, 0.55)",
    fillOpacity: "0.55",
  } as React.CSSProperties;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      id="search-icon"
      onClick={handleClick}
    >
      <g id="surface34154695">
        <path
          id="search-icon-path"
          style={defaultStyle}
          d="M 21 3 C 11.601562 3 4 10.601562 4 20 C 4 29.398438 11.601562 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601562 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z M 21 7 "
        />
      </g>
    </svg>
  );
};

export default SearchIcon;