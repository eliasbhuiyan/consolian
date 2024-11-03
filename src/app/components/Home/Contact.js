"use client"
import React, { useState } from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

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
        <section className="flex flex-col items-center justify-center p-10">
            <h1 className="text-5xl font-bold mb-10">Get in touch</h1>
            <div className="container flex">
                <form className="flex flex-col w-1/2" onSubmit={handleSubmit} method="POST">
                    <label className="block mb-2" htmlFor="name">
                        Name
                    </label>
                    <input onChange={handleChange} value={formData.name} className="block w-full px-4 py-2 mb-3 text-xl text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" type="text" name="name" id="name" />
                    <label className="block mb-2" htmlFor="email">
                        Email
                    </label>
                    <input onChange={handleChange} value={formData.email} className="block w-full px-4 py-2 mb-3 text-xl text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" type="email" name="email" id="email" />
                    <label className="block mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input onChange={handleChange} value={formData.phone} className="block w-full px-4 py-2 mb-3 text-xl text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" type="tel" name="phone" id="phone" />
                    <label className="block mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea onChange={handleChange} value={formData.message} className="block w-full px-4 py-2 mb-3 text-xl text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" name="message" id="message" rows="5"></textarea>
                    <button className="block w-full px-4 py-2 text-xl font-semibold text-white bg-indigo-600 border border-indigo-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" type="submit">Send</button>
                </form>
                <div className="flex items-center justify-center mt-10">
                    <div class="social-login-icons">
                        <div class="socialcontainer">
                            <div class="eb-icon social-icon-1-1">
                                <FaGithub className='text-4xl'/>

                            </div>
                            <div class="social-icon-1">
                                <FaGithub className='text-4xl'/>
                            </div>
                        </div>
                        <div class="socialcontainer">
                            <div class="eb-icon social-icon-2-2">
                                <FaWhatsapp className='text-4xl'/>
                            </div>
                            <div class="social-icon-2">
                                <FaWhatsapp className='text-4xl'/>
                            </div>
                        </div>
                        <div class="socialcontainer">
                            <div class="eb-icon social-icon-3-3">
                                <FaLinkedin className='text-4xl'/>
                            </div>
                            <div class="social-icon-3">
                                <FaLinkedin className='text-4xl'/>
                            </div>
                        </div>
                        <div class="socialcontainer">
                            <div class="eb-icon social-icon-4-4">
                                <FaFacebook className='text-4xl'/>
                            </div>
                            <div class="social-icon-4">
                                <FaFacebook className='text-4xl'/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
