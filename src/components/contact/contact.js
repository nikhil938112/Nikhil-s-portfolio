import React from "react";

function Contact() {
  return (
    <div id="contact" className="py-16 flex justify-center">
      <div className="p-6 mx-auto max-w-2xl bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Contact Us
        </h1>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows="6"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 tracking-wide rounded-md text-sm px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
