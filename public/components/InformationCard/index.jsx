import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InformationCard = ({ Title = "", Subtitle = "" }) => {
  const [selectedId, setSelectedId] = useState(null);
  const subtitle = "Ola meu bem!";
  const title = "Ola meu bem!";
  const id = 1;

  return (
    <>
      {/* {items.map(items => ( */}
      {/* <motion.div
        style={{
          // height: "50%",
          // width: "50%",
          borderRadius: 10,
          shadowColor: "#000",
          backgroundColor: "#FFF",
          position: "absolute",
          boxShadow: "2px 4px 9px #FFCFDF",
        }}
      >
        <motion.div
          className="ContainerComponent"
          layoutId={id}
          onClick={() => setSelectedId(id)}
          style={{
            //   height: "100%",
            //   width: "100%",
            //   borderRadius: 10,
            //   shadowColor: "#000",
            backgroundColor: "#FFF",
          }}
        >
          <motion.div
            style={
              {
                // position: "fixed",
                // padding: "2%",
              }
            }
          >
            <motion.h5
              style={{
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              {Title}
            </motion.h5>
          </motion.div>
          <motion.p>{Subtitle}</motion.p>
        </motion.div>
      </motion.div>
      ))} */}

      <AnimatePresence>
        {/* {selectedId && ( */}
        <motion.div
          style={{
            height: 250,
            width: 300,
            borderRadius: 10,
            shadowColor: "#FFCFDF",
            backgroundColor: "#FFF",
            position: "absolute",
            boxShadow: "2px 4px 9px #FFCFDF",
          }}
        >
          <motion.div
            className="ContainerComponent"
            layoutId={selectedId}
            style={{
              padding: "5%",
              height: "100%",
              width: "100%",
              alignItems: "center",
              borderRadius: 10,
              shadowColor: "#000",
              backgroundColor: "#FFF",
              position: "absolute",
              boxShadow: "2px 4px 9px #FFCFDF",
            }}
          >
            <motion.h5
              style={{
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              {Title}
            </motion.h5>

            {/* Separator */}
            <motion.div
              style={{
                marginTop: 15,
                height: 0.2,
                backgroundColor: "#C4BDB7",
                opacity: 0.4,
                marginVertical: "3%",
              }}
            />

            <motion.div
              style={{
                paddingTop: 10,
                alignSelf: "end",
                // paddingTop: "20%",
                paddingBottom: "1%",
                overflow: "hidden",

                maxWidth: 500,
                textOverflow: "ellipsis",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                maxHeight: 100,
                display: "-ms-flexbox",
              }}
            >
              <motion.p
                style={{
                  color: "#C4BDB7",
                  textOverflow: "ellipsis",
                  WebkitLineClamp: 1,
                }}
              >
                {Subtitle}
              </motion.p>
            </motion.div>

            {/* <motion.button
              style={{
                paddingTop: 10,
                alignSelf: "baseline",
                backgroundColor: "blue",
              }}
              onClick={() => setSelectedId(null)}
            /> */}
          </motion.div>
        </motion.div>
        {/* )} */}
      </AnimatePresence>
    </>
  );
};

export default InformationCard;
