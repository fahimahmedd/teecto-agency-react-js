import React from "react";
import service_1 from "../assets/images/layers.png";
import service_2 from "../assets/images/webdevolopment.png";
import service_3 from "../assets/images/motion.png";
import service_4 from "../assets/images/bug.png";
import service_5 from "../assets/images/ux-design.png";
import service_6 from "../assets/images/graphic-designer.png";
import { Container, Grid } from "@mui/material";

function Service() {
  return (
    <>
    <div className="service-header">
    <Container>
        <h3>Dive into the Latest Technologies and Trends</h3>
        <h2> <span>Building the Web of Tomorrow:</span> <br /> Exploring the Frontiers of Development</h2>
    </Container>
    </div>
    <div className="service">
      <div class="service-wrappeer">
        <Grid container spacing={0}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div class="service-wrap">
              <div class="round-content">
                <div class="number">
                  <span class="counter">20</span>+
                </div>
                <h6>High Range Of Amenities</h6>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div class="service-wrap">
              <div class="service-icon">
                <img src={service_1} alt="" />
              </div>
              <a href="feature.html">
                <h4> Front-End Development </h4>
              </a>
              <p>Specializing in crafting pixel-perfect, responsive interfaces, we focus on React.js, Next.js, and modern JavaScript frameworks to elevate your online presence through meticulous front-end development.</p>
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div class="service-wrap">
              <div class="service-icon">
                <img src={service_2} alt="" />
              </div>
              <a href="feature.html">
                <h4> Website Development </h4>
              </a>
              <p>
              Building production-ready, Node.js/Express.js or other modern JavaScript frameworks for both frontend and backend development. Elevate your online presence with cutting-edge tools and technologies, ensuring superior performance above all.
              </p>
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div class="service-wrap service-border-none">
              <div class="service-icon">
                <img src={service_4} alt="" />
              </div>
              <a href="feature.html">
                <h4>Bug Fix </h4>
              </a>
              <p>Resolve bugs and enhance the performance of projects, or websites developed with React, Next.js, Vue js and other modern JavaScript frameworks. Our expert bug-fixing service ensures a seamless and error-free experience, Also rebuild your website interface.</p>
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div class="service-wrap">
              <div class="service-icon">
                <img src={service_3} alt="" />
              </div>
              <a href="feature.html">
                <h4> Motion Graphic </h4>
              </a>
              <p>Get The beauty of motion graphics is its versatility from our expertise. Whether you need a short explainer video for social media, a dynamic presentation for investors, or an engaging product demo, motion graphics can be adapted to fit your specific goals and target audience.</p>
            </div>
          </Grid>
          
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div class="service-wrap">
              <div class="service-icon">
                <img src={service_5} alt="" />
              </div>
              <a href="feature.html">
                <h4> UI / UX Design </h4>
              </a>
              <p>Architect your platform with our UI/UX design services. Elevate user experience, encouraging longer engagement on your website and boosting overall satisfaction. Our designs blend aesthetics with seamless navigation, ensuring a visually appealing and user-friendly online environment crafted through extensive research.</p>
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div class="service-wrap">
              <div class="service-icon">
                <img src={service_6} alt="" />
              </div>
              <a href="feature.html">
                <h4> Graphics Design </h4>
              </a>
              <p>Revitalize your brand through our graphic design expertise, specializing in impactful brand promotion. From compelling social media posters to attention-grabbing banners and brochures, Discover a suite of high-level graphic services that ensure your visual presence shines in every detail. </p>
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div class="service-wrap service-color service-border-none">
              <h4>We Are Here to serve you and your business!</h4>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
    </>
  );
}

export default Service;
