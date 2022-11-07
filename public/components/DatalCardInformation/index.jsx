import { Grid } from "@mui/material";
import React, { useState } from "react";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const DataCardInformation = ({ Item = {} }) => {
  return (
    <>
      <Grid
        container
        sm={12}
        md={12}
        lg={12}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          item
          sm={12}
          md={12}
          lg={12}
          style={{
            width: "100%",
            height: "30rem",
            boxShadow: "2px 4px 9px #FFCFDF",
            borderRadius: 5,
            padding: "5%",
            margin: "5% 2% 5% 0",
            backgroundColor: "#fff",
          }}
        >
          <Grid
            container
            sm={12}
            md={12}
            lg={12}
            styles={{
              justifyContent: "center",
            }}
          >
            <iframe
              width="100%"
              height="400vh"
              style={{ borderRadius: 10 }}
              src="https://www.youtube.com/embed/nY8UU20Xg18"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DataCardInformation;
