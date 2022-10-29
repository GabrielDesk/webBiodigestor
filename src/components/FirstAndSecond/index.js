import React from 'react';
import { motion, useTransform, useScroll, useViewportScroll } from 'framer-motion';

import { Container } from './styles'
import { Sticky } from '../../../styles/styles'
import Image from "next/image";


import LocationImage3d from "../../images/HomePage/location3d.png";


const FirstAndSecond = () => {
  const { scrollYProgress } = useScroll();

  const frameOpacity = useTransform(scrollYProgress, [0.0, 0.198], [0, 1]);
  const frameScale   = useTransform(scrollYProgress, [0.558, 0.627], [0.551, 0.8]); 
  const frameRotate   = useTransform(scrollYProgress, [0.210, 0.627], [1, 180]); 

  return <Sticky className="second">
    {/* <First /> */}


    <motion.div 
    style={{
      position: 'absolute',
      top: 0,
      marginLeft: 90,
      right: 0,
      height: '50vh',
      borderRadius: '4px',
      border: '4px solid #fff',
      backgroundColor: "blue",
      
      // opacity: frameOpacity,
      // scale: frameScale,
      // rotate: frameRotate,
    }}
      >
        <motion.div 
        style={{
          backgroundColor: "yellow",
      height: '25%',
      alignItems: "end",
        }}>    
          <Image
              src={LocationImage3d}
              alt="Picture of the author"
              width={400}
              height={400}
              style={{
      // backgroundColor: "red",
      borderRadius: '100%',
              }}
            />
        </motion.div>
      </motion.div>
  </Sticky>
}

const First = () => {
  return  <Sticky className="fisrt"></Sticky>
}

export default FirstAndSecond