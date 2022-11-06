import { Grid } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import COLORS from "../../../../../public/constants/COLORS.js";

const ContentSlider = ({ Item = {} }) => {
  return (
    <Grid
      container
      sm={12}
      md={12}
      lg={12}
      style={{
        padding: "2%",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "90%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            alignSelf: "center",
            height: "100%",
            width: "100%",
          }}
          src={Item.ImageSrc}
          alt=""
        />
      </div>
      <Grid
        item
        style={{
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: 2 }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: 24,
              color: COLORS.BLUE_BODY_DEFAULT,
            }}
          >
            {Item.Title}
          </p>
        </div>
        <div style={{ marginTop: 2 }}>
          <p
            style={{
              fontWeight: 500,
              fontSize: 14,
              textAlign: "justify",
              color: COLORS.SUBTITLE_TEXT_DEFAULT,
            }}
          >
            {Item.Subtitle}
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default ContentSlider;
