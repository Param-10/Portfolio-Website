import React, { useState } from 'react';

function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  return (
    <section id="contact" className="py-4 scroll-mt-20">
      <div className="rounded-lg p-6 border">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Contact Me
        </h2>
        <div className="max-w-md mx-auto">
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
            <div>
              <label htmlFor="name" className="block mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2">
                Phone Number <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                placeholder="+1 (234) 567-8900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                placeholder="Hello! I'd like to connect about..."
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
              className="w-full text-white font-medium py-3 px-6 rounded-lg transition-colors bg-gray-800 hover:bg-gray-700"
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
              <p className="text-center">
                Thank you for your message! I'll get back to you soon.
              </p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-500 text-center">
                Sorry, there was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
