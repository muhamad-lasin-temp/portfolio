import { motion } from 'motion/react';
import { Twitter, Instagram, Globe, Linkedin, ArrowUp } from 'lucide-react';

const socialLinks = [
  { href: 'https://linkedin.com/in/rishminasherin', icon: <Linkedin size={15} />, label: 'LinkedIn', id: 'footer-linkedin' },
  { href: 'https://github.com/Rishmina', icon: <Globe size={15} />, label: 'GitHub', id: 'footer-website' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="w-full bg-[#5D3FD3] text-white py-12 px-6 relative overflow-hidden"
      id="footer-comp"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 relative z-10">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-2"
        >
          <p className="text-gray-200 text-xs tracking-wider uppercase">Get In Touch</p>
          <a
            href="mailto:rishminasherink@gmail.com"
            className="text-lg md:text-xl font-medium hover:underline tracking-tight transition-all"
            id="footer-email-link"
          >
            Email: rishminasherink@gmail.com
          </a>
          <a
            href="tel:+971504949706"
            className="text-sm md:text-md text-gray-200 hover:text-white transition-colors"
            id="footer-phone-link"
          >
            Call Today: +971 50 494 9706
          </a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:items-end gap-4"
        >
          <div className="flex items-center gap-3" id="footer-social-panel">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                id={link.id}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07, type: 'spring', stiffness: 300, damping: 18 }}
                whileHover={{ scale: 1.15, y: -3, backgroundColor: 'rgba(255,255,255,0.25)' }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/15 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-xs text-white/80 hover:text-white uppercase tracking-wider transition-colors pt-2 group cursor-pointer"
          >
            Back to Top
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <ArrowUp size={13} />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto h-[1px] bg-white/10 my-8 origin-left"
      />

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/60 gap-4 relative z-10"
      >
        <p id="footer-copyright-text">
          © Copyright {new Date().getFullYear()}. All Rights Reserved by Rishmina Sherin
        </p>
        <p className="font-mono text-white/80" id="footer-credit">
          Software Engineer <span className="font-sans font-semibold text-white">· Afamia Software · Dubai 🇦🇪</span>
        </p>
      </motion.div>

      {/* Decorative blobs */}
      <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
