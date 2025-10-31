"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrol, setScrol] = useState(false);
  const handleSroll = () => {
    if (window.scrollY < 500) {
      setScrol(true);
    } else {
      setScrol(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const togleBtn = () => {
    setOpen(!open);
  };

  const handleEvent = (e: MouseEvent) => {
    const menu = document.querySelector(".mobile-menu");
    const burger = document.querySelector(".burgernav");
    const target = e.target as Node;
    if (menu && burger && !menu.contains(target) && !burger.contains(target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    handleSroll();

    window.addEventListener("scroll", handleSroll);
    return () => window.removeEventListener("scroll", handleSroll);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleEvent);
    return () => document.removeEventListener("mousedown", handleEvent);
  }, []);

  const listMenu = [
    {
      title: "Beranda",
      link: "#Beranda",
    },
    {
      title: "Tentang",
      link: "#Tentang",
    },
    {
      title: "Program",
      link: "#Program",
    },
    {
      title: "Blog",
      link: "#Blog",
    },
    {
      title: "Kontak",
      link: "#Kontak",
    },
  ];

  return (
    <div>
      <div
        className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between p-6 transition-all duration-1000 ${scrol ? "" : "bg-white/80 shadow-lg backdrop-blur-md"}`}
      >
        {/* nama brend */}
        <Link
          href="#"
          className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow-xs drop-shadow-blue-500"
        >
          StackUniverse
        </Link>

        {/* toggel Button */}
        <div className="absolute top-3 right-3 z-10 rounded-xl md:relative md:top-0">
          <div
            onClick={togleBtn}
            className={`burgernav absolute top-0 right-3 md:hidden ${open ? "active" : ""} `}
          >
            <div
              className={`burgernav ${scrol ? "bg-white" : "bg-slate-900"}`}
            ></div>
            <div
              className={`burgernav ${scrol ? "bg-white" : "bg-slate-900"}`}
            ></div>
            <div
              className={`burgernav ${scrol ? "bg-white" : "bg-slate-900"}`}
            ></div>
          </div>

          {/* Versi Dekstop */}
          <ul className="hidden md:flex">
            {listMenu.map((item, index) => (
              <li
                className={`rounded-md px-10 py-3 transition-all duration-500 hover:bg-blue-500 hover:text-lg hover:text-white ${scrol ? "text-white" : "text-black"}`}
                key={index}
              >
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(item.link) as HTMLElement;
                    el.scrollIntoView({ behavior: "smooth" });
                    setOpen(false);
                  }}
                  href={item.link}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Versi Mobile */}
          <ul
            className={`mobile-menu fixed top-21 z-50 block rounded-md bg-white/80 shadow-md backdrop-blur-md transition-all duration-500 md:hidden ${open ? "right-0 block" : "-right-50"}`}
          >
            {listMenu.map((item, index) => (
              <li
                className={`rounded-md px-10 py-3 transition-all duration-500 hover:bg-blue-500 hover:text-lg hover:text-white`}
                key={index}
              >
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(item.link) as HTMLElement;
                    el.scrollIntoView({ behavior: "smooth" });
                    setOpen(false);
                  }}
                  href={item.link}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
