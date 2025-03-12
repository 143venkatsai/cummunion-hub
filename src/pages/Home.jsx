import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { HiUsers, HiSparkles, HiTrendingUp } from "react-icons/hi";
import {
  ArrowRight,
  Plus,
  Minus,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const features = [
  {
    icon: <HiUsers size={40} />,
    title: "Unifying Communities",
    description:
      "Discover a platform where different faiths come together in harmony. Our community features:",
    details: [
      "Regular interfaith dialogues and discussions",
      "Shared celebration of festivals and traditions",
      "Cultural exchange programs and events",
      "Collaborative community service projects",
      "Educational resources about different faiths",
    ],
  },
  {
    icon: <HiSparkles size={40} />,
    title: "Innovative and Fun",
    description:
      "Experience faith in a fresh way through our interactive features:",
    details: [
      "Engaging events and workshops",
      "Gamified learning experiences",
      "Virtual reality religious explorations",
      "Faith-based social networking",
      "Live Q&A sessions with religious scholars",
    ],
  },
  {
    icon: <HiTrendingUp size={40} />,
    title: "Promoting Unity",
    description:
      "We foster understanding and harmony between different faith communities:",
    details: [
      "Community-driven peace initiatives",
      "Workshops on empathy and inclusivity",
      "Joint humanitarian projects",
      "Collaboration with local organizations",
      "Celebrating diversity through storytelling",
    ],
  },
];

const moments = [
  {
    title: "Shared Service Projects",
    description:
      "Make a difference by joining hands to support impactful projects that uplift communities and bring positive change.",
    image:
      "	https://communionhub.org/static/media/moments-1.ab7ff79bf394a244a0c7.jpg",
  },
  {
    title: "Community Celebrations",
    description:
      "Experience the joy of shared festivities as we honor traditions, embrace diversity, and strengthen communal bonds.",
    image:
      "https://communionhub.org/static/media/moments-2.1ffdbef7fa235e0af2be.avif",
  },
  {
    title: "Volunteer Gatherings",
    description:
      "Join like-minded individuals in meaningful initiatives, giving back to communities and building lasting connections.",
    image:
      "	https://communionhub.org/static/media/moments-3.71fa7813105dddf86c48.avif",
  },
  {
    title: "Cultural Exchanges",
    description:
      "Explore unique traditions, cuisines, and stories, building bridges across diverse cultures and backgrounds.",
    image:
      "	https://communionhub.org/static/media/moments-4.518ca15d6caff0f2e0c9.avif",
  },
  {
    title: "Volunteer Gatherings",
    description:
      "Join like-minded individuals in meaningful initiatives, giving back to communities and building lasting connections.",
    image:
      "	https://communionhub.org/static/media/moments-5.3d08fe8e2bcc7408445f.avif",
  },
  {
    title: "Analytics and Reporting",
    description:
      "Our cutting-edge social media marketing tactics will help you maximize your brand’s online visibility and expand your business exponentially.",
    image:
      "	https://communionhub.org/static/media/moments-6.85cf53958c243abba91e.avif",
  },
];

const testimonials = [
  {
    text: "Communion has transformed how I connect with my community, fostering unity and understanding among diverse groups.",
    name: "John M.",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bgColor: "bg-blue-100",
  },
  {
    text: "Being part of Communion is life-changing, blending innovation with spirituality to create a truly inclusive space.",
    name: "Rohan K.",
    country: "India",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    bgColor: "bg-gray-900 text-white",
  },
  {
    text: "Through Communion, I've joined events and discussions that broadened my perspective and connected me globally.",
    name: "Amira L.",
    country: "UAE",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bgColor: "bg-blue-200",
  },
];

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

const Home = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-25 flex flex-col justify-center items-center min-h-[85vh]"
        >
          {/* Title Animation */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold mb-4 text-center"
          >
            Connecting People Across Faiths & Interests
          </motion.h1>

          {/* Subtitle Animation */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-slate-500 mb-4 text-center"
          >
            Connecting people of all faiths through events and community
            support.
          </motion.p>

          {/* Button with Hover Animation */}
          <Link to="/events">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md cursor-pointer"
            >
              Explore Events
            </motion.button>
          </Link>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 ">
            <img
              src="https://communionhub.org/static/media/event-1.e37c47c6656e8a5c0043.avif"
              alt="event"
              className="w-80 h-70 rounded-[20px]"
            />
            <img
              src="https://communionhub.org/static/media/event-2.0cb0185956a6cc4d90f8.webp"
              alt="event"
              className="w-80 h-70 rounded-[20px]"
            />
            <img
              src="https://communionhub.org/static/media/event-3.518ca15d6caff0f2e0c9.avif"
              alt="event"
              className="w-80 h-70 rounded-[20px]"
            />
          </div>
        </motion.div>
      </section>

      <section className="bg-[#121212] text-white py-16 px-6 relative sm:px-40">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Why Communion Rocks!
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#1E1E1E] flex flex-col justify-between p-6 rounded-xl text-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <span className="text-white flex justify-center">
                  {feature.icon}
                </span>
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p className="text-gray-400 mt-2">{feature.description}</p>
              </div>
              <button
                className="mt-4 flex items-center gap-2 mx-auto text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer"
                onClick={() => setSelectedFeature(feature)}
              >
                Learn More <FiArrowRight />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedFeature && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
            >
              <motion.div
                className="bg-[#1E1E1E] text-white p-8 rounded-2xl max-w-lg text-center shadow-lg relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-white flex justify-center">
                  {selectedFeature.icon}
                </div>
                <h3 className="text-2xl font-semibold mt-4">
                  {selectedFeature.title}
                </h3>
                <p className="text-gray-400 mt-2">
                  {selectedFeature.description}
                </p>
                <ul className="text-gray-300 mt-4 text-left list-disc list-inside space-y-2">
                  {selectedFeature.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <button
                  className="mt-6 flex items-center justify-center gap-2 mx-auto text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
                  onClick={() => setSelectedFeature(null)}
                >
                  Show Less <FiArrowLeft />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="bg-white text-black py-16 px-6 sm:px-40">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">Join the Conversation</h2>
          <motion.p
            className="text-2xl text-blue-600 font-semibold mt-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ✦ Build Connections
          </motion.p>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Discover a vibrant community, share your thoughts, and connect with
            like-minded individuals. Together, we grow.
          </p>
          <motion.button
            className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            Join Conversations →
          </motion.button>
        </motion.div>

        {/* Image Grid Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img
            src="	https://communionhub.org/static/media/header-img-1.adf1de5fdab6ef84caff.avif"
            alt="Community Conversation"
            className="w-full rounded-xl shadow-lg sm:h-100 h-80"
            whileHover={{ scale: 1.03 }}
          />
          <motion.img
            src="	https://communionhub.org/static/media/header-img-2.f732844f4b0d9b3d357e.avif"
            alt="Online Discussion"
            className="w-full rounded-xl shadow-lg sm:h-100 h-90"
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { label: "Happy Community", value: "😊" },
            { label: "210% Boost in Engagement", value: "📈" },
            { label: "172+ Ranked Communities", value: "🏆" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 px-6 py-4 rounded-xl shadow-md flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">{item.value}</span>
              <p className="text-gray-700 font-semibold">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-gradient-to-b from-gray-900 to-gray-100 text-black py-16 px-6 sm:px-40">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl font-bold">Uniting Communities Through</h2>
          <motion.p
            className="text-2xl text-indigo-300 font-semibold mt-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ✦ Inspiring Events
          </motion.p>
          <p className="text-gray-300 mt-3 max-w-xl mx-auto">
            At Communion, we're committed to organizing events that foster
            connections, inspire personal and professional growth, and bring
            people together to share meaningful experiences.
          </p>

          {/* Trust Badge */}
          <div className="mt-4 flex justify-center items-center gap-3">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-gray-300">
              Trusted by Over <b>15k+ Individuals</b> Worldwide
            </p>
          </div>

          <motion.button
            className="mt-5 px-6 py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition"
            whileHover={{ scale: 1.05 }}
          >
            Explore Events →
          </motion.button>
        </motion.div>

        {/* Image Grid Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            "https://communionhub.org/static/media/hero-2.1736b71541634509a875.avif",
            "https://communionhub.org/static/media/hero-5.a3a92fc524360c0dc26e.avif",
            "https://communionhub.org/static/media/hero-3.22dd2495b007dee69115.avif",
            "https://communionhub.org/static/media/hero-6.7d2a560b61405b8f97d2.avif",
          ].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt="Event"
              className="w-full rounded-xl shadow-lg"
              whileHover={{ scale: 1.03 }}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { label: "Opportunities Expanded", value: "98%" },
            { label: "Attendee Satisfaction", value: "89%" },
            { label: "Engaged Participants", value: "15k+" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white px-6 py-4 rounded-xl shadow-md flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl font-bold text-indigo-600">
                {item.value}
              </span>
              <p className="text-gray-700 font-semibold">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-white py-16 px-6 sm:px-40 text-black">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            More Than <span className="text-blue-600">10,000+</span> Engagements
            daily
            <br /> across the world
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Experience the power of connection with over 10,000 daily
            interactions worldwide, uniting diverse communities through
            innovation, collaboration, and shared spirituality.
          </p>
        </motion.div>

        {/* Image & Features Section */}
        <motion.div
          className="grid sm:grid-cols-1 lg:grid-cols-2 mt-12 gap-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Image Section */}
          <div className="flex gap-4">
            {[
              "	https://communionhub.org/static/media/card-1.69be03521d9330734f4a.avif",
              "https://communionhub.org/static/media/card-2.bbf9b8db8387c72edba7.avif",
            ].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt="Engagement"
                className="w-40 sm:w-52 sm:mb-0 mb-10 rounded-[100px]"
                whileHover={{ scale: 1.03 }}
              />
            ))}
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: "🌍",
                title: "Global Connectivity",
                desc: "Connecting people from diverse religious communities worldwide, fostering meaningful engagement.",
              },
              {
                icon: "👥",
                title:
                  "Foster Inclusive Collaboration and Connect with People Around You",
                desc: "Engage, collaborate, and connect with diverse people to build inclusive and meaningful relationships.",
              },
              {
                icon: "🔄",
                title: "Innovative Technology",
                desc: "Utilizing cutting-edge tools to enhance user experience and encourage active participation.",
              },
              {
                icon: "💡",
                title: "Daily Growth",
                desc: "Over 10,000+ daily engagements, creating a thriving community where spirituality and innovation meet.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-black text-white py-16 px-6 sm:px-40">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Moments of Connection We've Made So Far...
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Explore the impactful connections we’ve fostered so far, bringing
            together diverse communities through shared experiences,
            collaboration, and innovation.
          </p>
          <motion.button
            className="mt-6 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
            whileHover={{ scale: 1.05 }}
          >
            View All Moments →
          </motion.button>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={moment.image}
                alt={moment.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{moment.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {moment.description}
                </p>
                <a
                  href="#"
                  className="text-blue-400 mt-3 inline-block hover:underline"
                >
                  View Cast Study &gt;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-16 px-6 sm:px-40 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Trusted by Over 1500+ Active Global Users
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Join a growing community of over 1500 users worldwide who trust us to
          connect, engage, and thrive together.
        </p>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-1 md:gris-cols-2 lg:grid-cols-3 mt-8 gap-10">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-lg flex flex-col justify-between shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-md">{testimonial.text}</p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border border-gray-300"
                />
                <div className="text-left">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">{testimonial.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 sm:px-40 flex flex-col md:flex-row items-start justify-between">
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

export default Home;
