import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Send } from 'lucide-react';

function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  return (
    <div id="contact" className="container mx-auto px-4 md:px-6 flex items-center justify-center py-12 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto w-full"
      >
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
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
      </motion.div>
    </div>
  );
}

export default Contact;
