import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { technologies } from '../constants'
import {BallCanvas} from './canvas'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech, index) => (
        <div className='w-28 h-28' key={tech.name}>
          <BallCanvas icon = {tech.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")