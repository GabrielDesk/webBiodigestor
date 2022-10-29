import React from "react";
import { Main, Section, Sticky } from "../../../styles/styles";

import { motion } from "framer-motion";

import FirstAndSecond from "../../components/FirstAndSecond";

const Header = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          padding: "10%",
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: "red",
          // border: "4px solid #fff",
        }}
      >
        <div
          style={
            {
              // border: "4px solid #fff",
            }
          }
        >
          <div
            style={{
              backgroundColor: "yellow",
              height: "25vh",
              width: "25vh",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Header;
