import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const ContactPopup = () => {
    return (
        <div className='fixed top-20 left-10 z-50 flex flex-col gap-2'>
            <Link href="/" className='Btn'>
                <span className="svgContainer">
                    <FaWhatsapp className='text-white text-3xl' />
                </span>
                <span className="BG bg-[#25D366]"></span>
            </Link>
            <Link href="/" className='Btn'>
                <span className="svgContainer">
                    <FaLinkedin className='text-white text-3xl' />
                </span>
                <span className="BG bg-[#0077B5]"></span>
            </Link>
            <Link href="/" className='Btn'>
                <span className="svgContainer">
                    <FaGithub className='text-white text-3xl' />
                </span>
                <span className="BG bg-primary"></span>
            </Link>

        </div>
    )
}

export default ContactPopup