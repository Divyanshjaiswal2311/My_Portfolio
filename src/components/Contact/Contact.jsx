import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3s9u1x4",  // Replace with your EmailJS Service ID
        "template_umxr27o",  // Replace with your EmailJS Template ID
        form.current,
        "qAupfVw5-DPmO92ZW"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[15vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white relative inline-block">
          CONTACT
          <span className="absolute -bottom-2 left-0 right-0 w-full h-1 bg-purple-500"></span>
        </h2>
        <p className="text-gray-400 mt-6 text-lg font-semibold max-w-2xl">
          I'd love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-5xl bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/10 hover:shadow-[0_0_35px_4px_rgba(130,69,236,0.35)] transition-all duration-500 hover:border-purple-500/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-purple-300">
              Connect With Me <span className="ml-1">🚀</span>
            </h3>
            <p className="text-gray-300/90 mt-3">I usually respond within a day. Lets build something great.</p>
            <div className="mt-6 space-y-3 text-gray-300/80 text-sm">
              <p>Open to internships, full-time roles, and freelance collaborations.</p>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-md bg-white/10 text-white border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 placeholder:text-gray-400"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-md bg-white/10 text-white border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 placeholder:text-gray-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-4 rounded-md bg-white/10 text-white border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 placeholder:text-gray-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="w-full p-4 rounded-md bg-white/10 text-white border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 placeholder:text-gray-400"
            />
            
            {/* Send Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-4 text-white font-semibold rounded-md hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_15px_rgba(130,69,236,0.5)] text-lg mt-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;