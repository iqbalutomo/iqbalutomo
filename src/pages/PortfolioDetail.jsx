import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WeBareBears from "../components/WeBareBears";

import javascript from "../assets/icons/tech/javascript.png";
import reactjs from "../assets/icons/tech/reactjs.png";
import bootstrap from "../assets/icons/tech/bootstrap.svg";
import firebase from "../assets/icons/tech/firebase.svg";
import netlify from "../assets/icons/tech/netlify.svg";
import nodejs from "../assets/icons/tech/nodejs.svg";
import strapi from "../assets/icons/tech/strapi.png";
import tailwindcss from "../assets/icons/tech/tailwindcss.svg";
import typescript from "../assets/icons/tech/typescript.svg";
import express from "../assets/icons/tech/express.png";
import mongodb from "../assets/icons/tech/mongodb.png";
import nextjs from "../assets/icons/tech/nextjs.png";
import vercel from "../assets/icons/tech/vercel.png";
import figma from "../assets/icons/tech/figma.png";

import his1 from "../assets/images/detail-portfolio/his-1.png";
import his2 from "../assets/images/detail-portfolio/his-2.png";
import his3 from "../assets/images/detail-portfolio/his-3.png";

import aleem1 from "../assets/images/detail-portfolio/aleem-1.png";
import aleem2 from "../assets/images/detail-portfolio/aleem-2.png";
import aleem3 from "../assets/images/detail-portfolio/aleem-3.png";
import aleem4 from "../assets/images/detail-portfolio/aleem-4.png";

import storegg1 from "../assets/images/detail-portfolio/store-gg-1.png";
import storegg2 from "../assets/images/detail-portfolio/store-gg-2.png";
import storegg3 from "../assets/images/detail-portfolio/store-gg-3.png";
import storegg4 from "../assets/images/detail-portfolio/store-gg-4.png";
import storegg5 from "../assets/images/detail-portfolio/store-gg-5.png";

// import { useParams } from "react-router";

export default function PortfolioDetail(props) {
  const name = props.location.state.title;
  const desc = props.location.state.description;
  const website = props.location.state.website;
  const link = props.location.state.link;
  // const { id } = useParams();

  return (
    <div className="dark:bg-darkmode">
      <Navbar />
      <WeBareBears />
      <section>
        <div className="max-w-3xl mx-auto px-4 py-10">
          <h1 className="font-bold text-xl text-center mb-4 dark:text-blue-400">{name}</h1>
          <p className="text-justify mb-8 dark:text-gray-200">{desc}</p>
          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex inline-flex items-center gap-2">
              <h4 className="font-bold py-2 px-2 rounded-md khaki-2 dark:bg-grey dark:text-gray-200">WEBSITE</h4>
              <a className={website === "in development" ? `py-2 px-2 rounded text-yellow-100 bg-green-500` : `text-blue-400 hover:underline md:mr-48 dark:text-pink-400`} href={link} target="blank">
                {website}
              </a>
              {website === "in development" ? (
                <span className="py-2 px-2 rounded text-yellow-100 bg-pink-400 dark:text-gray-200" target="blank">
                  84%
                </span>
              ) : null}
            </div>
            <div className="flex inline-flex items-start gap-2">
              <h4 className="font-bold py-2 px-2 rounded-md khaki-2 dark:bg-grey dark:text-gray-200">TECH</h4>
              {name === "PT. HIS Corp Intern" ? (
                <div className="flex flex-wrap justify-between gap-4">
                  <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
                    <img src={javascript} width="50" alt="JavaScript" />
                  </a>
                  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <img src={reactjs} width="50" alt="React.js" />
                  </a>
                  <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                    <img src={mongodb} width="100" alt="MongoDB" className="dark:bg-gray-200" />
                  </a>
                  <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
                    <img src={express} width="100" alt="Express.js" />
                  </a>
                  <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                    <img src={nodejs} width="80" alt="NodeJS" className="dark:bg-gray-200" />
                  </a>
                  <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
                    <img src={bootstrap} width="50" alt="Bootstrap" />
                  </a>
                  <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
                    <img src={netlify} width="100" alt="Netlify" className="dark:bg-gray-200" />
                  </a>
                </div>
              ) : null}
              {name === "Aleem" ? (
                <div className="flex flex-wrap justify-between gap-4">
                  <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
                    <img src={javascript} width="50" alt="JavaScript" />
                  </a>
                  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <img src={reactjs} width="50" alt="React.js" />
                  </a>
                  <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
                    <img src={firebase} width="100" alt="Firebase" className="dark:bg-gray-200" />
                  </a>
                  <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                    <img src={figma} width="50" alt="Figma" />
                  </a>
                </div>
              ) : null}
              {name === "Store GG" ? (
                <div className="flex flex-wrap justify-between gap-4">
                  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                    <img src={typescript} width="50" alt="TypeScript" />
                  </a>
                  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <img src={reactjs} width="50" alt="React.js" />
                  </a>
                  <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                    <img src={nextjs} width="100" alt="Next.js" className="dark:bg-gray-200" />
                  </a>
                  <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                    <img src={mongodb} width="100" alt="MongoDB" className="dark:bg-gray-200" />
                  </a>
                  <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                    <img src={nodejs} width="80" alt="NodeJS" className="dark:bg-gray-200" />
                  </a>
                  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                    <img src={tailwindcss} width="50" alt="Tailwind CSS" />
                  </a>
                  <a href="https://vercel.com/" target="_blank" rel="noreferrer">
                    <img src={vercel} width="100" alt="Vercel" className="dark:bg-gray-200" />
                  </a>
                  <a href="https://strapi.io/" target="_blank" rel="noreferrer">
                    <img src={strapi} width="100" alt="Strapi" className="dark:bg-gray-200" />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
          {name === "PT. HIS Corp Intern" ? (
            <>
              <div className="my-10 mx-auto">
                <img className="mb-4 rounded-md" src={his1} alt="" />
                <img className="mb-4 rounded-md" src={his2} alt="" />
                <img className="mb-4 rounded-md" src={his3} alt="" />
              </div>
            </>
          ) : null}
          {name === "Aleem" ? (
            <>
              <div className="flex flex-wrap justify-center md:justify-between my-10 mx-auto">
                <img className="mb-4 rounded-md" width="300" src={aleem1} alt="" />
                <img className="mb-4 rounded-md" width="300" src={aleem2} alt="" />
                <img className="mb-4 rounded-md" width="300" src={aleem3} alt="" />
                <img className="mb-4 rounded-md" width="300" src={aleem4} alt="" />
              </div>
            </>
          ) : null}
          {name === "Store GG" ? (
            <>
              <div className="my-10 mx-auto">
                <img className="mb-4 rounded-md" src={storegg1} alt="" />
                <img className="mb-4 rounded-md" src={storegg2} alt="" />
                <img className="mb-4 rounded-md" src={storegg3} alt="" />
                <img className="mb-4 rounded-md" src={storegg4} alt="" />
                <img className="mb-4 rounded-md" src={storegg5} alt="" />
              </div>
            </>
          ) : null}
        </div>
      </section>
      <Footer />
    </div>
  );
}
