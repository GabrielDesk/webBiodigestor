/* eslint-disable */
/* eslint quotes: ["error", "double"], curly: 2 */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

import { motion, AnimatePresence } from "framer-motion";
import COLORS from "../../constants/COLORS";

const CuriositiesCard = ({ Item = {} }) => {
  const [selectedId, setSelectedId] = useState(null);
  const subtitle = "Ola meu bem!";
  const title = "Ola meu bem!";

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: 380,
          backgroundColor: COLORS.WHITE_DEFAULT,
          boxShadow: "2px 2px 2px #fff",
          borderRadius: 10,
          padding: "5%",
          margin: "5% 2% 5% 0",
        }}
      >
        <div
          style={{
            maxWidth: "100vw",
            maxHeight: "40vh",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                maxWidth: "90%",
                paddingTop: 10,
                maxHeight: "10vh",
              }}
            >
              <p
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#2937f0",
                }}
              >
                {Item.Title}
              </p>
            </div>

            <div style={{ margin: 10 }}>
              {/* <FontAwesomeIcon icon="fa-regular fa-bolt" /> */}
              <FontAwesomeIcon color="#2937f0" icon={faInfo} size={"2x"} />
            </div>
          </div>

          {/* Separator */}
          <div
            style={{
              marginTop: 5,
              // marginBottom: ,
              height: 0.2,
              backgroundColor: "#C4BDB7",
              opacity: 0.4,
              marginVertical: "3%",
            }}
          />

          <div
            style={{
              paddingTop: "5%",
            }}
          >
            <p
              style={{
                fontSize: 16,
                color: "#91878f",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-ms-flexbox",
                lineHeight: 1.5 /* fallback */,
                // maxHeight: "9ch" /* fallback */,
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                textAlign: "justify",

                //  -webkit-line-clamp: 2, /* number of lines to show */
                //  -webkit-box-orient: vertical,
              }}
            >
              {Item.Subtitle}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CuriositiesCard;
