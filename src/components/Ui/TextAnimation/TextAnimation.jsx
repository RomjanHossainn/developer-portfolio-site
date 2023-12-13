"use client"

import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from "react-text-transition";
 const TEXTS = [
   "Creative Web Developer",
   "Front-End Developer",
   "Fully Responsive Fesign",
   "User Friendly Website Desgin And Development",
 ];


const TextAnimation = () => {

     const [index, setIndex] = useState(0);

     useEffect(() => {
       const intervalId = setInterval(
         () => setIndex((index) => index + 1),
         3000 
       );
       return () => clearTimeout(intervalId);
     }, []);

    return (
      <h1 className="text-[#03A84E] mb-3 text-lg">
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h1>
    );
};

export default TextAnimation;