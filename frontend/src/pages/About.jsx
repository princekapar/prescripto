import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>

      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] border-none rounded' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At Prescripto, we believe that accessing quality healthcare should be simple, fast, and stress-free. Our platform is designed to connect patients with trusted and experienced doctors, making it easy to book appointments from the comfort of your home. Whether it’s a routine check-up or a specific medical concern, Prescripto helps you find the right specialist without the hassle.</p>
          <p>We focus on providing a seamless scheduling experience tailored to your needs. With flexible time slots and a user-friendly interface, you can choose appointments that fit your schedule perfectly. Prescripto ensures that every consultation is well-organized, allowing patients to communicate their concerns clearly and receive timely medical guidance.</p>
          <b className='text-gray-800'>Our Vision </b>
          <p>Our mission is to bridge the gap between patients and healthcare professionals by building a reliable and efficient digital healthcare ecosystem. By bringing together experienced doctors and modern technology, Prescripto empowers users to make informed health decisions and receive expert care whenever they need it.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary-blue hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Our streamlined process saves you time and reduces the hassle of traditional healthcare scheduling.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary-blue hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
           <b>CONVENIENCE:</b>
          <p>Access healthcare services from the comfort of your home with our user-friendly platform.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary-blue hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
           <b>PERSONALIZATION:</b>
          <p>We tailor our services to meet your unique healthcare needs, ensuring a customized experience.</p>
        </div>
      </div>


    </div>
  )
}

export default About
