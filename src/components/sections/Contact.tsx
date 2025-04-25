import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  const contactRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: "Thanks for your message! I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Clear status after a few seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contactRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-20 bg-white dark:bg-slate-900 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="animate-on-scroll opacity-0 transition-all duration-700 text-3xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/20 dark:bg-blue-400/20 rounded-sm -z-10 transform -rotate-1"></span>
            </h2>
            <p className="animate-on-scroll opacity-0 transition-all duration-700 delay-100 text-slate-600 dark:text-slate-400">
              Have a question or want to work together? Feel free to contact me!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-150">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Phone size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  +91-6309734410
                </p>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-200">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Mail size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                  Email
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  jaswanthkumarmadineni3@gmail.com
                </p>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-250">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                  Location
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Punjab, India
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-300 bg-slate-50 dark:bg-slate-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white text-center">
              Send Me a Message
            </h3>

            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-md ${
                  submitStatus.success
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Project Discussion"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md transition-colors shadow-md hover:shadow-lg font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;