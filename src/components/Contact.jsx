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
           <button type='submit'
            className='bg-tertiary py-3 outline-none
             font-bold shadow-md shadow-primary px-8 
              w-fit text-white'>
            {loading ? "Sending..." : "Send"}

           </button>
           <a href='' className='w-[40px] h-[40px]'><svg enable-background="new 0 0 512 512" height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path clip-rule="evenodd" d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z" fill="#0D2636" fill-rule="evenodd"/></g></svg></a>

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