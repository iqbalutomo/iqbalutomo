import React, { useEffect } from "react";
import icGithubBlack from "../../assets/icons/ic-github-black.png";
import icDarkTheme from "../../assets/icons/moon-dark-theme.svg";
import icLightTheme from "../../assets/icons/sun-light-theme.svg";

export default function Navbar() {
  useEffect(() => {
    // menu mobile
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);
  return (
    <section>
      <nav class="fixed z-10 w-full backdrop-filter backdrop-blur-md shadow-md">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div>
              <a href="/" class="flex items-center py-4 px-2">
                <span class="font-semibold text=black text-lg">iqbalutomo</span>
              </a>
            </div>
            <div id="my-nav" class="hidden md:flex space-x-4 items-center">
              <a id="about-nav" class="btn py-3 px-2 rounded" href="/#about-section">
                About
              </a>
              <a id="works-nav" class="btn py-3 px-2 rounded" href="/#works-section">
                {" "}
                Works{" "}
              </a>
              <a id="link-nav" class="btn py-3 px-2 rounded" href="/#link-section">
                {" "}
                Link{" "}
              </a>
            </div>
            <div class="md:flex inline-flex items-center space-x-3">
              <a href="https://github.com/iqbalutomo" target="blank">
                <img src={icGithubBlack} alt="GitHub" width="25" />
              </a>
              <button type="button" class="sun py-2 px-2 font-medium rounded bg-purple-300 hover:bg-purple-200 hover:text-yellow-100 transition duration-100">
                <img src={icLightTheme} width="20" />
              </button>
              <button type="button" class="moon py-2 px-2 font-medium rounded bg-purple-300 hover:bg-purple-200 hover:text-yellow-100 transition duration-100">
                <img src={icDarkTheme} width="20" />
              </button>
            </div>
            <div class="md:hidden flex items-center">
              <button class="outline-none mobile-menu-button">
                <svg class="w-6 h-6 text-gray-500 hover:text-gray-500" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="hidden mobile-menu">
          <ul class="">
            <li class="">
              <a href="#about-section" class="block text-sm px-2 py-4 hover:brown font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="#works-section" class="block text-sm px-2 py-4 hover:brown transition duration-100">
                Works
              </a>
            </li>
            <li>
              <a href="#link-section" class="block text-sm px-2 py-4 hover:brown transition duration-100">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
