import { useRef } from 'react';
import { motion, useInView, type Variants } from 'motion/react';
import { Mail, Phone, ArrowUpRight, Award, CheckCircle, Flame } from 'lucide-react';
import { ABOUT_METRICS } from '../../data/data';

// Counter animation component
function AnimatedNumber({ value, suffix = '' }: { value: number | string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const numVal = typeof value === 'number' ? value : parseInt(value);
  const hasSuffix = typeof value === 'string' && isNaN(numVal) ? value : suffix;

  return (
    <span ref={ref} className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#5D3FD3] tracking-tighter leading-none">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {value}
          {hasSuffix}
        </motion.span>
      ) : (
        <span>0</span>
      )}
    </span>
  );
}

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const metricVariant: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 14 },
    },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const rightItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-neutral-50/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 mb-8 uppercase"
          id="about-heading"
        >
          ABOUT ME
        </motion.h2>

        {/* Core content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Content & Metrics */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-7 flex flex-col"
          >
            <motion.h3 variants={rightItem} className="text-lg sm:text-xl font-display font-medium text-gray-800 tracking-tight mb-4">
              RISHMINA SHERIN IS A SOFTWARE ENGINEER
            </motion.h3>

            <motion.p variants={rightItem} className="text-xs sm:text-sm font-light text-gray-500 leading-relaxed mb-8" id="about-detailed-text">
              I build end-to-end business applications — accounting systems, CRM platforms, and HR software — owning the full lifecycle from requirements to deployment. I also integrate AI & ML technologies into ERP systems.
              <br /><br />
              I deliver end-to-end design solutions that bridge creative excellence with advanced frontend implementation. Whether developing a new product from scratch, designing stunning graphics, or building responsive custom websites, we ensure a premium production layout suited to expand your brand's reach and authority.
            </motion.p>

            {/* Metrics Block moved into left column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-3 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-xs mb-8"
              id="about-metrics-block"
            >
              {/* Metric 1 */}
              <motion.div variants={metricVariant} className="flex flex-col">
                <AnimatedNumber value={ABOUT_METRICS.yearsExperience} suffix="+" />
                <span className="text-[10px] sm:text-[11px] font-sans font-medium text-gray-400 uppercase tracking-widest mt-2 leading-tight">
                  Years of<br />Experience
                </span>
              </motion.div>

              {/* Metric 2 */}
              <motion.div variants={metricVariant} className="flex flex-col border-l border-gray-100 pl-6">
                <AnimatedNumber value={ABOUT_METRICS.completedProjects} suffix="+" />
                <span className="text-[10px] sm:text-[11px] font-sans font-medium text-gray-400 uppercase tracking-widest mt-2 leading-tight">
                  Completed<br />Projects
                </span>
              </motion.div>

              {/* Metric 3 */}
              <motion.div variants={metricVariant} className="flex flex-col border-l border-gray-100 pl-6">
                <AnimatedNumber value={ABOUT_METRICS.worldwideClients} suffix="+" />
                <span className="text-[10px] sm:text-[11px] font-sans font-medium text-gray-400 uppercase tracking-widest mt-2 leading-tight">
                  Worldwide<br />Clients
                </span>
              </motion.div>
            </motion.div>


            {/* Contact links block */}
            <motion.div
              variants={rightItem}
              whileHover={{ y: -3, boxShadow: '0 8px 30px rgba(93,63,211,0.08)' }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white sm:p-7 rounded-2xl border border-gray-150 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              id="about-contact-banner"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5 text-xs text-gray-650 font-light">
                  <Phone size={14} className="text-[#5D3FD3]" />
                  <span>Call Today: <a href="tel:+971504949706" className="font-semibold text-gray-800 hover:underline">+971 50 494 9706</a></span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-650 font-light">
                  <Mail size={14} className="text-[#5D3FD3]" />
                  <span>Email: <a href="mailto:rishminasherink@gmail.com" className="font-semibold text-gray-800 hover:underline">rishminasherink@gmail.com</a></span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-black text-white rounded-full font-sans font-medium text-[10px] sm:text-xs tracking-wider uppercase shadow-xs shrink-0 cursor-pointer"
              >
                Inquire Bio <ArrowUpRight size={13} />
              </motion.button>
            </motion.div>

            {/* Extra trust badges */}
            <motion.div
              variants={rightItem}
              className="flex flex-wrap items-center gap-6 mt-8 p-1 text-[11px] text-gray-400 font-mono tracking-wider uppercase"
            >
              {[
                { icon: <CheckCircle size={12} className="text-emerald-500" />, label: 'Full-Stack Engineer' },
                { icon: <Award size={12} className="text-yellow-500" />, label: 'Enterprise Architect' },
                { icon: <Flame size={12} className="text-orange-500" />, label: 'AI & ML Integrator' },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-1.5"
                >
                  {badge.icon}
                  <span>{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Block: Image Placeholder for Sticky Overlay */}
          <div className="lg:col-span-5 flex justify-center items-center py-10 relative hidden lg:flex">
             <div className="w-64 h-80 sm:w-72 sm:h-[400px] lg:w-[320px] lg:h-[460px] opacity-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
