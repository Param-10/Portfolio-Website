import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Calendar, Clock, CheckCircle, MapPin, Send } from 'lucide-react';

function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const contactStats = [
    {
      icon: Clock,
      label: "Response Time",
      value: "< 24hrs",
      color: "text-green-500"
    },
    {
      icon: CheckCircle,
      label: "Status",
      value: "Available for Projects",
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tampa, FL",
      color: "text-purple-500"
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "bheleparamveer@gmail.com",
      href: "mailto:bheleparamveer@gmail.com",
      preferred: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/paramveer-singh-bhele/",
      preferred: false
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Check my code",
      href: "https://github.com/Param-10",
      preferred: false
    },
    {
      icon: Phone,
      label: "Phone",
      value: "813-697-7068",
      href: "tel:8136977068",
      preferred: false
    }
  ];

  return (
    <div id="contact" className="container mx-auto px-4 md:px-6 flex items-center justify-center min-h-screen scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto w-full"
      >
        {/* Hero Header */}
        <div className="text-center mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight">
              Let's Build Something Together
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
              I'm currently looking for new opportunities and exciting projects. 
              Whether you have a question, want to collaborate, or just say hi, let's connect!
            </p>
          </motion.div>

          {/* Contact Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6"
          >
            {contactStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-xl p-3 md:p-4 shadow-lg"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className={`p-1.5 md:p-2 rounded-lg bg-gray-100 dark:bg-slate-700`}>
                    <stat.icon className={`w-4 h-4 md:w-5 md:h-5 ${stat.color}`} />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                    <p className="font-semibold text-sm md:text-base text-slate-900 dark:text-slate-100 truncate">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Methods - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-xl p-4 md:p-6 shadow-xl">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 md:mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                Get in Touch
              </h3>
              
              <div className="space-y-3">
                {contactMethods.map((method) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 hover:shadow-md group ${
                      method.preferred 
                        ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600' 
                        : 'bg-gray-50 dark:bg-slate-700/50 border-gray-200 dark:border-slate-600 hover:border-gray-400 dark:hover:border-slate-500'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      method.preferred 
                        ? 'bg-blue-100 dark:bg-blue-900/50' 
                        : 'bg-gray-100 dark:bg-slate-600'
                    }`}>
                      <method.icon className={`w-4 h-4 ${
                        method.preferred 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-slate-600 dark:text-slate-400'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        {method.label}
                        {method.preferred && (
                          <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                            Preferred
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Action */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-600">
                <a
                  href="mailto:bheleparamveer@gmail.com"
                  className="w-full btn-primary flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                     Send Quick Email
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-xl p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-500" />
                Send a Message
              </h3>

              <form
                action="https://formspree.io/f/xanqjzyj"
                method="POST"
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus('sending');

                  try {
                    const form = e.target as HTMLFormElement;
                    const response = await fetch(form.action, {
                      method: 'POST',
                      body: new FormData(form),
                      headers: {
                        'Accept': 'application/json'
                      }
                    });

                    if (response.ok) {
                      setFormStatus('sent');
                      form.reset();
                    } else {
                      throw new Error('Form submission failed');
                    }
                  } catch {
                    setFormStatus('error');
                  }
                }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
                    placeholder="Let's discuss a project opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                                     <textarea
                     id="message"
                     name="message"
                     required
                     rows={3}
                     className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                     placeholder="Hello Paramveer! I'd love to discuss..."
                   ></textarea>
                </div>

                {/* Hidden Fields */}
                <input type="hidden" name="_replyto" value="bheleparamveer@gmail.com" />

                                 <button
                   type="submit"
                   disabled={formStatus === 'sending'}
                   className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                 >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending Message...
                    </>
                  ) : formStatus === 'sent' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {formStatus === 'sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg"
                  >
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      Thank you for your message! I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg"
                  >
                    <p className="text-red-700 dark:text-red-300 font-medium">
                      Sorry, there was an error sending your message. Please try again or email me directly.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
