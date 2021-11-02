import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
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
        <Contact />
      </section>

      <footer>
        <p class="text-sm text-gray-400 text-center mb-10 my-10">iqbalutomo. All Rights Reserved.</p>
      </footer>
    </>
  );
}
