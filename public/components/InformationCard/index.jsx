import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InformationCard = ({ Title = "", Subtitle = "" }) => {
  const [selectedId, setSelectedId] = useState(null);
  const subtitle = "Ola meu bem!";
  const title = "Ola meu bem!";
  const id = 1;

  return (
    <>
      <div
        style={{
          maxWidth: "100vw",
          maxHeight: "50vh",
          boxShadow: "2px 4px 9px #FFCFDF",
          borderRadius: 10,
          padding: "5%",
          margin: "5% 2% 5% 0",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            paddingTop: "2%",
            // backgroundColor: "black",
            // alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#2937f0",
            }}
          >
            {Title}
          </p>

          <div
            style={{
              backgroundColor: "grey",
              borderRadius: 24,
              height: 24,
              width: 24,
            }}
          />
        </div>

        <div
          style={{
            marginTop: 10,
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
            }}
          >
            {Subtitle}
          </p>
        </div>
      </div>{" "}
    </>
  );
};

export default InformationCard;
