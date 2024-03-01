import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   <footer className='bg-black text-gray-400 py-12 border-t-2 border-gray-900'>
      <div className='max-w-full mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   gap-8 px-4 sm:px-6 lg:px-8 '>
         <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
          </div>
        <div >
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Nagpur , India</p>
          <p> Maharashtra 442203</p>
          <p>Email: akshaysd592@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
       </div>
      
       <div className='text-center text-pretty  pt-8 flex justify-center items-center flex-col gap-y-1'>
        <p> Made with ❤️ by <span className='font-bold gap-3'>Akshay Dhobale</span> </p> 
        <p> @ 2024 Music School , All rights reserved.</p>  
       </div>
   </footer>
  )
}

export default Footer