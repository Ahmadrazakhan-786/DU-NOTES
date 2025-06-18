import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ dark }) => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8lvj4pv", "template_dltyumq", form.current, "fa5U-21TkqlQbjvU4")
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className={`flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] transition-all duration-300 ${
        dark ? "text-white bg-[#2c2c2c]" : "text-black bg-[#fefede]"
      }`}
    >
      <ToastContainer />
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold ${dark ? "text-white" : "text-black"}`}>CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className={`mt-4 text-lg font-semibold ${dark ? "text-gray-200" : "text-gray-700"}`}>
          Feel free to reach out for collaborations, opportunities, or just to say hello—I'd love to connect!
        </p>
      </div>

      <div
        className={`mt-8 w-full max-w-md p-6 rounded-lg shadow-lg border ${
          dark
            ? "bg-[#14111c] text-white border-gray-700"
            : "bg-white text-black border-gray-300"
        }`}
      >
        <h3 className="text-xl font-semibold text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className={`w-full p-3 rounded-md border focus:outline-none ${
              dark
                ? "bg-[#1a1722] text-white border-gray-600 focus:border-purple-500"
                : "bg-white text-black border-gray-400 focus:border-purple-500"
            }`}
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className={`w-full p-3 rounded-md border focus:outline-none ${
              dark
                ? "bg-[#1a1722] text-white border-gray-600 focus:border-purple-500"
                : "bg-white text-black border-gray-400 focus:border-purple-500"
            }`}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className={`w-full p-3 rounded-md border focus:outline-none ${
              dark
                ? "bg-[#1a1722] text-white border-gray-600 focus:border-purple-500"
                : "bg-white text-black border-gray-400 focus:border-purple-500"
            }`}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className={`w-full p-3 rounded-md border focus:outline-none ${
              dark
                ? "bg-[#1a1722] text-white border-gray-600 focus:border-purple-500"
                : "bg-white text-black border-gray-400 focus:border-purple-500"
            }`}
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
