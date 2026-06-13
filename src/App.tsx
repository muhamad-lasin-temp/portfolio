/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useScroll, useSpring, motion } from 'motion/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WhatIDo from './components/sections/WhatIDo';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import AiSkills from './components/sections/AiSkills';
import Faq from './components/sections/Faq';
import Testimonials from './components/sections/Testimonials';
import LiveWebsites from './components/sections/LiveWebsites';
import Contact from './components/sections/Contact';
import ScrollImageOverlay from './components/sections/ScrollImageOverlay';
import CustomCursor from './components/ui/CustomCursor';
import { useRef } from 'react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const mainScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: sectionsProgress } = useScroll({
    target: mainScrollRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      className="min-h-screen bg-white text-gray-800 font-sans selection:bg-violet-500 selection:text-white"
      id="main-app-container"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 origin-left z-[100]"
        id="scroll-progress-bar"
      />

      {/* Floating capsule navigation header */}
      <Header />

      {/* Main Sections flow */}
      <main>
        <CustomCursor />
        <div ref={mainScrollRef} className="relative">
          {/* Absolute wrapper prevents sticky element from pushing content down */}
          <div className="absolute inset-0 pointer-events-none">
            <ScrollImageOverlay progress={sectionsProgress} />
          </div>
          
          {/* Hero Landing */}
          <Hero />

          {/* Services Accordion List */}
          <WhatIDo />

          {/* Detailed Metrics & Biography */}
          <AboutMe />
        </div>

        {/* Grid and Interactive Filters */}
        <Projects />

        {/* Live Websites Modal Button */}
        <LiveWebsites />

        {/* Career Experience Timeline */}
        <Experience />

        {/* AI and ML Skills Grid */}
        <AiSkills />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Contact Form with real feedback success states */}
        <Contact />
      </main>

      {/* Styled Footer matches deep purple in screenshot */}
      <Footer />
    </div>
  );
}
