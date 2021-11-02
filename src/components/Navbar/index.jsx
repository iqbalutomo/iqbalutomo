import React, { useEffect } from "react";
import icGithubBlack from "../../assets/icons/ic-github-black.png";
import icDarkTheme from "../../assets/icons/moon-dark-theme.svg";
import icLightTheme from "../../assets/icons/sun-light-theme.svg";
import useDarkMode from "../../hooks/useDarkMode";

export default function Navbar() {
  useEffect(() => {
    // menu mobile
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);

  const [colorTheme, setTheme] = useDarkMode();

  return (
    <section>
      <nav className="fixed z-10 w-full backdrop-filter backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text=black text-lg dark:text-white">iqbalutomo</span>
              </a>
            </div>
            <div id="my-nav" className="hidden md:flex space-x-4 items-center">
              <a id="about-nav" className="btn dark:hover:bg-blue-400 py-3 px-2 rounded dark:text-white" href="/#about-section">
                About
              </a>
              <a id="works-nav" className="btn dark:hover:bg-blue-400 py-3 px-2 rounded dark:text-white" href="/#works-section">
                {" "}
                Works{" "}
              </a>
              <a id="link-nav" className="btn dark:hover:bg-blue-400 py-3 px-2 rounded dark:text-white" href="/#link-section">
                {" "}
                Link{" "}
              </a>
            </div>
            <div className="md:flex inline-flex items-center space-x-3">
              <a href="https://github.com/iqbalutomo" target="blank">
                <img src={icGithubBlack} alt="GitHub" width="25" className="bg-white rounded-full border-2 border-white" />
              </a>
              <button type="button" onClick={() => setTheme(colorTheme)} className="sun py-2 px-2 font-medium rounded bg-purple-500 hover:bg-purple-400 hover:text-yellow-100 transition duration-100 dark:bg-lightmode">
                {colorTheme === "light" ? <img src={icLightTheme} width="20" alt="light theme" /> : <img src={icDarkTheme} width="20" alt="dark theme" />}
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg className="w-6 h-6 text-gray-500 hover:text-gray-500" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden mobile-menu">
          <ul className="">
            <li className="">
              <a href="/#about-section" className="block text-sm px-2 py-4 hover:brown font-semibold dark:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/#works-section" className="block text-sm px-2 py-4 hover:brown transition duration-100 dark:text-white">
                Works
              </a>
            </li>
            <li>
              <a href="/#link-section" className="block text-sm px-2 py-4 hover:brown transition duration-100 dark:text-white">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
