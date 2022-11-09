/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Script from "next/script";
import Lottie from "react-lottie";
import { Grid, Typography, Unstable_Grid2 } from "@mui/material";

// animations
import animationData from "../../../public/assets/lotties/saveEnergyPlug.json";
import animationDataGreenEnergy from "../../../public/assets/lotties/greenEnergy.json";
import animationDataCleanCity from "../../../public/assets/lotties/cleanCity.json";
import animationDataHappyGuy from "../../../public/assets/lotties/HappyGuy.json";

// patterns
import InformationCard from "../../../public/components/InformationCard";
import CarouselInformation from "../../../public/components/CarouselInformation";
import DataCardInformation from "../../../public/components/DatalCardInformation/index.jsx";

// utils
import InformationCardObject from "../../../public/utils/objects/InformationCardObject";
import CuriositiesCardObject from "../../../public/utils/objects/CuriositiesCardObject";

import COLORS from "../../../public/constants/COLORS.js";
import CuriositiesCard from "../../../public/components/CuriositiesCard";

//svgs
// import CleanWorld from "../../../public/assets/img/svgs/CleanEnergyWorld.svg";
// import WomanAndEnergy from "../../../public/assets/img/svgs/WomanAndEnergyCity.svg";

const InfoCardO = InformationCardObject;
const CuriositiesO = CuriositiesCardObject;

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
      {/* Scripts */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
      <Script src="js/scripts.js" />
      <Script src="https://cdn.startbootstrap.com/sb-forms-latest.js" />
      {/* -- Scripts */}

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
                    Eletrônica
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-lg-3" href="#download">
                    2º ano A
                  </a>
                </li>
              </ul>
              <button
                className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
                data-bs-toggle="modal"
                // data-bs-target="#feedbackModal"
              >
                <span className="d-flex align-items-center">
                  <i className="bi-chat-text-fill me-2"></i>
                  <span className="small">A abertura para o futuro</span>
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
          style={{ padding: "2%", paddingBottom: "12%" }}
        >
          {/* gridTexts */}

          <Grid
            container
            sm={12}
            md={6}
            lg={6}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div style={{ marginTop: 120, width: "95%" }}>
              <h1
                style={{
                  fontWeight: "700",
                  color: COLORS.BLUE_BODY_DEFAULT,
                }}
              >
                Bioenergia.
                <br />A energia que move o mundo!
                <br />
                📡🌎
              </h1>
            </div>

            <div style={{ width: "95%" }}>
              <p
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  lineHeight: 1.8,
                  fontSize: 18,
                  color: COLORS.SUBTITLE_TEXT_DEFAULT,
                }}
              >
                Obtida por meio da biomassa, a sua utilização procede da
                produção de calor, eletricidade e combustíveis. Qual foi a sua
                necessidade e porque ela é tão benéfico a nossa sociedade? Essas
                são perguntas que sanaremos logo abaixo :)
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
              alignSelf: "end",
            }}
          >
            {/* <CleanWorld
              style={{
                height: "100%",
                width: "100%",
              }}
            /> */}
            <img
              style={{ height: "100%", width: "100%" }}
              src="/assets/img/svgs/CleanEnergyWorld.svg"
              alt="Clean World"
            />
          </Grid>
        </Grid>

        {/* <!-- 3 - Concept section --> */}
        <aside className="text-center bg-gradient-primary-to-secondary">
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xl-8">
                <div className="h2 fs-1 text-white mb-4">
                  Conceito de bioenergia: Energia renovável que é obtida do
                  processamento de matéria formada por um processo mecânico ou
                  biológico.
                </div>
                <img
                  style={{ height: "90px", width: "190px", paddingTop: 10 }}
                  src="/assets/img/UnivapTransparentLogo.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </aside>

        {/* <!-- 4 - Cards Section --> */}
        <Grid sm={12} md={12} lg={12} container style={{}}>
          <Grid container sm={12} md={6} lg={6} columns={2}>
            <Grid
              sm={12}
              md={6}
              lg={6}
              container
              alignItems={"end"}
              justifyContent={"center"}
            >
              {/* <WomanAndEnergy
                style={{
                  height: "90%",
                  width: "90%",
                }}
              /> */}
              <img
                style={{
                  height: "90%",
                  width: "90%",
                }}
                src="/assets/img/svgs/CleanEnergyWorld.svg"
                // src="/assets/img/svgs/WomanAndEnergyCity.svg"
                alt="Take care of the world!"
              />
            </Grid>

            {/* Components */}
            <Grid
              sm={12}
              md={6}
              lg={6}
              container
              style={{}}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 15,
                  textAlign: "right",
                  marginBottom: "-2%",
                  marginTop: "4%",
                  width: "100%",
                }}
              >
                <h1
                  style={{
                    width: "100%",

                    fontWeight: "700",
                    color: COLORS.BLUE_BODY_DEFAULT,
                  }}
                >
                  Quais são seus benefícios?
                </h1>
              </div>

              {/* coluna1 */}
              <Grid sm={12} md={6} lg={6} container style={{}}>
                <Grid sm={12} container px={1}>
                  <InformationCard Item={InfoCardO.InfoCard1} />
                </Grid>

                <Grid sm={12} container px={1}>
                  <InformationCard Item={InfoCardO.InfoCard2} />
                </Grid>
              </Grid>

              {/* coluna2 */}
              <Grid sm={12} md={6} lg={6} container style={{}}>
                <Grid sm={12} container px={1}>
                  <InformationCard Item={InfoCardO.InfoCard3} />
                </Grid>

                <Grid sm={12} container px={1}>
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
                    alignSelf: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: 20,
                      color: COLORS.SUBTITLE_TEXT_DEFAULT,
                      textAlign: "justify",
                      lineHeight: 1.7,
                    }}
                  >
                    O biodigestor é um equipamento que, por meio da ausência de
                    oxigénio, faz a decomposição da matéria orgânica que pode
                    ser tanto restos de alimentos como também dejetos de
                    animais, usando a pressão do gás para{" "}
                    <b>Geração De Energia</b>. Este processo de decomposição
                    ocorre por biodigestão anaeróbica.
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
          <Grid sm={12} md={12} lg={12} style={{}} container>
            {/* Curiosities Text */}
            <Grid
              style={{
                alignItems: "center",
                justifyContent: "center",
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
                  fontSize: 22,
                  fontWeight: 200,
                  textAlign: "center",
                  lineHeight: 1.5,
                  color: COLORS.WHITE_DEFAULT,
                }}
              >
                O biodigestor é basicamente uma câmara fechada, que é alimentada
                de resíduos orgânicos, essas matérias são misturadas com água,
                e, através da falta de oxigenação algumas bactérias atuam nesses
                detritos transformando-os em biogás
                <br />
                <br />
                Os principais tipos de Biodigestor são: <br />
                <b>
                  • Biodigestor: batelada.
                  <br />• Biodigestor: contínuo.
                </b>{" "}
              </p>
            </Grid>
            <Grid
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 15,
              }}
              direction={"row"}
              sm={12}
              md={12}
              lg={12}
              container
            >
              <Grid sm={12} md={3} lg={3} container px={1}>
                <CuriositiesCard Item={CuriositiesO.Curiositie1} />
              </Grid>
              <Grid sm={12} md={3} lg={3} container px={1}>
                <CuriositiesCard Item={CuriositiesO.Curiositie2} />
              </Grid>
              <Grid sm={12} md={3} lg={3} container px={1}>
                <CuriositiesCard Item={CuriositiesO.Curiositie3} />
              </Grid>
              <Grid sm={12} md={3} lg={3} container px={1}>
                <CuriositiesCard Item={CuriositiesO.Curiositie4} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/*         
        
        {/* <!-- Footer--> */}
        <footer className="bg-black text-center py-5">
          <div className="container px-5">
            <div className="text-white-50 small">
              <div className="mb-2">
                &copy; Biodigestor Website 2022. All Rights Reserved.
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
