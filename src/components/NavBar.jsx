import React, { useState, useEffect } from "react";
import { navLinks, socialImgs } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 10;
    setScrolled(isScrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar p-[10px] ${scrolled ? "scrolled" : "not-scrolled"}`}
    >
      <div className="flex ml-[10px]">
        <div className="flex gap-[20px] items-center">
          <a href="#hero" className="logo">
            Maharshi Reddy
          </a>
          <div className="text-3xl">|</div>
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              className="icon"
              href={socialImg.url}
              target="_blank"
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
      </div>
      <nav className="desktop w-full flex justify-center mt-3">
        <ul>
          {navLinks.map(({ link, name }) => {
            return (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
