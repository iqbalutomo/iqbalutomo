import React from "react";
import { Link } from "react-router-dom";

export default function ListPortfolio(props) {
  const { title, description, image, fullDesc, webName, webLink, link } = props;
  return (
    <div class="bg-white rounded-xl w-80 khaki-2 p-4">
      <Link
        to={{
          pathname: `/detail/${link}`,
          state: {
            title,
            description: fullDesc,
            website: webName,
            link: webLink,
          },
        }}
      >
        <div class="bg-cover rounded-xl h-52" style={{ backgroundImage: `url("${image}")` }}></div>
        <h4 class="font-bold">{title}</h4>
      </Link>
      <hr />
      <p class="text-justify">{description}</p>
    </div>
  );
}
