import React from 'react'
import { styles } from '../styles';
import  {SectionWrapper}
from '../hoc/index'
const About = () => {
  return (
   <>
   <p className={styles.sectionSubText}>
    Introduction</p>
    <h2 className={`${styles.sectionHeadText} mb-6 `}>
      Overview.
    </h2>
    <ul className='list-disc'>  
    <li className='mb-2 text-white font-semibold'>I am a Frontend Developer passionate about creating responsive and user-friendly websites.
</li> 
      <li className='mb-2 text-white font-semibold'>   My skills include React, Next.js, Tailwind CSS, and JavaScript.


        </li> 
        <li className='text-white mb-2 font-semibold'> I also have experience with Node.js, MongoDB, and Figma.

</li>
<li className='text-white mb-2 font-semibold'>This gives me a solid understanding of both frontend and backend development.

</li>
<li className='text-white mb-2 font-semibold'> Currently, I’m excited to learn 3D web development to build immersive experiences.</li>
</ul>
   </>
  )
}

export default SectionWrapper(About,"about")