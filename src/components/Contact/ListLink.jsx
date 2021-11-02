import React from "react";

export default function ListLink(props) {
  const { title, icon, width, height, alt } = props;
  return (
    <a href="" class="flex md:inline-flex items-center gap-2 py-3 px-3 rounded-md border-2 border-khaki dark:border-grey hover:underline">
      <img src={icon} width={width} height={height} alt={alt} class="dark:bg-white rounded-md dark:border-2 dark:border-white" />
      <h4>{title}</h4>
    </a>
  );
}
