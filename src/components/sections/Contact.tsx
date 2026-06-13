import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, RotateCcw } from 'lucide-react';
import RishminaImage from '../../assets/Rishmina.png';

interface Submission {
  name: string;
  email: string;
  service: string;
  message: string;
  date: string;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('UI/UX Design');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>(() => {
    try {
      const saved = localStorage.getItem('rishmina_submissions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newSubmission: Submission = {
        name,
        email,
        service,
        message,
        date: new Date().toLocaleString(),
      };

      const updated = [newSubmission, ...submissions];
      setSubmissions(updated);
      try {
        localStorage.setItem('rishmina_submissions', JSON.stringify(updated));
      } catch (err) {
        console.error('LocalStorage write error:', err);
      }

      setIsSubmitting(false);
      setSubmitted(true);

      setName('');
      setEmail('');
      setMessage('');
      setService('UI/UX Design');
    }, 1200);
  };

  const inputClass =
    'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#5D3FD3]/40 transition-colors focus:ring-2 focus:ring-[#5D3FD3]/10';

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          className="mb-12 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 uppercase"
            id="contact-heading"
          >
            LET'S WORK TOGETHER
          </h2>
          <p className="text-xs text-gray-400 font-mono tracking-wider uppercase mt-1">
            Let's build something exceptional together
          </p>
        </motion.div>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Form */}
          <motion.div
            className="lg:col-span-7 bg-neutral-50/50 p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-xs"
            id="contact-form-container"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <p className="text-xs sm:text-sm text-gray-500 font-light mb-6">
                    Have a project in mind, need a consultation, or simply want to chat? Fill out
                    the details below and I will get back to you within 24 hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <motion.div
                      className="flex flex-col gap-1.5"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <label htmlFor="name-input" className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name-input"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className={inputClass}
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      className="flex flex-col gap-1.5"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15, duration: 0.5 }}
                    >
                      <label htmlFor="email-input" className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email-input"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. john@example.com"
                        className={inputClass}
                      />
                    </motion.div>
                  </div>

                  {/* Service Dropdown */}
                  <motion.div
                    className="flex flex-col gap-1.5"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <label htmlFor="service-dropdown" className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
                      Service Needed
                    </label>
                    <div className="relative">
                      <select
                        id="service-dropdown"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className={`${inputClass} appearance-none cursor-pointer font-sans`}
                      >
                        <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                        <option value="Enterprise Architecture & Systems">Enterprise Architecture & Systems</option>
                        <option value="AI & ML Integration">AI & ML Integration</option>
                        <option value="General Tech Consultation">General Tech Consultation</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">
                        ▼
                      </div>
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    className="flex flex-col gap-1.5"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                  >
                    <label htmlFor="message-input" className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
                      Your Message *
                    </label>
                    <textarea
                      id="message-input"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me a bit about your product scope, budget, and timelines..."
                      className={`${inputClass} resize-none`}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -1 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-full py-3.5 bg-black hover:bg-neutral-800 disabled:bg-neutral-400 text-white rounded-xl text-xs sm:text-sm uppercase font-sans font-medium tracking-wider transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    id="submit-contact-form"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                        />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Submit Details</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.88, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="py-12 text-center flex flex-col items-center justify-center gap-4"
                  id="contact-success-screen"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                    className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-2 border border-emerald-100"
                  >
                    <CheckCircle2 size={30} />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-lg font-display font-semibold uppercase text-gray-900 tracking-tight"
                  >
                    MESSAGE SENT SUCCESSFULLY
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-xs sm:text-sm text-gray-500 font-light max-w-sm leading-relaxed"
                  >
                    Thank you! Your project request has been delivered safely. Rishmina will review
                    your scope and follow up within 24 business hours.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw size={12} />
                    <span>Send Another Inquiry</span>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Portrait */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-[400px]" id="contact-portrait-frame">

              {/* Glow */}
              <div className="absolute -inset-4 bg-radial from-violet-100/30 to-transparent rounded-full blur-2xl pointer-events-none" />

              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative bg-neutral-150"
              >
                <img
                  src={RishminaImage}
                  alt="Rishmina Sherin"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Visual badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 shadow-lg text-center"
                >
                  <p className="text-[10px] font-mono uppercase text-gray-400 tracking-widest leading-none mb-1">
                    Response Time
                  </p>
                  <p className="text-xs font-sans font-semibold text-gray-800 uppercase tracking-wide">
                    Usually Under 24h ⚡
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
