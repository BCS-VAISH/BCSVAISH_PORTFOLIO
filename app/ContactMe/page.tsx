'use client';

import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import ContactForm from "@/components/contactForm";



export default function ContactMe() {
  return (
    <main className="min-h-screen font-sans text-gray-800 dark:text-white bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative">
      
     

      {/* Contact Form Section */}
      <div className="p-4 max-w-3xl mx-auto">
        <ContactForm />
      </div>
      
       <div className="mt-12 flex flex-wrap justify-center gap-6 text-lg text-gray-700 dark:text-gray-300">
              <a href="https://www.linkedin.com/in/baskaran-vaishnavan-ab764522a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
                <FaLinkedin />
              </a>
              <a href="https://github.com/BCS-VAISH" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-800 dark:hover:text-white">
                <FaGithub />
              </a>
              <a href="https://twitter.com/Bcsvaish14" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://wa.me/+94773668707" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-500">
                <FaWhatsapp />
              </a>
              <a href="mailto:bcsvaish0000@gmail.com" className="flex items-center gap-2 hover:text-red-500">
                <MdEmail />
              </a>
              <span className="flex items-center gap-2">
                <MdLocationOn /> Jaffna,Sri Lanka.
              </span>
              <a href="https://www.instagram.com/bcs_vaish?igsh=MWlucXh3bXg3NWNqeg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-600">
                <FaInstagram />
              </a>
            </div>

           
    </main>
  );
}
