import React from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
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
        <Portfolio />
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
