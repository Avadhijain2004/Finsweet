import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ContactUsSection = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <div className="py-12 md:py-16 px-4 md:px-0">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-sm md:text-base font-bold text-primary mb-2 tracking-wider">CONTACT US</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Let’s Start a Conversation</h3>
          <p className="text-sm md:text-base text-lightGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim.
          </p>
        </div>
        <div className="bg-secondary text-white p-6 md:p-8 shadow-md flex flex-col md:flex-row justify-between mb-8 md:mb-10">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h4 className="text-sm md:text-base font-thin text-offWhite border-b border-neutral-500 pb-4">Working hours</h4>
            <p className="text-lg md:text-xl mt-4 font-semibold tracking-wide">Monday To Friday</p>
            <p className="text-lg md:text-xl mt-3 font-semibold tracking-wide">9:00 AM to 8:00 PM</p>
            <p className="text-sm md:text-lg mt-3 font-thin text-offWhite">Our Support Team is available 24/7</p>
          </div>
          <div className="md:w-2/5">
            <h4 className="text-sm md:text-base font-thin text-offWhite border-b border-neutral-500 pb-4">Contact Us</h4>
            <p className="text-lg md:text-xl mt-2 font-semibold">020 7993 2905</p>
            <p className="text-sm md:text-lg font-thin text-offWhite mt-2">hello@finsweet.com</p>
          </div>
        </div>
        <form className="space-y-4 md:space-y-6">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 md:p-4 border focus:outline-none border-primary placeholder:text-primary placeholder:font-semibold"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 md:p-4 border focus:outline-none border-primary placeholder:text-primary placeholder:font-semibold"
            />
          </div>
          <div>
            <select
              className="w-full p-3 md:p-4 border focus:outline-none border-primary placeholder:text-primary placeholder:font-semibold text-primary font-semibold"
            >
              <option value="">Query Related</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 md:p-4 border focus:outline-none border-primary placeholder:text-primary placeholder:font-semibold"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-accent w-full text-primary font-bold py-3 md:py-4 px-8 shadow-md hover:bg-yellow-500 transition duration-300 text-lg md:text-xl tracking-wide"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <ContactUsSection />
    </div>
  );
};

export default Contact;
