import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  return (
    <div className="container mx-auto px-6 flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="section-heading text-center mb-4">Get In Touch</h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-lg mx-auto">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
          <a
            href="mailto:bheleparamveer@gmail.com"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            bheleparamveer@gmail.com
          </a>
          <a
            href="tel:8136977068"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            813-697-7068
          </a>
        </div>

        {/* Direct Contact Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a
            href="mailto:bheleparamveer@gmail.com"
            className="btn-primary flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </a>
          
          <div className="flex gap-3">
            <a
              href="https://github.com/Param-10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg transition-colors hover:bg-blue-600/10 dark:hover:bg-blue-400/10"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/paramveer-singh-bhele/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg transition-colors hover:bg-blue-600/10 dark:hover:bg-blue-400/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto">
          <form
            action="https://formspree.io/f/xanqjzyj"
            method="POST"
            className="space-y-3"
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
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                placeholder="Hello! I'd love to connect about..."
              ></textarea>
            </div>

            {/* Hidden Recipient Email Field */}
            <input
              type="hidden"
              name="_replyto"
              value="bheleparamveer@gmail.com"
            />

            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === 'sending' ? (
                'Sending...'
              ) : formStatus === 'sent' ? (
                'Message Sent!'
              ) : (
                'Send Message'
              )}
            </button>

            {/* Form Status Messages */}
            {formStatus === 'sent' && (
              <p className="text-center text-green-600 dark:text-green-400 text-sm">
                Thank you for your message! I'll get back to you soon.
              </p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-500 text-center text-sm">
                Sorry, there was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
