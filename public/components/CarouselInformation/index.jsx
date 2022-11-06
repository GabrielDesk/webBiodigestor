import { Grid } from "@mui/material";
import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import CarouselInformationObj from "../../utils/objects/CarouselInformationObject.js";
import ContentSlider from "./Patterns/contentSlider/index";

const InfoContentCarousel = CarouselInformationObj;

const CarouselInformation = ({ Item = {} }) => {
  const [selectedId, setSelectedId] = useState(null);
  const subtitle = "Ola meu bem!";
  const title = "Ola meu bem!";

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <>
      <Grid
        container
        sm={12}
        md={12}
        lg={12}
        alignItems={"center"}
        justifyContent={"center"}
        style={
          {
            // display: "flex",
          }
        }
      >
        <Grid
          // container
          item
          sm={12}
          md={6}
          lg={6}
          style={{
            width: "100%",
            height: "102%",
            boxShadow: "2px 4px 9px #FFCFDF",
            borderRadius: 5,
            padding: 25,
            backgroundColor: "#fff",
          }}
        >
          <div
            styles={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Slider {...settings}>
              <div style={{ width: "100%", padding: "2%" }}>
                <ContentSlider Item={InfoContentCarousel.InfoContentSlide2} />
              </div>
              <div style={{ width: "100%", padding: "2%" }}>
                <ContentSlider Item={InfoContentCarousel.InfoContentSlide1} />
              </div>
              <div style={{ width: "100%", padding: "2%" }}>
                <ContentSlider Item={InfoContentCarousel.InfoContentSlide4} />
              </div>
              <div style={{ width: "100%", padding: "2%" }}>
                <ContentSlider Item={InfoContentCarousel.InfoContentSlide3} />
              </div>
            </Slider>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default CarouselInformation;
