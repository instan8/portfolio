import React from 'react'
import {BallCanvas} from './canvas';
import {
SectionWrapper
} from '../hoc';
import {motion} from 'framer-motion';
import {technologies} from '../constants';
import {styles} from '../styles';
import {textVariant} from '../utils/motion';
const Tech = () => {
  return (
    <>  
     <motion.div variants={textVariant()}> 
    <p className={styles.heroSubText}>What I Learn So Far</p>
    <p className={styles.heroHeadText}>My Stack </p>
     </motion.div>
   <div className=" mt-20 grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-10">
  {technologies.map((technology) => (
    <div
      key={technology.name}
      className="flex flex-col items-center justify-center gap-2 min-w-[80px]"
    >
      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#1d1836] flex justify-center items-center">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10 object-contain"
        />
      </div>
      <p className="text-center text-sm sm:text-base">{technology.name}</p>
    </div>
  ))}
</div>
</>

  )
}

export default SectionWrapper(Tech,"");