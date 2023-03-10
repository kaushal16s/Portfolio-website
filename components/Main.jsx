import React from 'react'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
const Main=()=> {
  return (
    
    <motion.div 
    initial={{
      x:-500,
      opacity:0,
      scale:0.5,
    }}
    animate={{
      x:0,
      opacity:1,
      scale:1,
    }}
    transition={{
      duration:1.5,
    }}
    className='w-full h-screen text-center'>
      
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
             <div>
              
             <p className='uppercase text-lg
             tracking-[20px] text-stone-200'>PORTFOLIO
             </p>
             
             <h1 className='py-4 text-stone-100 font-mono'>
                Hi, I'm <span className='text-[gold] font-'>KAUSHAL</span>
             </h1>
             <h1 className='py-2 text-stone-100 text-6xl'> Front-End Developer</h1>
             <p></p>
            </div> 
              
        </div>
      </motion.div>
    
  )
}

export default Main
