import React from "react";

export default function ListLink(props) {
  const { title, icon, width, height, alt } = props;
  return (
    <a href="" class="flex md:inline-flex items-center gap-2 py-3 px-3 rounded-md border-2 border-khaki hover:underline">
      <img src={icon} width={width} height={height} alt={alt} />
      <h4>{title}</h4>
    </a>
  );
}
