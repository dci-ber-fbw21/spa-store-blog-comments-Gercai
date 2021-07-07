import * as React from "react";

function SvgBlog(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g stroke="#000" strokeWidth={2}>
        <path d="M5 5h20v20H5z" />
        <path
          d="M10 10v20h19l1-20zM5 5l5 5s0 0 0 0v0M25 5l5 5M5 25l5 5"
        // fill="red"
        />
        <path d="M15 14c8 0 0 5 0 5v0s12-1 6 2l-6 3z"  />
        <path d="M25 25l4 5"/>
      </g>
    </svg>
  );
}

export default SvgBlog;
