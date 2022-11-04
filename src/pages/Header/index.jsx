/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Script from "next/script";

import { Montserrat } from "@next/font/google";

import { Grid, Typography, Unstable_Grid2 } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../../../public/assets/lotties/saveEnergyPlug.json";
import animationDataGreenEnergy from "../../../public/assets/lotties/greenEnergy.json";
import InformationCard from "../../../public/components/InformationCard";

import { motion } from "framer-motion";
import FirstAndSecond from "../../components/FirstAndSecond";
import SocialMediaImage from "../../images/HomePage/3dsocialmedia.png";
import { AwesomeButton } from "react-awesome-button";
import zIndex from "@mui/material/styles/zIndex";
import { Box, height, width } from "@mui/system";
import { blue } from "@mui/material/colors";

const MontserratFam = Montserrat();

const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsCleanCity = {
    loop: true,
    autoplay: true,
    animationData: animationDataGreenEnergy,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* <!-- Bootstrap core JS--> */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
      {/* <!-- Core theme JS--> */}
      <Script src="js/scripts.js" />
      {/* {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
      {/* <!-- * *                               SB Forms JS                               * *--> */}
      {/* <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *--> */}
      {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
      <Script src="https://cdn.startbootstrap.com/sb-forms-latest.js" />

      <Grid id="page-top">
        {/* <!-- Navigation--> */}
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
          id="mainNav"
        >
          <div className="container px-5">
            <a
              className="navbar-brand fw-bold"
              href="#page-top"
              style={{ fontSize: 25 }}
            >
              Univap⚡
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="bi-list"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                <li className="nav-item">
                  <a className="nav-link me-lg-3" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-lg-3" href="#download">
                    Download
                  </a>
                </li>
              </ul>
              <button
                className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
                data-bs-toggle="modal"
                data-bs-target="#feedbackModal"
              >
                <span className="d-flex align-items-center">
                  <i className="bi-chat-text-fill me-2"></i>
                  <span className="small">Send Feedback</span>
                </span>
              </button>
            </div>
          </div>
        </nav>
        {/* <!-- Mashead header--> */}

        <Grid
          container
          sm={12}
          md={12}
          lg={12}
          padding={"5%"}
          style={{ marginTop: 110, marginBottom: 30 }}
        >
          {/* gridTexts */}

          <Grid container sm={12} md={6} lg={6}>
            <h1
              // variant={"h1"}
              style={{
                fontFamily: MontserratFam,
                fontWeight: "700",
                // fontSize: 74,
              }}
            >
              Bioenergia.
              <br />
              A energia que move o mundo!
              <br />
              📡🌎
            </h1>

            <div style={{ marginTop: 2 }}>
              <p
                style={{
                  fontFamily: MontserratFam,
                  fontWeight: 500,
                  fontSize: 16,
                  color: "#91878f",
                }}
                // className="lead fw-normal text-muted mb-5"
              >
                Quem construiu, qual foi a sua necessidade e porque ele é tão
                benéfico a nossa sociedade? Essas são perguntas que sanaremos
                logo abaixo :)
              </p>
            </div>
          </Grid>

          {/* gridimage */}
          <Grid
            container
            sm={12}
            md={6}
            lg={6}
            style={{
              justifyContent: "center",
            }}
          >
            <img
              style={{
                alignSelf: "center",
                height: "100%",
                width: "100%",
              }}
              src="/assets/img/homePageFirstPart.png"
              alt="..."
            />
          </Grid>
        </Grid>

        {/* <!-- Quote/testimonial aside--> */}
        <aside className="text-center bg-gradient-primary-to-secondary">
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xl-8">
                <div className="h2 fs-1 text-white mb-4">
                  Conceito: energia renovável que é obtida do processamento de
                  matéria formada por um processo mecânico ou biológico.
                </div>
                <Image
                  style={{ paddingTop: 10 }}
                  height={100}
                  width={200}
                  src="/assets/img/UnivapTransparentLogo.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </aside>

        {/* <!-- App features section--> */}
        <Grid sm={12} md={12} lg={12} container style={{ padding: "3%" }}>
          <Grid container sm={12} md={6} lg={6} columns={2}>
            <Grid
              sm={12}
              md={6}
              lg={6}
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Lottie
                options={defaultOptionsCleanCity}
                height={"20rem"}
                width={"20rem"}
              />
            </Grid>

            {/* Components */}
            <Grid
              sm={12}
              md={6}
              lg={6}
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              {/* coluna1 */}
              <Grid sm={12} md={6} lg={6} container style={{}}>
                <Grid sm={12} container px={2}>
                  <InformationCard
                    Title={"Device Modal"}
                    Subtitle="This section is perfect for featuring some information about your
            application, why it was built, the problem it solves, or anything
            else! Theres plenty of space for text here, so dont worry about
            writing too much."
                  />
                </Grid>

                <Grid sm={12} container px={2}>
                  <InformationCard
                    Title={"Device Modal"}
                    Subtitle="This section is perfect for featuring some information about your
            application, why it was built, the problem it solves, or anything
            else! Theres plenty of space for text here, so dont worry about
            writing too much."
                  />
                </Grid>
              </Grid>

              {/* coluna2 */}
              <Grid sm={12} md={6} lg={6} container style={{}}>
                <Grid sm={12} container px={2}>
                  <InformationCard
                    Title={"Device Modal"}
                    Subtitle="This section is perfect for featuring some information about your
            application, why it was built, the problem it solves, or anything
            else! Theres plenty of space for text here, so dont worry about
            writing too much."
                  />
                </Grid>

                <Grid sm={12} container px={2}>
                  <InformationCard
                    Title={"Device Modal"}
                    Subtitle="This section is perfect for featuring some information about your
            application, why it was built, the problem it solves, or anything
            else! Theres plenty of space for text here, so dont worry about
            writing too much."
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* <!-- Basic features section--> */}
        <section className="bg-light">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
              <div className="col-12 col-lg-5">
                <h2 className="display-4 lh-1 mb-4">
                  Enter a new age of web design
                </h2>
                <p className="lead fw-normal text-muted mb-5 mb-lg-0">
                  This section is perfect for featuring some information about
                  your application, why it was built, the problem it solves, or
                  anything else! Theres plenty of space for text here, so dont
                  worry about writing too much.
                </p>
              </div>
              <div className="col-sm-8 col-md-6">
                <div className="px-5 px-sm-0">
                  {/* <Lottie options={defaultOptions} height={200} width={200} /> */}
                  {/* <Image
                    height={300}
                    width={300}
                    className="img-fluid"
                    src="/assets/img/google-play-badge.svg"
                    alt="mao"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Call to action section--> */}
        <section className="cta">
          <div className="cta-content">
            <div className="container px-5">
              <h2 className="text-white display-1 lh-1 mb-4">
                Stop waiting.
                <br />
                Start building.
              </h2>
              <a
                className="btn btn-outline-light py-3 px-4 rounded-pill"
                // href="https://startbootstrap.com/theme/new-age" target="_blank"
              >
                Download for free
              </a>
            </div>
          </div>
        </section>
        {/* <!-- App badge section--> */}
        <section className="bg-gradient-primary-to-secondary" id="download">
          <div className="container px-5">
            <h2 className="text-center text-white font-alt mb-4">
              Get the app now!
            </h2>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
              <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                {/* <Image
                  height={300}
                  width={300}
                  // className="app-badge"
                  src="/assets/img/google-play-badge.svg"
                  alt="..."
                /> */}
              </a>
              <a href="#!">
                {/* <Image
                  height={300}
                  width={300}
                  // className="app-badge"
                  src="/assets/img/app-store-badge.svg"
                  alt="..."
                /> */}
              </a>
            </div>
          </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="bg-black text-center py-5">
          <div className="container px-5">
            <div className="text-white-50 small">
              <div className="mb-2">
                &copy; Your Website 2022. All Rights Reserved.
              </div>
              <a href="#!">Privacy</a>
              <span className="mx-1">&middot;</span>
              <a href="#!">Terms</a>
              <span className="mx-1">&middot;</span>
              <a href="#!">FAQ</a>
            </div>
          </div>
        </footer>
        {/* <!-- Feedback Modal--> */}
        <div
          className="modal fade"
          id="feedbackModal"
          tabindex="-1"
          aria-labelledby="feedbackModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-gradient-primary-to-secondary p-4">
                <h5
                  className="modal-title font-alt text-white"
                  id="feedbackModalLabel"
                >
                  Send feedback
                </h5>
                <button
                  className="btn-close btn-close-white"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body border-0 p-4">
                {/* <!-- * * * * * * * * * * * * * * *--> */}
                {/* <!-- * * SB Forms Contact Form * *--> */}
                {/* <!-- * * * * * * * * * * * * * * *--> */}
                {/* <!-- This form is pre-integrated with SB Forms.--> */}
                {/* <!-- To make this form functional, sign up at--> */}
                {/* <!-- https://startbootstrap.com/solution/contact-forms--> */}
                {/* <!-- to get an API token!--> */}
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  {/* <!-- Name input--> */}
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      data-sb-validations="required"
                    />
                    <label for="name">Full name</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="name:required"
                    >
                      A name is required.
                    </div>
                  </div>
                  {/* <!-- Email address input--> */}
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      data-sb-validations="required,email"
                    />
                    <label for="email">Email address</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required"
                    >
                      An email is required.
                    </div>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:email"
                    >
                      Email is not valid.
                    </div>
                  </div>
                  {/* <!-- Phone number input--> */}
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      data-sb-validations="required"
                    />
                    <label for="phone">Phone number</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required"
                    >
                      A phone number is required.
                    </div>
                  </div>
                  {/* <!-- Message input--> */}
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      type="text"
                      placeholder="Enter your message here..."
                      style={{ height: 10 }}
                      data-sb-validations="required"
                    ></textarea>
                    <label for="message">Message</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                  {/* <!-- Submit success message--> */}
                  {/* <!----> */}
                  {/* <!-- This is what your users will see when the form--> */}
                  {/* <!-- has successfully submitted--> */}
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Form submission successful!
                      </div>
                      To activate this form, sign up at
                      <br />
                      <a href="https://startbootstrap.com/solution/contact-forms">
                        https://startbootstrap.com/solution/contact-forms
                      </a>
                    </div>
                  </div>
                  {/* <!-- Submit error message--> */}
                  {/* <!----> */}
                  {/* <!-- This is what your users will see when there is--> */}
                  {/* <!-- an error submitting the form--> */}
                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>
                  {/* <!-- Submit Button--> */}
                  <div className="d-grid">
                    <button
                      className="btn btn-primary rounded-pill btn-lg disabled"
                      id="submitButton"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Header;
