import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { textVariant } from '../utils/motion'

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Experience, "work")