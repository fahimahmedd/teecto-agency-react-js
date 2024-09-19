import React from "react";
import { Container, Tooltip, css } from "@mui/material";
import manik from "../assets/images/manik.webp";
import shuvo from "../assets/images/shuvo.webp";
import naeem from "../assets/images/naeem.webp";
import shaheen from "../assets/images/shahin.webp";
import fahim from "../assets/images/fahim.webp";
import sajid from "../assets/images/sajid.webp";
import figma from "../assets/images/figma.png";
import react from "../assets/images/react.png";
import vue from "../assets/images/vue.png";
import redux from "../assets/images/redux.png";
import next from "../assets/images/next.png";
import nuxt from "../assets/images/nuxt.png";
import html_5 from "../assets/images/html5.png";
import css_3 from "../assets/images/css3.png";
import javascript from "../assets/images/javascript.png";
import typescript from "../assets/images/typescript.png";
import jquery from "../assets/images/jquery.png";
import boostrap from "../assets/images/bootstrap.png";
import canva from "../assets/images/canva.png";
import xd from "../assets/images/adobe-xd.png";
import ai from "../assets/images/ai.png";
import firebase from "../assets/images/firebase.png";
import photoshop from "../assets/images/photoshop.png";
import sass from "../assets/images/sass.png";
import metarial from "../assets/images/metarial.png";
import node from "../assets/images/node.png";
import git from "../assets/images/git.png";
import ae from "../assets/images/ae.png";
import pr from "../assets/images/pr.png";
import ant from "../assets/images/ant.png";
import vuetify from "../assets/images/vuetify.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../assets/css/swiper.css";
import "../assets/css/effect-cards.css";
import "../assets/css/pagination.css";
// import required modules

import { Autoplay, Pagination, EffectCards } from "swiper/modules";

