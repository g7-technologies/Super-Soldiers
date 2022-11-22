import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Navbar.styled";
import { Icon } from "@iconify/react";
import { NavHashLink } from "react-router-hash-link";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  // window resize hook
  useEffect(() => {
    // window size hook for sidenav
    function checkScreenSize() {
      if (window.innerWidth > 992) {
        setMobileMenu(false);
      }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [setMobileMenu]);

  // for mobile sidenav display
  useEffect(() => {
    const navContainer = document.querySelector(".nav-link-container");
    if (mobileMenu) {
      navContainer.style.height = 250 + "px";
    } else {
      navContainer.style.height = 0 + "px";
    }
  }, [mobileMenu]);

  // scroll function
  useEffect(() => {
    let navigation = document.querySelector("header");
    window.addEventListener("scroll", scrollFunc);
    function scrollFunc() {
      if (window.innerWidth > 992) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          navigation.style.background = "#576a37";
        } else {
          navigation.style.background = "transparent";
        }
      } else {
        navigation.style.background = "#576a37";
      }
    }
  }, []);

  // scroll with offset
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <div className="nav-logo">
        <p>Super Soldiers</p>
      </div>
      <div className="nav-link-container">
        <ul>
          <li>
            <NavHashLink
              to="/#home"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              HOME
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#about"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              ABOUT
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#roadmap"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              ROADMAP
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#team"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              TEAM
            </NavHashLink>
          </li>
          <li className="nav-link-last-item">
            <NavHashLink
              to="/#faq"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              FAQ
            </NavHashLink>
          </li>
          <li className="social-media-icon">
            <a target="blank" href="https://twitter.com/SuperSoldierNFT">
              <Icon icon="entypo-social:twitter-with-circle" />
            </a>
            <a target="blank" href="https://www.instagram.com/supersoldiersnft/">
              <Icon icon="entypo-social:instagram-with-circle" />
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu">
        <button
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          {mobileMenu ? <Icon icon="akar-icons:cross" /> : <Icon icon="uim:bars" />}
        </button>
      </div>
    </Wrapper>
  );
}

export default Navbar;
