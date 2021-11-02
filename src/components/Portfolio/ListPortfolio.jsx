import React from "react";
import { Link } from "react-router-dom";

export default function ListPortfolio(props) {
  const { title, description, image, fullDesc, webName, webLink, link } = props;
  return (
    <div className="bg-white rounded-xl w-80 khaki-2 dark:bg-grey p-4">
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
        <div className="bg-cover rounded-xl h-52" style={{ backgroundImage: `url("${image}")` }}></div>
        <h4 className="font-bold dark:text-blue-400 py-2">{title}</h4>
      </Link>
      <hr />
      <p className="text-justify dark:text-gray-200 py-2">{description}</p>
    </div>
  );
}
