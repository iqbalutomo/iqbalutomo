import React from "react";
import Navbar from "../components/Navbar";
import WeBareBears from "../components/WeBareBears";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="about-section">
        <div class="max-w-6xl mx-auto px-4">
          <WeBareBears />
          <div class="max-w-3xl mx-auto">
            <div class="py-4 rounded-xl khaki-2 text-brown text-2xl text-center font-extrabold">
              <h1>Hi, I'm Iqbal.</h1>
            </div>
            <div class="flex flex-wrap md:flex-nowrap gap-4 justify-center mt-10">
              <div class="flex flex-col md:w-1/3 items-center">
                <img src="./assets/img/me.jpeg" class="rounded-full" width="150" alt="my-profile" />
                <h2 class="font-bold text-xl mt-2">Muhlis Iqbal Utomo</h2>
                <p>Front End Developer</p>
              </div>
              <div class="flex flex-col md:w-2/3 text-justify">
                <p>
                  I am Iqbal, a 23 year old Front End Developer, currently living in Depok, West Java. In October 2018 I got my first job as a web developer at a wedding company in Jakarta. In 2019 I quit my job to focus on pursuing a
                  bachelor's degree in computer science and I decided to deepen my Javascript skills. In August 2021 I graduated as a computer science graduate and I successfully completed my final project using React.
                </p>
                <br />
                <p>
                  From there I was very interested and focused on becoming a Front End Developer. I always want to learn more and do more. I also strongly believe that we should not be complacent. I am a hard worker, very curious,
                  passionate, committed and a fast learner!
                </p>
              </div>
            </div>
          </div>
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
