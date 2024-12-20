import React from "react";
import "./about.css";
import { FaUser } from "react-icons/fa";

import IMG from "./IMG.jpg";

function About() {
  return (
    <>
      <div
        id="about"
        className="flex p-2 main-box  flex-col  aboutpage h-screen"
      >
        <div className="m-6 p-0 flex justify-center items-center text-center pagename-div">
          <h1 className="font-bold text-2xl  w-fit text-black p-2 px-5 rounded-3xl flex items-center">
            <FaUser className="mr-2 text-black" /> ABOUT ME
          </h1>
        </div>
        <div className=" items-center about-page-content grid grid-cols-1 mt-6 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="order-2 pl-8 about-content w-full lg:order-1">
            <p className="text-justify   text-sm lg:text-lg">
              Hello! I'm NIKHIL KUMAR, a recent graduate in Computer Science And engineering
          . I have a strong interest in exploring new
              technologies and applying them to real-world projects. A quick
              learner, I enhance my skills through hands-on experience. During
              my bachelor's, I worked with Java, HTML, CSS, JavaScript, React,
            and SQL. My focus is on developing user
              interfaces and building engaging web applications. I am now
              seeking a job opportunity where I can contribute my skills to
              exciting projects and continue growing in the field of
              engineering.
            </p>
          </div>
          <div className="order-1 flex text-center justify-center lg:order-2">
            <img
              className="image rounded-xl grayscale hover:grayscale-0 hover:shadow-md shadow-white hover:scale-125"
              src={IMG}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
