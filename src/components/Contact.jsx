import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// TODO: Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_1lbu4gh';
const EMAILJS_TEMPLATE_ID = 'template_ltzudv6';
const EMAILJS_PUBLIC_KEY = 'BtGbKklDgBf4fsEmK';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-dark-light/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              I'm always open to discussing new projects, opportunities, or collaborations. Feel
              free to reach out!
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <a
                    href="mailto:raomjunaid78@gmail.com"
                    className="text-white hover:text-primary transition-colors"
                  >
                    raomjunaid78@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Phone</p>
                  <p className="text-white">+92 347 063 6118</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Location</p>
                  <p className="text-white">Pir Mahal, Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-dark rounded-lg border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-dark rounded-lg border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-dark rounded-lg border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-dark rounded-lg border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-400 text-sm justify-center">
                <CheckCircle size={16} />
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm justify-center">
                <AlertCircle size={16} />
                Failed to send. Please try again or email directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
