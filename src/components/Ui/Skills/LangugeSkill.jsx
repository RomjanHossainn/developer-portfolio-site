
"use client"

import { useEffect, useState } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

const LangugeSkill = () => {


    const [progress, setProgress] = useState(10);

   useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 80 ? 0 : prevProgress + 10
        );
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <div className="w-[300p]">
        <CircularProgressWithLabel  value={progress} />
      </div>
    );

};

export default LangugeSkill;