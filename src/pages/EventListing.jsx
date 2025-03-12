import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Plus,
  Minus,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const faqs = [
  {
    question: "What is the Communion app?",
    answer: "A vibrant platform for connecting diverse faiths and communities!",
  },
  {
    question: "How does it promote social cohesion?",
    answer:
      "By fostering open discussions and encouraging cross-cultural connections.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes! Communion is completely free for all users.",
  },
  {
    question: "Can I meet new people?",
    answer:
      "Absolutely! You can connect with like-minded individuals globally.",
  },
  {
    question: "What if I have more questions?",
    answer: "Feel free to reach out to our support team for any inquiries!",
  },
];

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [event, setEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    category: "Religious",
  });
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = ["Religious", "Social", "Charity"];

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!event.title || !event.date || !event.location) {
      alert("Please fill in all required fields.");
      return;
    }

    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const newEvents = [...savedEvents, event];

    localStorage.setItem("events", JSON.stringify(newEvents));
    setEvent({
      title: "",
      date: "",
      location: "",
      description: "",
      category: "Religious",
    });
  };

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(savedEvents);
    setFilteredEvents(savedEvents);
  }, []);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((event) => event.category === category));
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-auto mt-25 sm:px-40 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Upcoming Events
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-6">
          {["All", "Religious", "Social", "Charity"].map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Event Grid */}
        <motion.div
          layout
          className={`mt-6 ${
            filteredEvents.length > 0
              ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
              : "flex justify-center"
          }`}
        >
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-500">
                  {new Date(event.date).toDateString()}
                </p>
                <p className="text-gray-600">{event.location}</p>
                <span className="inline-block bg-gray-200 text-xs px-3 py-1 rounded mt-2">
                  {event.category}
                </span>
                <p className="text-sm mt-2 text-gray-700">
                  {event.description}
                </p>
              </motion.div>
            ))
          ) : (
            <h2 className="text-slate-500 text-lg my-10">
              No events available
            </h2>
          )}
        </motion.div>
      </div>

      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto bg-gray-200 p-6 shadow-lg rounded-lg sm:px-40 px-6 mt-15 "
      >
        <h2 className="text-xl font-semibold mb-4">Create New Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="title"
              value={event.title}
              onChange={handleChange}
              placeholder="Event Title"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="date"
              name="date"
              value={event.date}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="location"
              value={event.location}
              onChange={handleChange}
              placeholder="Event Location"
              className="w-full p-2 border rounded"
              required
            />
            <select
              name="category"
              value={event.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <textarea
              name="description"
              value={event.description}
              onChange={handleChange}
              placeholder="Event Description"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded mt-5 px-5"
          >
            Add Event
          </button>
        </form>
      </motion.div>

      <section className="py-5 px-6 sm:px-40 flex flex-col md:flex-row items-start justify-between mt-15">
        {/* Left Side Heading */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <button className="mt-6 flex items-center gap-2 bg-gray-900 text-white py-2 px-5 rounded-lg hover:bg-gray-700 transition">
            View All <ArrowRight size={18} />
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full max-w-2xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b last:border-none"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                className="w-full flex justify-between items-center py-4 text-left text-lg font-medium focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {activeIndex === index ? (
                  <Minus size={20} className="text-gray-600" />
                ) : (
                  <Plus size={20} className="text-gray-600" />
                )}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-500 pb-4">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12 px-6 sm:px-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <img
                  src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png"
                  alt="Communion Logo"
                  className="w-50 h-10"
                />
              </div>
              <p className="mt-4 max-w-md">
                Discover the power of connection with Communion. Uniting diverse
                communities through spirituality and innovation, we foster
                inclusivity, collaboration, and social cohesion for a better
                world.
              </p>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-4 mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <Twitter size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <Youtube size={20} className="text-white" />
              </a>
            </motion.div>
          </div>

          {/* Middle Section - Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Home",
                "Communities",
                "Events",
                "Leaders",
                "Support",
                "Profile",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Section - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white sm:mt-0 mt-10">
              Contact
            </h3>
            <p className="mt-4">
              <a
                href="mailto:contact@communionhub.org"
                className="hover:text-white transition"
              >
                contact@communionhub.org
              </a>
            </p>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="mt-10 border-t border-gray-800 pt-6 text-sm flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-center">
            Copyright © 2024. All rights reserved to Communion
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default EventList;
