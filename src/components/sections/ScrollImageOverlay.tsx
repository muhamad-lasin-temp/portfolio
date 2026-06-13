import { motion, MotionValue, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import RishminaImage from '../../assets/Rishmina.png';

export default function ScrollImageOverlay({ progress }: { progress: MotionValue<number> }) {
  const [showHi, setShowHi] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHi((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Mobile responsiveness mapping using CSS calc/vw
  const x = useTransform(progress, 
    [0, 0.15, 0.35, 0.65, 0.85, 1], 
    ['0vw', '10vw', '22vw', '22vw', '22vw', '22vw']
  );
  
  const y = useTransform(progress,
    [0, 0.15, 0.35, 0.65, 0.85, 1],
    ['0vh', '10vh', '0vh', '0vh', '0vh', '0vh']
  );

  const rotateX = useTransform(progress, 
    [0, 0.15, 0.35, 0.65, 0.85, 1], 
    [0, 15, -2, -2, -2, 0]
  );
  
  const rotateY = useTransform(progress, 
    [0, 0.15, 0.35, 0.65, 0.85, 1], 
    [0, -25, 4, 4, -4, 0]
  );

  const rotateZ = useTransform(progress, 
    [0, 0.15, 0.35, 0.65, 0.85, 1], 
    [0, 10, -3, -3, 3, 0]
  );
  
  // Dimensions match Hero -> Workspace -> AboutMe sizes approximately
  const width = useTransform(progress,
    [0, 0.35, 0.65, 0.85, 1],
    ['320px', '410px', '410px', '320px', '320px']
  );

  const height = useTransform(progress,
    [0, 0.35, 0.65, 0.85, 1],
    ['460px', '430px', '430px', '460px', '460px']
  );

  // Crossfade opacities
  const opacityPortrait = useTransform(progress,
    [0, 0.25, 0.35, 0.65, 0.75, 1],
    [1, 0, 0, 0, 1, 1]
  );

  const opacityWorkspace = useTransform(progress,
    [0, 0.25, 0.35, 0.65, 0.75, 1],
    [0, 0.3, 1, 1, 0, 0]
  );

  const badgeOpacity = useTransform(progress, [0, 0.05], [1, 0]);
  const badgeScale = useTransform(progress, [0, 0.05], [1, 0.5]);
  const badgeDisplay = useTransform(progress, (v) => v > 0.05 ? 'none' : 'flex');
  const badgePointer = useTransform(progress, (v) => v > 0.05 ? 'none' : 'auto');
  
  // No fade out needed since it will scroll away naturally as a sticky element
  
  return (
    <motion.div 
      className="sticky top-0 h-screen w-full pointer-events-none z-50 flex items-center justify-center hidden lg:flex"
    >
      <motion.div
        style={{
          x,
          y,
          rotateX,
          rotateY,
          rotateZ,
          width,
          height,
          transformPerspective: 1200
        }}
        className="relative bg-neutral-100 rounded-3xl border-4 border-white pointer-events-auto"
      >
        {/* Image 1: Portrait */}
        <motion.img
          style={{ opacity: opacityPortrait }}
          src={RishminaImage}
          alt="Rishmina Sherin"
          className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
          referrerPolicy="no-referrer"
        />

        {/* Image 2: Workspace */}
        <motion.img
          style={{ opacity: opacityWorkspace }}
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800"
          alt="Development Environment"
          className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
          referrerPolicy="no-referrer"
        />

        {/* Workspace Label overlay */}
        <motion.div 
          style={{ opacity: opacityWorkspace }}
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-[20px]" 
        />
        <motion.div 
          style={{ opacity: opacityWorkspace }}
          className="absolute bottom-5 left-5 text-white z-10"
        >
          <span className="text-[10px] font-mono uppercase bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10 tracking-widest">
            Development Environment
          </span>
        </motion.div>

        {/* "Hi" Badge (Only visible on Portrait/Hero) */}
        <motion.div
          style={{ 
            opacity: badgeOpacity, 
            scale: badgeScale,
            display: badgeDisplay,
            pointerEvents: badgePointer as any
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#5D3FD3] text-white font-medium flex items-center justify-center rounded-full shadow-2xl text-3xl border-[4px] border-white z-20 cursor-pointer"
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
  );
}
