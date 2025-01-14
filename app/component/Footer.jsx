import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            gourab.biit@gmail.com
            <Image src={assets.dail} alt='' className='w-6'/>
            <a href="tel:+919775425851" className='hover:text-gray-600'>9775425851</a> 
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@ 2025 Gourab Das.All rights reserved</p>
        <ul className='flex item-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='blank'href='https://github.com/Ggit7'>GitHub</a></li>
            <li><a target='blank'href='https://www.linkedin.com/in/gourab-das-892222165?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBGTVv8X4RZGktB30a1H6UA%3D%3D'>Linkdin</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
