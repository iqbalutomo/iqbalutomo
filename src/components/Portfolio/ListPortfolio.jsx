import React from "react";

export default function ListPortfolio(props) {
  const { title, description, image } = props;
  return (
    <div class="bg-white rounded-xl w-80 khaki-2 p-4">
      <a href="./src/detail-portfolio-his.html">
        <div class="bg-cover rounded-xl h-52" style={{ backgroundImage: `url("${image}")` }}></div>
        <h4 class="font-bold">{title}</h4>
      </a>
      <hr />
      <p class="text-justify">{description}</p>
    </div>
  );
}
