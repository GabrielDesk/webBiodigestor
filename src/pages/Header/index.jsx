/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Script from "next/script";
import Lottie from "react-lottie";
import { Grid, Typography, Unstable_Grid2 } from "@mui/material";

import { Montserrat } from "@next/font/google";

// animations
import animationData from "../../../public/assets/lotties/saveEnergyPlug.json";
import animationDataGreenEnergy from "../../../public/assets/lotties/greenEnergy.json";
import animationDataCleanCity from "../../../public/assets/lotties/cleanCity.json";
import animationDataHappyGuy from "../../../public/assets/lotties/HappyGuy.json";

// patterns
import InformationCard from "../../../public/components/InformationCard";
import CarouselInformation from "../../../public/components/CarouselInformation";

// data
import InformationCardObject from "../../../public/utils/objects/InformationCardObject";
import DataCardInformation from "../../../public/components/DatalCardInformation/index.jsx";
import COLORS from "../../../public/constants/COLORS.js";
import CuriositiesCard from "../../../public/components/CuriositiesCard";

const MontserratFam = Montserrat();

const InfoCardO = InformationCardObject;

const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDataHappyGuy,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsGreenEnergy = {
    loop: true,
    autoplay: true,
    animationData: animationDataGreenEnergy,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsCleanCity = {
    loop: true,
    autoplay: true,
    animationData: animationDataCleanCity,
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
        {/* <!-- 1 - Navigation--> */}
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

        {/* <!-- 2 - Intro Section header--> */}
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
                // color: "#0074BA",
                color: COLORS.BLUE_BODY_DEFAULT,
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
                  color: COLORS.SUBTITLE_TEXT_DEFAULT,
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

        {/* <!-- 3 - Concept section --> */}
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

        {/* <!-- 4 - Cards Section --> */}
        <Grid sm={12} md={12} lg={12} container style={{ padding: "2%" }}>
          <Grid container sm={12} md={6} lg={6} columns={2}>
            <Grid
              sm={12}
              md={6}
              lg={6}
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img
                className="img-fluid"
                src="/assets/img/futureLab.png"
                alt="mao"
              />
              {/* <Lottie
                options={defaultOptions}
                height={"30rem"}
                width={"30rem"}
              /> */}
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
                  <InformationCard Item={InfoCardO.InfoCard1} />
                </Grid>

                <Grid sm={12} container px={2}>
                  <InformationCard Item={InfoCardO.InfoCard2} />
                </Grid>
              </Grid>

              {/* coluna2 */}
              <Grid sm={12} md={6} lg={6} container style={{}}>
                <Grid sm={12} container px={2}>
                  <InformationCard Item={InfoCardO.InfoCard3} />
                </Grid>

                <Grid sm={12} container px={2}>
                  <InformationCard Item={InfoCardO.InfoCard4} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* <!-- 5 - Biodigestor Section --> */}
        <Grid
          sm={12}
          md={12}
          lg={12}
          container
          style={{
            background: "rgba(248, 249, 250)",
            opacity: 2,
            padding: "2%",
          }}
        >
          <Grid container sm={12} md={6} lg={6} columns={2}>
            <Grid
              sm={12}
              md={6}
              lg={6}
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              <div
                style={{
                  padding: "5%",
                  height: "100%",
                  // backgroundColor: "blue",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "center",
                    alignSelf: "center",
                    // backgroundColor: "yellow",
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "700",
                      color: COLORS.BLUE_BODY_DEFAULT,
                    }}
                  >
                    E o biodigestor, o que é?
                  </h1>
                </div>

                <div
                  style={{
                    width: "90%",
                    justifyContent: "center",
                    // display: "flex",
                    alignSelf: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: 20,
                      color: COLORS.SUBTITLE_TEXT_DEFAULT,
                      textAlign: "justify",
                      lineHeight: 1.5,
                    }}
                  >
                    O biodigestor é um equipamento que, por meio da ausência de
                    oxigénio, faz a decomposição da matéria orgânica que pode
                    ser tanto restos de alimentas camo também decretos de
                    animais. Este processa de decampasição ocorre por
                    biodigestão anaeróbica.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid
              sm={12}
              md={6}
              lg={6}
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Lottie
                options={defaultOptions}
                height={"30rem"}
                width={"30rem"}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* <!-- 6 - Slider(Carousel)/Video Image Section--> */}
        <Grid
          sm={12}
          md={12}
          lg={12}
          container
          style={{
            background: "rgb(245, 245, 245)",

            opacity: 2,
            padding: "2%",
          }}
        >
          <Grid
            container
            sm={12}
            md={6}
            lg={6}
            columns={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {/* Components */}
            <Grid sm={12} md={6} lg={6} container>
              <CarouselInformation />
            </Grid>

            <Grid
              sm={12}
              md={6}
              lg={6}
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              <DataCardInformation />
            </Grid>
          </Grid>
        </Grid>

        {/* <!-- 7 - Curiosities Section--> */}
        <Grid
          sm={12}
          md={12}
          lg={12}
          container
          style={{
            background: `linear-gradient(45deg, #2937f0, #9f1ae2)`,
          }}
        >
          <Grid
            sm={12}
            md={12}
            lg={12}
            style={
              {
                // background: "#000",
              }
            }
            container
          >
            {/* Curiosities Text */}
            <Grid
              style={{
                // background: " yellow",
                alignItems: "center",
                justifyContent: "center",
                margin: 15,
                padding: 15,
              }}
              direction={"column"}
              sm={12}
              md={12}
              lg={12}
              container
            >
              <div
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  height: 3,
                  width: "20%",
                  borderRadius: 10,
                  backgroundColor: COLORS.WHITE_DEFAULT,
                }}
              />

              <h1 style={{ color: COLORS.WHITE_DEFAULT }}>Curiosidades: </h1>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 200,
                  textAlign: "center",
                  color: COLORS.WHITE_DEFAULT,
                }}
              >
                {" "}
                beneficios o reaproveitamento do resíduo orgânico, a produção de
                fertilizantes e biogás -malefícios As desvantagens são: consumo
                de água parada{" "}
              </p>
            </Grid>
            <Grid
              style={{
                // background: " yellow",
                alignItems: "center",
                justifyContent: "center",
                margin: 15,
                padding: 15,
              }}
              direction={"row"}
              sm={12}
              md={12}
              lg={12}
              container
            >
              <Grid sm={12} md={3} lg={3} container px={2}>
                <CuriositiesCard Item={InfoCardO.InfoCard1} />
              </Grid>
              <Grid sm={12} md={3} lg={3} container px={2}>
                <CuriositiesCard Item={InfoCardO.InfoCard1} />
              </Grid>
              <Grid sm={12} md={3} lg={3} container px={2}>
                <CuriositiesCard Item={InfoCardO.InfoCard1} />
              </Grid>
              <Grid sm={12} md={3} lg={3} container px={2}>
                <CuriositiesCard Item={InfoCardO.InfoCard1} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/*         
        <section className="bg-gradient-primary-to-secondary" id="download">
          <Grid  className="container px-5">
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
        {/* </a> */}
        {/* <a href="#!"> */}
        {/* <Image
                  height={300}
                  width={300}
                  // className="app-badge"
                  src="/assets/img/app-store-badge.svg"
                  alt="..."
                /> */}
        {/* </a> */}
        {/* </div> */}
        {/* </div> */}
        {/* </section> */}

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
