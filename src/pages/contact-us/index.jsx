import { useState } from 'react';
import greenSquares from '@/assets/squares-green.png';
import orangeSquares from '@/assets/squares-orange.png';
import dots from '@/assets/dots.png';
import youtube from '@/assets/youtube.png';
import facebook from '@/assets/facebook2.png';
import twitter from '@/assets/twitter2.png';
import instagram from '@/assets/instagram.png';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setResponseMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        const errorData = await res.json();
        setResponseMessage(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-full relative overflow-hidden pb-12">
      {/* Decorative elements */}
      <img src={greenSquares} alt='' className='absolute -bottom-12 left-0 z-0' />
      <img src={orangeSquares} alt='' className='absolute -bottom-12 right-0 z-0' />
      <img src={dots} alt='' className='absolute top-10 right-48 z-0' />
      <img src={dots} alt='' className='absolute bottom-24 left-56 z-0' />

      <div className='relative z-10 px-10 shadow-lg w-[60%] mx-auto my-28 py-12 bg-white rounded-md'>
        <h1 className='text-2xl text-primary font-semibold underline text-center pb-6'>Contact Us</h1>
        <div className='flex justify-between items-start gap-4 mt-6'>
          <div className="w-1/2 pr-6">
            <p className="font-semibold text-lg text-black mb-6 text-left">Leave us a message</p>

            <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} bg-white rounded px-4 py-3 outline-none focus:border-primary`}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} bg-white rounded px-4 py-3 outline-none focus:border-primary`}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} bg-white rounded px-4 py-3 outline-none focus:border-primary resize-none`}
              />
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 mt-6 rounded-md font-semibold hover:bg-primary-dark transition-all disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
              {responseMessage && (
                <p className={`mt-4 text-sm ${responseMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                  {responseMessage}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className='w-1/2 mt-10'>
            <div className='pl-6'>
              <p className="font-bold text-lg mb-1">Weekend UX</p>
              <p className='whitespace-break-spaces text-sm mb-4'>
                No. 10 Wuse 2, <br /> Abuja, Nigeria
              </p>

              <a href="tel:+2348144020781" className="text-primary underline block mb-1 hover:text-primary-dark transition">
                +2348144020781
              </a>
              <a href="mailto:kaytorah55@gmail.com" className="text-primary underline block hover:text-primary-dark transition">
                kaytorah55@gmail.com
              </a>

              <div className='flex items-center gap-6 mt-4'>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <img src={youtube} alt='YouTube' />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt='Instagram' />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt='Facebook' />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt='Twitter' />
                </a>
              </div>
            </div>

            <div className='mt-8 pl-6'>
              <iframe
                title="Weekend UX Location - Abuja"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.506129267131!2d7.488380675936353!3d9.07434439099556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b0c2a3b5533%3A0xb6ce239b06f427eb!2sWuse%202%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1719374567890!5m2!1sen!2sng"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
