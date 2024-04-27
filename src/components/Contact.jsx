import { useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs  from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
    ...form,
      [name]: value
    })
  }
  const handleSubmit =  (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send('service_2hbto2k', 'template_5nice9l', {
      from_name: form.name,
      to_name: "Akshay",
      from_email: form.email,
      to_email: "akshaybagai52@gmail.com",
      message: form.message
    },
     '4fRVCRpe70cjx7Myt')
     .then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible");

      setForm({
        name: '',
        email: '',
        message: ''
      })
     },
     (error) => {
      setLoading(false);
      alert("Something Went Wrong");
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse
     flex gap-10 overflow-hidden'>
      <motion.div 
       variants={slideIn("left", "tween", 0.2, 1)}
       className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionHeadText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
           <label className='flex flex-col'>
            <span className='text-white font-medium 
               mb-4'>Your Name</span>
            <input type='text' name='name'
             value={form.name} onChange={handleChange}
              placeholder='What"s your name?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
                 text-white rounded-lg outline-none border-none font-medium'
             />

           </label>

           <label className='flex flex-col'>
            <span className='text-white font-medium 
               mb-4'>Your Email</span>
            <input type='email' name='email'
             value={form.email} onChange={handleChange}
              placeholder='What"s your email?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
                 text-white rounded-lg outline-none border-none font-medium'
             />

           </label>

           <label className='flex flex-col'>
            <span className='text-white font-medium 
               mb-4'>Your message</span>
            <textarea rows="7" name='message'
             value={form.message} onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
                 text-white rounded-lg outline-none border-none font-medium'
             />

           </label>
           <div className='flex justify-between'>
           <button type='submit'
            className='bg-tertiary py-3 outline-none
             font-bold shadow-md shadow-primary px-8 
              w-fit text-white'>
            {loading ? "Sending..." : "Send"}

           </button>
            <div className='flex justify-between'>
            <a href='https://github.com/Akshaybagai52' target='_blank' className='w-[50px] h-[50px]'><img src="https://i.ibb.co/NFHDHB9/github-4.png" alt="github-4" border="0" /></a>
            <a href='https://www.linkedin.com/in/akshay-bagai52/' target='_blank' className='w-[50px] h-[50px]'><img src="https://i.ibb.co/h7X5Gcr/linkedin-1.png" alt="linkedin-1" border="0" /></a>

            </div>

           </div>
           
           


        </form>

      </motion.div>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
       className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")