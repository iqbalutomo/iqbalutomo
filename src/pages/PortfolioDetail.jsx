import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WeBareBears from "../components/WeBareBears";

import javascript from "../assets/icons/tech/javascript.png";
import reactjs from "../assets/icons/tech/reactjs.png";
import bootstrap from "../assets/icons/tech/bootstrap.svg";
import firebase from "../assets/icons/tech/firebase.svg";
import netlify from "../assets/icons/tech/netlify.svg";
import nodejs from "../assets/icons/tech/nodejs.svg";
import strapi from "../assets/icons/tech/strapi.svg";
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

import { useParams } from "react-router";

export default function PortfolioDetail(props) {
  const name = props.location.state.title;
  const desc = props.location.state.description;
  const website = props.location.state.website;
  const link = props.location.state.link;
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <WeBareBears />
      <section>
        <div class="max-w-3xl mx-auto px-4 py-10">
          <h1 class="font-bold text-xl text-center mb-4">{name}</h1>
          <p class="text-justify mb-8">{desc}</p>
          <div class="flex flex-wrap justify-between gap-4">
            <div class="flex inline-flex items-center gap-2 pr-48">
              <h4 class="font-bold py-2 px-2 rounded-md khaki-2">WEBSITE</h4>
              <a class={website == "in development" ? `py-2 px-2 rounded text-yellow-100 bg-green-500` : `text-blue-400 hover:underline`} href={link} target="blank">
                {website}
              </a>
              {website == "in development" ? (
                <a class="py-2 px-2 rounded text-yellow-100 bg-green-500" target="blank">
                  84%
                </a>
              ) : (
                ""
              )}
            </div>
            <div class="flex inline-flex items-start gap-2">
              <h4 class="font-bold py-2 px-2 rounded-md khaki-2">TECH</h4>
              {id == "his" ? (
                <div class="flex flex-wrap justify-between gap-4">
                  <a href="">
                    <img src={javascript} width="50" alt="JavaScript" />
                  </a>
                  <a href="">
                    <img src={reactjs} width="50" alt="React.js" />
                  </a>
                  <a href="">
                    <img src={mongodb} width="100" alt="MongoDB" />
                  </a>
                  <a href="">
                    <img src={express} width="100" alt="Express.js" />
                  </a>
                  <a href="">
                    <img src={nodejs} width="80" alt="NodeJS" />
                  </a>
                  <a href="">
                    <img src={bootstrap} width="50" alt="Bootstrap" />
                  </a>
                  <a href="">
                    <img src={netlify} width="100" alt="Netlify" />
                  </a>
                </div>
              ) : (
                ""
              )}
              {id == "aleem" ? (
                <div class="flex flex-wrap justify-between gap-4">
                  <a href="">
                    <img src={javascript} width="50" alt="JavaScript" />
                  </a>
                  <a href="">
                    <img src={reactjs} width="50" alt="React.js" />
                  </a>
                  <a href="">
                    <img src={firebase} width="100" alt="Firebase" />
                  </a>
                  <a href="">
                    <img src={figma} width="50" alt="Figma" />
                  </a>
                </div>
              ) : (
                ""
              )}
              {id == "storegg" ? (
                <div class="flex flex-wrap justify-between gap-4">
                  <a href="">
                    <img src={typescript} width="50" alt="TypeScript" />
                  </a>
                  <a href="">
                    <img src={reactjs} width="50" alt="React.js" />
                  </a>
                  <a href="">
                    <img src={nextjs} width="100" alt="Next.js" />
                  </a>
                  <a href="">
                    <img src={mongodb} width="100" alt="MongoDB" />
                  </a>
                  <a href="">
                    <img src={nodejs} width="80" alt="NodeJS" />
                  </a>
                  <a href="">
                    <img src={tailwindcss} width="50" alt="Tailwind CSS" />
                  </a>
                  <a href="">
                    <img src={vercel} width="100" alt="Vercel" />
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {id == "his" ? (
            <>
              <div class="my-10 mx-auto">
                <img class="mb-4 rounded-md" src={his1} alt="" />
                <img class="mb-4 rounded-md" src={his2} alt="" />
                <img class="mb-4 rounded-md" src={his3} alt="" />
              </div>
            </>
          ) : (
            ""
          )}
          {id == "aleem" ? (
            <>
              <div class="flex flex-wrap justify-center md:justify-between my-10 mx-auto">
                <img class="mb-4 rounded-md" width="300" src={aleem1} alt="" />
                <img class="mb-4 rounded-md" width="300" src={aleem2} alt="" />
                <img class="mb-4 rounded-md" width="300" src={aleem3} alt="" />
                <img class="mb-4 rounded-md" width="300" src={aleem4} alt="" />
              </div>
            </>
          ) : (
            ""
          )}
          {id == "storegg" ? (
            <>
              <div class="my-10 mx-auto">
                <img class="mb-4 rounded-md" src={storegg1} alt="" />
                <img class="mb-4 rounded-md" src={storegg2} alt="" />
                <img class="mb-4 rounded-md" src={storegg3} alt="" />
                <img class="mb-4 rounded-md" src={storegg4} alt="" />
                <img class="mb-4 rounded-md" src={storegg5} alt="" />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
