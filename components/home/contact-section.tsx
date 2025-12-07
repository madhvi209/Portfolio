"use client";

import React, { useState } from "react";

// Define social icon data as objects with link and icon
const socialIcons = [
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/",
  //   icon: (
  //     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //       <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
  //       <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  //     </svg>
  //   ),
  // },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/madhavi32/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <line x1="7" y1="8.5" x2="7" y2="16.5" />
        <line x1="7" y1="7" x2="7" y2="7" />
        <path d="M12 12v4.5M12 13.5c0-1.104.79-1.5 1.71-1.5 1.11 0 2.29.67 2.29 2.1v3.4" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    link: "https://github.com/madhvi209",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1.01.07 1.54 1.05 1.54 1.05.9 1.54 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.71 1.03 1.61 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.93.68 1.88v2.79c0 .26.16.58.67.48A10.012 10.012 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/madhavi209",
    icon: (
      // LeetCode SVG icon
      <svg width="16" height="16" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
        <g>
          <path d="M15 40 L35 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M19 34 Q22 37,25 34 Q28 31,31 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <circle cx="25" cy="40" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        </g>
      </svg>
    ),
  },
];

const contactDetails = [
  {
    icon: (
      <svg className="w-6 h-6 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    content: (
      <>
       Noida,IN PIN -201301
      </>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    content: (
      <a href="mailto:madhavisharma207@gmail.com" className="hover:underline">
       madhavisharma207@gmail.com
      </a>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    content: (
      <a href="tel:+917488167264" className="hover:underline">
        +91 7488167264
      </a>
    ),
  },
];

function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage(""); // clear any previous

    const formData = {
      name,
      email,
      phone,
      message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccessMessage("Your message sent successfully. Thanks for contacting!");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("There was an error sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background w-full">
      <div className="max-w-5xl mx-auto px-6 pb-20 pt-10">
        <div className="bg-white dark:bg-[#161722] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[480px] relative">
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-white dark:bg-[#232538] flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10 font-serif">Contact us</h2>
            {successMessage && (
              <div className="mb-6 p-4 rounded bg-green-100 text-green-800 text-sm border border-green-200">
                {successMessage}
              </div>
            )}
            <form className="space-y-8" onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Name*"
                className="w-full border-b border-gray-300 dark:border-white/20 py-2 bg-transparent placeholder-gray-400 text-sm dark:text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                autoComplete="name"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border-b border-gray-300 dark:border-white/20 py-2 bg-transparent placeholder-gray-400 text-sm dark:text-white"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                autoComplete="tel"
              />
              <input
                type="email"
                required
                placeholder="Email*"
                className="w-full border-b border-gray-300 dark:border-white/20 py-2 bg-transparent placeholder-gray-400 text-sm dark:text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                autoComplete="email"
              />
              <textarea
                rows={1}
                placeholder="Message:"
                className="w-full border-b border-gray-300 dark:border-white/20 py-2 bg-transparent placeholder-gray-400 text-sm dark:text-white resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
              ></textarea>
              <div className="pt-6">
                <button
                  type="submit"
                  className="px-14 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-sm font-semibold rounded-lg shadow-lg shadow-orange-400/30 transition-all hover:-translate-y-0.5"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 bg-gradient-to-br from-[#f97316] via-[#ec4899] to-[#7e22ce] p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-[#fb7185] opacity-20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 space-y-8 pl-2">
              {contactDetails.map((item, idx) => (
                <div className={`flex ${idx === 0 ? "items-start" : "items-center"} gap-5`} key={idx}>
                  <div className={idx === 0 ? "mt-1" : ""}>{item.icon}</div>
                  <span className="text-sm opacity-90 font-light">{item.content}</span>
                </div>
              ))}
            </div>
            <div className="mt-14 pl-2 flex gap-4 relative z-10">
              {socialIcons.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/30 bg-white/10 hover:bg-white/30 transition-colors shadow hover:shadow-white/10"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
