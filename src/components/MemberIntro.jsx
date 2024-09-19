import React from "react";
import { Container, Grid } from "@mui/material";
import m_1 from "../assets/images/m-1.png";
import card_1 from "../assets/images/reputation.png";
import card_2 from "../assets/images/check.png";
import card_3 from "../assets/images/rating.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Service from "./Service";
import ProjectShowcase from "./ProjectShowcase";
import Team from "./Team";
import Process from "./Process";
import Contact from "./Contact";

function MemberIntro() {
  return (
    <>
      <div className="member-intro">
        <div className="intro-content">
          <Container>
            <h1 data-aos="fade-up" data-aos-duration="2000">Data-Driven Decisions,</h1>
            <h1 data-aos="fade-up" data-aos-duration="1500">Pixel-Perfect Results:</h1>
            <h2 data-aos="fade-up" data-aos-duration="1200">Your  Success Story Starts Here.</h2>
          </Container>
        </div>
        <div className="intro-one">
          <Container>
            <div className="review-wrapper">
              <Grid container spacing={2}>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <div className="review-card">
                    <div className="card-icon">
                      <img src={card_1} alt="" />
                    </div>
                    <div className="card-content">
                      <h2>6+</h2>
                      <h4>Years Of Experience</h4>
                    </div>
                    <i>
                      <ChevronRightIcon />
                    </i>
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <div className="review-card">
                    <div className="card-icon">
                      <img src={card_2} alt="" />
                    </div>
                    <div className="card-content">
                      <h2>130+</h2>
                      <h4>Completed Projects </h4>
                    </div>
                    <i>
                      <ChevronRightIcon />
                    </i>
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <div className="review-card">
                    <div className="card-icon">
                      <img src={card_3} alt="" />
                    </div>
                    <div className="card-content">
                      <h2>65+</h2>
                      <h4>Happy Clients</h4>
                    </div>
                    <i>
                      <ChevronRightIcon />
                    </i>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="about-section">
              <Grid container spacing={2} alignItems="center">
                <Grid item lg={6} md={6} xs={12}>
                  <div className="about-img">
                    <img src={m_1} alt="" />
                  </div>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <div className="about-content">
                    <div className="section-subtitle">About Us</div>
                    <h2>
                      Need a Creative Product? <br /> We can Help You!
                    </h2>
                    <p>
                      We are a passionate team of web development experts,
                      driven by a shared desire to craft exceptional online
                      experiences that elevate your brand and fuel your business
                      growth.
                    </p>
                    <p>
                      Our team is comprised of highly skilled and experienced
                      designers, developers, and strategists who stay at the
                      forefront of the ever-evolving web development landscape.
                      We combine cutting-edge technologies with a data-driven
                      approach to create websites that are not only visually
                      stunning but also optimized for performance and search
                      engines.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Service />
          <Process/>
          <ProjectShowcase/>
          <Team/>
          <Contact/>
        </div>
        
      </div>
    </>
  );
}

export default MemberIntro;
