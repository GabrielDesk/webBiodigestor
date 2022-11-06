import React, { useState, useEffect, useRef } from "react";
import COLORS from "../../../../../public/constants/COLORS.js";

const ContentSlider = ({ Item = {} }) => {
  return (
    <div style={{ marginTop: 20, justifyContent: "space-evenly" }}>
      <img
        style={{
          alignSelf: "center",
          height: "100%",
          width: "100%",
        }}
        src={Item.ImageSrc}
        alt=""
      />
      <div style={{ alignItems: "center", justifyContent: "center" }}>
        <div style={{ marginTop: 2 }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: 26,
              textAlign: "center",
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
              fontSize: 16,
              textAlign: "justify",

              color: COLORS.SUBTITLE_TEXT_DEFAULT,
            }}
          >
            {Item.Subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSlider;
