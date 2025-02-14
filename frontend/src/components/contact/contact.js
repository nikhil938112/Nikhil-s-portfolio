import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/contactInfo",
        formData
      );

      if (response.status === 201) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="py-16 min-h-screen flex justify-center">
      <div className="p-6 mx-auto max-w-2xl bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Contact Us
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-blue-600 hover:bg-blue-700 tracking-wide rounded-md text-sm px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Success and Error Messages */}
        {success && (
          <p className="mt-4 text-center text-green-600">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="mt-4 text-center text-red-600">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;