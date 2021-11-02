import React from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import WeBareBears from "../components/WeBareBears";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="about-section">
        <div class="max-w-6xl mx-auto px-4">
          <WeBareBears />
          <About />
        </div>
      </section>

      <section id="works-section" class="pt-10">
        <div class="max-w-3xl mx-auto px-4 py-10">
          <h1 class="font-bold text-xl text-center">Portfolio</h1>
          <p class="text-center mb-8">You can click on them to see more details</p>
          <div class="flex flex-wrap justify-around gap-4">
            <div class="bg-white rounded-xl w-80 khaki-2 p-4">
              <a href="./src/detail-portfolio-his.html">
                {/* <div class="bg-cover rounded-xl h-52" style="background-image: url('./assets/img/PT.\ His\ Corp\ Intern.jpg')"></div> */}
                <h4 class="font-bold">PT. HIS Corp Intern</h4>
              </a>
              <hr />
              <p class="text-justify">HIS Corp is one of the best wedding planners in Jakarta, and has a branch in Bandung.</p>
            </div>
            <div class="bg-white rounded-xl w-80 khaki-2 p-4">
              <a href="./src/detail-portfolio-aleem.html">
                {/* <div class="bg-cover rounded-xl h-52" style="background-image: url('./assets/img/Aleem.jpg')"></div> */}
                <h4 class="font-bold">Aleem</h4>
              </a>
              <hr />
              <p class="text-justify">Aleem is a special application for consultation about the Islamic religion.</p>
            </div>
            <div class="bg-white rounded-xl w-80 khaki-2 p-4">
              <a href="./src/detail-portfolio-storegg.html">
                {/* <div class="bg-cover rounded-xl h-52" style="background-image: url('./assets/img/Store\ GG.jpg')"></div> */}
                <h4 class="font-bold">Store GG</h4>
              </a>
              <hr />
              <p class="text-justify">Top up game website where players can buy coins, diamonds or the like to improve appearance and level.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="link-section">
        <div class="max-w-3xl mx-auto px-4 py-10">
          <h1 class="font-bold text-xl text-center mb-8">Link</h1>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="" class="flex md:inline-flex items-center gap-2 py-3 px-3 rounded-md border-2 border-khaki hover:underline">
              <img src="./assets/icon/iconmonstr-github-1.svg" alt="GitHub" />
              <h4>@iqbalutomo</h4>
            </a>
            <a href="" class="flex md:inline-flex items-center gap-2 py-3 px-3 rounded-md border-2 border-khaki hover:underline">
              <img src="./assets/icon/gmail.png" width="24" height="24" alt="Email" />
              <h4>muhlisiqbalutomo@gmail.com</h4>
            </a>
            <a href="" class="flex md:inline-flex items-center gap-2 py-3 px-3 rounded-md border-2 border-khaki hover:underline">
              <img src="./assets/icon/instagram.png" width="24" height="24" alt="Instagram" />
              <h4>@iqbalutomo</h4>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p class="text-sm text-gray-400 text-center mb-10 my-10">iqbalutomo. All Rights Reserved.</p>
      </footer>
    </>
  );
}