function Team() {
  return (
    <>
      <div className="team">
        <Container>
          <div className="team-heading">
            <h2>Our Dynamic Team: </h2>
            <h3> Unveiling the Powerhouse Behind Our Success</h3>
          </div>
          <div className="team-wrapper">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              modules={[ Autoplay ,EffectCards, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="team-card">
                  <div>
                    <div className="team-profile shaheen-profile">
                      <img src={shaheen} alt="" />
                    </div>
                  </div>
                  <div className="team-content">
                    <h2> Shahin Alam </h2>
                    <h4>Senior Software Engineer</h4>
                    <p>" Enthusiastic full-stack developer with 5+ years of
                      experience crafting web applications. Skilled in
                      JavaScript frameworks (React, Angular) and back-end
                      languages (Python, Java). Proven ability to design,
                      develop, and deploy scalable solutions. "
                    </p>
                    <div className="showcase-intense">
                      <div className="intense-img">
                        <img src={vue} alt="" />
                        <span>Vue Js </span>
                      </div>
                      <div className="intense-img">
                        <img src={nuxt} alt="" />
                        <span> Nuxt Js</span>
                      </div>
                      <div className="intense-img">
                        <img src={node} alt="" />
                        <span> Node Js</span>
                      </div>
                      <div className="intense-img">
                        <img src={vuetify} alt="" />
                        <span> Vuetify </span>
                      </div>
                      <div className="intense-img">
                        <img src={javascript} alt="" />
                        <span> Javascript  </span>
                      </div>
                      <div className="intense-img">
                        <img src={firebase} alt="" />
                        <span> Firebase </span>
                      </div>
                      <div className="intense-img">
                        <img src={git} alt="" />
                        <span> Git  </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <div>
                    <div className="team-profile naeem-profile">
                      <img src={naeem} alt="" />
                    </div>
                  </div>
                  <div className="team-content">
                    <h2> Azmir Hossen </h2>
                    <h4>Software Developer</h4>
                    <p>" As a Software Developer working with 2+ years of
                      experience in front-end development, specializing in
                      React, Next.js. Proven track record of delivering scalable
                      solutions. Collaborative team player with a focus on code
                      quality and performance. Passionate about staying current
                      with industry trends. Ready to bring expertise to dynamic
                      projects. "
                    </p>
                    <div className="showcase-intense">
                      <div className="intense-img">
                        <img src={react} alt="" />
                        <span>React Js </span>
                      </div>
                      <div className="intense-img">
                        <img src={next} alt="" />
                        <span> Next Js</span>
                      </div>
                      <div className="intense-img">
                        <img src={node} alt="" />
                        <span> Node Js</span>
                      </div>
                      <div className="intense-img">
                        <img src={sass} alt="" />
                        <span> SASS</span>
                      </div>
                      <div className="intense-img">
                        <img src={metarial} alt="" />
                        <span> Metarial UI </span>
                      </div>
                      <div className="intense-img">
                        <img src={javascript} alt="" />
                        <span> Javascript  </span>
                      </div>
                      <div className="intense-img">
                        <img src={git} alt="" />
                        <span> Git  </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <div>
                    <div className="team-profile fahim-profile">
                      <img src={fahim} alt="" />
                    </div>
                  </div>
                  <div className="team-content">
                    <h2> Fahim Ahmed </h2>
                    <h4> Front-end Developer</h4>
                    <p>" I'm a passionate web developer with experience in building
                      user interfaces using both React.js and Vue.js.I'm always
                      eager to learn and explore new technologies.From design to
                      development, I've got you covered. I leverage Figma for
                      UI/UX design, and implement it all using React.js or
                      Vue.js to create stunning and functional web applications. "
                    </p>
                    <div className="showcase-intense">
                      <div className="intense-img">
                        <img src={react} alt="" />
                        <span>React Js </span>
                      </div>
                      <div className="intense-img">
                        <img src={vue} alt="" />
                        <span> Vue Js</span>
                      </div>
                      <div className="intense-img">
                        <img src={sass} alt="" />
                        <span> SASS</span>
                      </div>
                      <div className="intense-img">
                        <img src={jquery} alt="" />
                        <span> Jquery</span>
                      </div>
                      <div className="intense-img">
                        <img src={ant} alt="" />
                        <span> Ant Design</span>
                      </div>
                      <div className="intense-img">
                        <img src={metarial} alt="" />
                        <span> Metarial UI </span>
                      </div>
                      <div className="intense-img">
                        <img src={figma} alt="" />
                        <span> Figma UI/UX</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <div>
                    <div className="team-profile shuvo-profile">
                      <img src={shuvo} alt="" />
                    </div>
                  </div>
                  <div className="team-content">
                    <h2> TahSeen AL ShuVo </h2>
                    <h4> UI/UX & Graphic Designer</h4>
                    <p>" I'm a passionate UI and UX designer with 2 years of experience in crafting engaging digital experiences. I thrive on creating intuitive interfaces that seamlessly blend aesthetics with functionality. My journey in the design world has been driven by a constant quest for innovation and a deep commitment to delivering impactful solutions that delight users. "</p>
                    <div className="showcase-intense">
                    <div className="intense-img">
                        <img src={figma} alt="" />
                        <span> Figma </span>
                      </div>
                      <div className="intense-img">
                        <img src={xd} alt="" />
                        <span>Adobe XD </span>
                      </div>
                      <div className="intense-img">
                        <img src={photoshop} alt="" />
                        <span> Adobe Photoshop</span>
                      </div>
                      <div className="intense-img">
                        <img src={ai} alt="" />
                        <span> Adobe Illustrator </span>
                      </div>
                      <div className="intense-img">
                        <img src={canva} alt="" />
                        <span> Canva </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <div>
                    <div className="team-profile">
                      <img src={manik} alt="" />
                    </div>
                  </div>
                  <div className="team-content">
                    <h2> Md. Manik Prodhan </h2>
                    <h4> Motion Graphics Designer</h4>
                    <p>" Versatile and imaginative creative professional adept at blending graphic design prowess with video editing finesse. Eager to channel my boundless creativity and technical proficiency into a dynamic role where I can craft captivating visual narratives that elevate brands and captivate audiences "</p>
                    <div className="showcase-intense">
                      <div className="intense-img">
                        <img src={photoshop} alt="" />
                        <span>Adobe Photoshop </span>
                      </div>
                      <div className="intense-img">
                        <img src={ai} alt="" />
                        <span> Adobe Illustrator </span>
                      </div>
                      <div className="intense-img">
                        <img src={ae} alt="" />
                        <span> Adobe After Effect</span>
                      </div>
                      <div className="intense-img">
                        <img src={pr} alt="" />
                        <span> Adobe Premiere Pro </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <div>
                    <div className="team-profile sajid-profile">
                      <img src={sajid} alt="" />
                    </div>
                  </div>
                  <div className="team-content">
                    <h2> Rahat Islam </h2>
                    <h4> Brand Identity Creator , Graphics Designer</h4>
                    <p>"Hello, I'm Rahat Islam a dedicated learner and an enthusiastic graphic designer with two year of experience. My journey in graphic design has perfected my eye for aesthetics and enhanced my design skills. I am dedicated to improving my abilities and bringing creative ideas to my work."</p>
                    <div className="showcase-intense">
                      <div className="intense-img">
                        <img src={photoshop} alt="" />
                        <span>Adobe Photoshop </span>
                      </div>
                      <div className="intense-img">
                        <img src={ai} alt="" />
                        <span> Adobe Illustrator </span>
                      </div>
                      <div className="intense-img">
                        <img src={xd} alt="" />
                        <span>Adobe XD </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Team;
