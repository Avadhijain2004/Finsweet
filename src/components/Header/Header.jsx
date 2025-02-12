import React from 'react'
import { NavLink, Link } from "react-router-dom";
import logo from './../../assets/Client-First - IMAGES/Logo.svg'
import { useEffect, useRef, useState } from "react";


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/about-us",
    display: "About Us",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

function Header() {
  
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("sticky__header");
      } else {
        headerRef.current?.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='h-20 bg-primary font-heading bg-no-repeat bg-center bg-cover w-full' ref={headerRef}>
      <div className="flex items-center justify-between px-4 md:px-8 md:pt-0 pt-4">
        {/*==========Logo========= */}
        <div>
          <img className='m-2 md:m-6 md:ml-10' src={logo} alt="Logo" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-8 h-8 text-offWhite" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/*==========Menu Items========= */}
        <div className={`${menuOpen ? "block" : "hidden"} md:flex flex-col md:flex-row items-center md:gap-[2.7rem] absolute md:static bg-primary top-20 right-0 md:bg-transparent w-full md:w-auto`} ref={menuRef}>
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-[2.7rem] p-4 md:p-0 text-xl">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-offWhite text-[16px] leading-7 font-[600]"
                      : "text-offWhite text-[16px] leading-7 font-[500] hover:text-slate-400"
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to='/'>
            <button className='mt-4 md:mt-0 md:mr-10 text-black bg-offWhite p-2 md:p-10 md:pt-4 md:pb-4 font-bold ml-6 mb-4 md:mb-0'>Subscribe</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;
