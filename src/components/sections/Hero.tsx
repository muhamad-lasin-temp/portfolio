import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import DecryptedText from '../ui/DecryptedText';
import RishminaImage from '../../assets/Rishmina.png';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showHi, setShowHi] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHi((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms
  const bgBlobY1 = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const bgBlobY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0px', '80px']);
  const backdropTextY = useTransform(scrollYProgress, [0, 1], ['0px', '120px']);
  const backdropTextScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0px', '50px']);
  const opacityOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const smoothPortraitY = useSpring(portraitY, { stiffness: 60, damping: 20 });

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen pt-24 pb-12 flex flex-col justify-center items-center overflow-hidden bg-radial from-gray-50 via-white to-gray-50/50 relative"
    >
      {/* Background Decorative Accents with Parallax */}
      <motion.div
        style={{ y: bgBlobY1 }}
        className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: bgBlobY2 }}
        className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-violet-200/25 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        style={{ y: contentY, opacity: opacityOut }}
        className="w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center relative z-10 text-center"
      >
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-white/85 border border-gray-150 backdrop-blur-xs rounded-full shadow-xs mb-6"
          id="available-badge"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-sans font-medium text-gray-700 tracking-wider uppercase">
            <DecryptedText text="Software Engineer · Dubai, UAE 🇦🇪" animateOn="view" speed={40} maxIterations={15} />
          </span>
        </motion.div>

        {/* Center Canvas area: Heavy Headings and Overlapping portrait */}
        <div className="w-full relative py-8 flex flex-col items-center justify-center min-h-[450px] lg:min-h-[600px] mt-4 lg:mt-12">
          
          <h2 className="text-sm md:text-base xl:text-lg uppercase tracking-[0.2em] text-gray-500 font-sans mb-4 font-medium z-0">
            <DecryptedText text="RISHMINA SHERIN" animateOn="view" speed={50} maxIterations={20} revealDirection="center" />
          </h2>

          {/* Text Container joining the words */}
          <div className="flex flex-col lg:flex-row items-center justify-center relative w-full z-0 px-4">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-end lg:mr-2 xl:mr-4"
            >
            <span className="block text-[80px] sm:text-[100px] md:text-[110px] lg:text-[140px] xl:text-[140px] font-display font-bold leading-[0.8] text-[#1a1a1a] tracking-tighter">
              <DecryptedText text="SOFTWARE" animateOn="view" speed={60} maxIterations={12} revealDirection="start" />
            </span>
            </motion.div>

            {/* Desktop Gap for the sticky image so it doesn't cover text */}
            <div className="hidden lg:block w-[320px] xl:w-[340px] shrink-0" />

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-start lg:ml-2 xl:ml-4"
            >
            <span className="block text-[80px] sm:text-[100px] md:text-[110px] lg:text-[140px] xl:text-[140px] font-display font-bold leading-[0.8] text-[#1a1a1a] tracking-tighter">
              <DecryptedText text="ENGINEER" animateOn="view" speed={60} maxIterations={12} revealDirection="end" />
            </span>
              <h1 className="text-xl sm:text-2xl font-display font-semibold tracking-tight text-gray-900 mt-6 mb-3 text-center mx-auto">
                <DecryptedText text="Rishmina Sherin." animateOn="view" speed={50} maxIterations={25} revealDirection="center" />
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 font-light max-w-[500px] text-center mx-auto leading-relaxed">
                I'm a Dubai-based software engineer blending robust architecture with beautiful interfaces. I specialize in building end-to-end business applications, integrating AI into ERP systems, and designing premium digital experiences.
              </p>
            </motion.div>
          </div>

          {/* Portrait block with floating element (Mobile Only) */}
          <motion.div
            style={{ y: smoothPortraitY }}
            className="relative z-10 flex flex-col items-center mx-4 mt-12 lg:hidden"
          >
            {/* Profile Image with subtle outline/frame (Mobile Only) */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="w-64 h-80 sm:w-72 sm:h-[400px] rounded-2xl border-4 border-white flex items-center justify-center bg-gray-100 relative"
              id="hero-portrait-frame"
            >
              <div className="w-full h-full rounded-[12px] overflow-hidden">
                <img
                  src={RishminaImage}
                  alt="Rishmina Sherin"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* "Hi" Badge (Mobile Only) */}
              <motion.div
                initial={{ scale: 0, rotate: -5, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 12 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#5D3FD3] text-white font-medium flex items-center justify-center rounded-full shadow-2xl text-2xl sm:text-3xl border-[4px] border-white z-20 cursor-pointer lg:hidden"
                id="hi-badge-mobile"
              >
                <motion.div
                  initial={false}
                  animate={{ opacity: showHi ? 1 : 0, scale: showHi ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  Hi
                </motion.div>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: !showHi ? 1 : 0, 
                    scale: !showHi ? 1 : 0.5,
                    rotate: (!showHi && isHovered) ? [0, 15, -10, 15, -10, 0] : 0
                  }}
                  transition={{ 
                    rotate: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
                    default: { duration: 0.3 }
                  }}
                  className="absolute origin-bottom-right"
                >
                  👋
                </motion.div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>


      </motion.div>

      {/* Decorative vertical lines on sides */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-gray-100 hidden lg:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-gray-100 hidden lg:block" />
    </section>
  );
}
