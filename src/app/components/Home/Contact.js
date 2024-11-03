"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io5';
import { LuHeartHandshake } from "react-icons/lu";
import { RiWhatsappFill } from 'react-icons/ri';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await fetch('https://formspree.io/f/mrgwwzbg', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus('Message sent successfully');
                setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
            } else {
                setStatus('Failed to send message');
            }
        } catch (error) {
            setStatus('An error occurred. Please try again.');
        }
    };
    return (
        <section className="flex flex-col items-center justify-center p-10 bg-basic">
            <h1 className="text-5xl font-bold mb-10 flex flex-col items-center gap-2 text-slate-700"><LuHeartHandshake /> <span>Get in touch</span></h1>
            <div className="container flex gap-10 items-center">
                <form className="flex flex-col w-1/2" onSubmit={handleSubmit} method="POST">
                    <label className="block mb-2" htmlFor="name">
                        Name <span className='text-red-500'>*</span>
                    </label>
                    <input required onChange={handleChange} value={formData.name} className="block w-full px-4 py-2 mb-3 text-xl text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" type="text" name="name" id="name" />
                    <label className="block mb-2" htmlFor="email">
                        Email <span className='text-red-500'>*</span>
                    </label>
                    <input required onChange={handleChange} value={formData.email} className="block w-full px-4 py-2 mb-3 text-xl text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" type="email" name="email" id="email" />
                    <label className="block mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input onChange={handleChange} value={formData.phone} className="block w-full px-4 py-2 mb-3 text-xl text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" type="tel" name="phone" id="phone" />
                    <label className="block mb-2" htmlFor="message">
                        Message <span className='text-red-500'>*</span>
                    </label>
                    <textarea required onChange={handleChange} value={formData.message} className="block w-full px-4 py-2 mb-3 text-xl text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" name="message" id="message" rows="5"></textarea>
                    <button className="block w-full px-4 py-2 text-xl font-semibold text-white bg-indigo-600 border border-indigo-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" type="submit">Send</button>
                </form>
                <div className='w-1/2'>
                    <h3 className="text-5xl font-bold mb-5 text-slate-600">It’s time to build something exciting!</h3>
                    <p className='text-xl text-primary'>I&apos;d love to hear from you and explore how we can collaborate on exciting projects or discuss any questions you might have. Whether you&apos;re an aspiring client looking to bring your digital dreams to life or a fellow developer interested in sharing knowledge, my virtual door is always open. Please feel free to reach out me.Let&apos;s engage in a conversation about your ideas and how we can turn them into digital realities. I&apos;m eager to connect and explore the endless possibilities of the web together.
                    </p>
                    <div class="social-login-icons">
                        <div class="socialcontainer">
                            <div class="eb-icon social-icon-1-1">
                                <FaGithub className='text-4xl cursor-pointer' />
                            </div>
                            <div class="social-icon-1">
                                <Link href="/" target='_blank'><FaGithub className='text-4xl' /></Link>
                            </div>
                        </div>
                        <div class="socialcontainer">
                            <div class="eb-icon social-icon-2-2">
                                <RiWhatsappFill className='text-5xl text-[#25D366] cursor-pointer' />
                            </div>
                            <div class="social-icon-2">
                                <Link href="/" target='_blank'><RiWhatsappFill className='text-4xl' /></Link>
                            </div>
                        </div>
                        <div class="socialcontainer">
                            <div class="eb-icon social-icon-3-3">
                                <FaLinkedin className='text-4xl text-[#0077B5] cursor-pointer' />
                            </div>
                            <div class="social-icon-3">
                                <Link href="/" target='_blank'><FaLinkedin className='text-4xl' /></Link>
                            </div>
                        </div>
                        <div class="socialcontainer">
                            <div class="eb-icon social-icon-4-4">
                                <FaFacebook className='text-4xl text-[#1877F2] cursor-pointer' />
                            </div>
                            <div class="social-icon-4">
                                <Link href="/" target='_blank'><FaFacebook className='text-4xl' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
