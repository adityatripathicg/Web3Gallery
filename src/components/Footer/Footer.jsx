"use client";
import "./Footer.css";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useViewTransition } from "@/hooks/useViewTransition";
import Copy from "../Copy/Copy";

import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiDribbbleLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { navigateWithTransition } = useViewTransition();
  const socialIconsRef = useRef(null);

  useGSAP(
    () => {
      if (!socialIconsRef.current) return;

      const icons = socialIconsRef.current.querySelectorAll(".icon");
      gsap.set(icons, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: socialIconsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(icons, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: -0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: socialIconsRef }
  );

  return (
    <div className="footer">
      <div className="footer-meta">
        <div className="container footer-meta-header">
          <div className="footer-meta-col">
            <div className="footer-meta-block">
              <div className="footer-meta-logo">
                <Copy delay={0.1}>
                  <h3 className="lg">Web3 Gallery</h3>
                </Copy>
              </div>
              <Copy delay={0.2}>
                <h2>Curating the future of digital art & blockchain culture.</h2>
              </Copy>
            </div>
          </div>
          <div className="footer-meta-col">
            <div className="footer-nav-links">
              <Copy delay={0.1}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/");
                  }}
                >
                  <h3>Home</h3>
                </a>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/about");
                  }}
                >
                  <h3>About</h3>
                </a>
                <a
                  href="/collections"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/collections");
                  }}
                >
                  <h3>Collections</h3>
                </a>
                <a
                  href="/featured"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/featured");
                  }}
                >
                  <h3>Featured</h3>
                </a>
                <a
                  href="/events"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/events");
                  }}
                >
                  <h3>Events</h3>
                </a>
                <a
                  href="/community"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/community");
                  }}
                >
                  <h3>Community</h3>
                </a>
                <a
                  href="/community"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/community");
                  }}
                >
                  <h3>Contact</h3>
                </a>
              </Copy>
            </div>
          </div>
        </div>
        <div className="container footer-socials">
          <div className="footer-meta-col">
            <div className="footer-socials-wrapper" ref={socialIconsRef}>
              <div className="icon">
                <RiTwitterXLine />
              </div>
              <div className="icon">
                <RiInstagramLine />
              </div>
              <div className="icon">
                <RiDribbbleLine />
              </div>
              <div className="icon">
                <RiYoutubeLine />
              </div>
              <div className="icon">
                <RiDiscordLine />
              </div>
              <div className="icon">
                <RiLinkedinBoxLine />
              </div>
            </div>
          </div>
          <div className="footer-meta-col">
            <Copy delay={0.1}>
              <p>
                Our mission is to empower artists and collectors by merging art,
                blockchain, and community into a seamless experience.
              </p>
            </Copy>
          </div>
        </div>
      </div>
      <div className="footer-outro">
        <div className="container">
          <div className="footer-copyright">
            <p>
              by — <span>Aditya CG</span>
            </p>
            <p>Built on decentralized infrastructure.</p>
            <p>All rights reserved &copy; 2025 Web3 Gallery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
