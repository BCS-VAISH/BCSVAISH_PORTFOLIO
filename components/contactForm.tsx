'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullname || !email || !message) {
      setError(["All fields are required."]);
      setSuccess(false);
      return;
    }

    const templateParams = {
      from_name: fullname,
      from_email: email,
      message,
    };

    try {
      const res = await emailjs.send(
        "service_hd47imn",   
        "template_e5b9z6i",  
        templateParams,
        "Z8CyUSeV9zmY19KFb"   
      );

      console.log("SUCCESS:", res.status, res.text);
      setSuccess(true);
      setError([]);
      setFullname("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("FAILED:", err);
      setError(["Failed to send message. Try again later."]);
      setSuccess(false);
    }
  };

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center mb-8"
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-xl mx-auto flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fullname" className="block mb-1 font-medium">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="john@gmail.com"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Your Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            id="message"
            placeholder="Type your message here..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition h-32 resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-md font-bold hover:opacity-90 transition"
        >
          Send ✉️
        </button>
      </motion.form>

      <div className="mt-4 max-w-xl mx-auto">
        {error.length > 0 &&
          error.map((e, idx) => (
            <p key={idx} className="text-red-600 px-4 py-2 text-center">{e}</p>
          ))}
        {success && (
          <p className="text-green-600 px-4 py-2 text-center">
            Message sent successfully! ✅
          </p>
        )}
      </div>
    </>
  );
} 