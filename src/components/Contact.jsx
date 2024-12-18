import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import emailjs from '@emailjs/browser'
import { useState, useRef } from 'react'
import {EarthCanvas} from './canvas'
import { slideIn } from '../utils/motion'
import { linkedin } from '../assets'


const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      import.meta.env.VITE_REACT_APP_SERVICE_ID,
      import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Vidith',
        from_email: form.email,
        to_email: 'agarwal.vidit@northeastern.edu',
        message: form.message
      },
      import.meta.env.VITE_REACT_APP_PUBLIC_ID
    ).then(() => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }).catch((error) => {
      setLoading(false)
      console.log(error)
      alert('Something went wrong.')
    })
  }
  const handleChange = (e) => {
    const {name, value} = e.target

    setForm({...form, [name]: value})
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
      <div className="flex justify-between items-center">
        <p className={styles.sectionSubText}>Get in touch </p>
        <a
              href="https://linkedin.com/in/vidithagarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            >
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 inline-block" />
        </a>
        </div>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input onChange={handleChange} type="text" name="name" value={form.name} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input onChange={handleChange} type="text" name="email" value={form.email} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea onChange={handleChange} rows = "7" type="text" name="message" value={form.message} placeholder="What do you want to say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")