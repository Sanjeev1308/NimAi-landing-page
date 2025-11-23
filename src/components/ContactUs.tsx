"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import CustomButton from "./_components/CustomButton";
import { FaEnvelope, FaPhone, FaUser, FaBuilding, FaComment } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <section className="py-16 md:py-24">
      <Card className="border-2 border-gray-300 dark:border-gray-700 bg-transparent">
        <CardContent className="py-8 md:py-12 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FA8B31] via-[#FC4950] to-[#2BB2E0]">
                Let&apos;s make things happen
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Contact us today to learn more about how our cloud, AI, security, and
                modern work solutions can help your business grow and succeed.
              </p>

              <div className="space-y-6 hidden md:block">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <FaEnvelope className="text-2xl text-[#FA8B31]" />
                  </div>
                  <div>
                    <p className="font-semibold text-black dark:text-white">
                      Email
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      contact@nimai.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <FaPhone className="text-2xl text-[#FC4950]" />
                  </div>
                  <div>
                    <p className="font-semibold text-black dark:text-white">
                      Phone
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      +91 8960973119
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <label className="block text-sm font-medium mb-2">Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-transparent text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#FA8B31] transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-transparent text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#FC4950] transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-2">Phone</label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-transparent text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#2BB2E0] transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-2">
                  Company
                </label>
                <div className="relative">
                  <FaBuilding className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-transparent text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#FA8B31] transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-transparent text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#2BB2E0] transition-colors resize-none"
                    required
                  />
                </div>
              </div>

              <CustomButton
                className="w-full text-base py-5 px-4 mt-20"
              >
                Send Message
              </CustomButton>
            </form>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactUs;
