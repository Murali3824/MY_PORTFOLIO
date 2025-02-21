import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prev) => ({ ...prev, submitting: true }));

    try {
      await emailjs.send(
        'service_qb6pj8t',
        'template_6j2dxq3',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '4DY1rxLoBg_8z2ujp'
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' },
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' },
      });
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl 2xl:max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            variants={itemVariants}
          >
            <span className="px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-[#FFC160] text-sm font-medium inline-block mb-4">
              Contact Me
            </span>
            <div className="flex flex-col items-start">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2.5">
                Let's Work
              </h2>
              <div className="h-1 md:h-1.5 mb-2 rounded-md bg-blue-500 dark:bg-[#FFC160] w-32"></div>
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-400">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            className="bg-white dark:bg-[#222222] rounded-2xl shadow-xl p-4 md:p-6"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div className="relative" variants={itemVariants}>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-[#333333] border border-gray-200 dark:border-[#444444] rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white transition-colors duration-200"
                    placeholder="Full name"
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div className="relative" variants={itemVariants}>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-[#333333] border border-gray-200 dark:border-[#444444] rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </motion.div>

              {/* Subject Field */}
              <motion.div className="relative" variants={itemVariants}>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-[#333333] border border-gray-200 dark:border-[#444444] rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white transition-colors duration-200"
                    placeholder="Subject"
                  />
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div className="relative" variants={itemVariants}>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#333333] border border-gray-200 dark:border-[#444444] rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white transition-colors duration-200"
                  placeholder="Message..."
                ></textarea>
              </motion.div>

              {/* Status Message */}
              {status.info.msg && (
                <motion.div
                  className={`flex items-center p-4 rounded-xl ${
                    status.info.error
                      ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                      : 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                  }`}
                  variants={itemVariants}
                >
                  {status.info.error ? (
                    <AlertCircle className="w-5 h-5 mr-2" />
                  ) : (
                    <CheckCircle className="w-5 h-5 mr-2" />
                  )}
                  {status.info.msg}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.div className="flex justify-end" variants={itemVariants}>
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="flex items-center justify-center px-6 py-3 bg-indigo-600 dark:text-[#FFC160] dark:bg-[#333333] hover:bg-indigo-700 border dark:border-[#444444] text-white font-medium rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.submitting ? (
                    <>
                      <Loader className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Additional Contact Info */}
          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <p className="text-gray-600 dark:text-gray-400">
              Prefer email? Reach out directly at{' '}
              <a
                href="mailto:muralinetha38@gmail.com"
                className="text-indigo-600 dark:text-[#FFC160] hover:underline"
              >
                muralinetha38@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;