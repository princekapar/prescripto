import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='mt-10  flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>

        <img className='w-full md:max-w-[360px] border-none rounded' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>123 Healthcare Street, Medical City</p>
          <p className='text-gray-500'>Phone: (123) 456-7890</p>
          <p className='text-gray-500'>Email: info@prescripto.com</p>
          <p className='font-semibold text-lg text-gray-600'>CARRERS AT PRESCRIPTO</p>
          <p className='text-gray-500'>We're always looking for talented professionals to join our team. <br /> Check out our open positions and apply today!</p>
          <button className='border rounded-xl border-primary-blue px-8 py-4 text-sm hover:bg-primary-blue hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
