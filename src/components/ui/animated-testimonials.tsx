"use client"

import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Separator } from "./separator"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView, type Variants } from "motion/react"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  trustedCompanies?: string[]
  trustedCompaniesTitle?: string
  className?: string
}

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by developers from companies worldwide",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} id="testimonials" className={`py-24 overflow-hidden bg-neutral-50/50 ${className || ""}`}>
      <div className="px-4 md:px-6 w-full max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-16 w-full md:grid-cols-2 lg:gap-24"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-6">
              {badgeText && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-100 text-violet-700">
                  <Star className="mr-1 h-3.5 w-3.5 fill-violet-700" />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="text-3xl font-display font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>

              <p className="max-w-[600px] text-gray-500 font-sans md:text-xl/relaxed">{subtitle}</p>

              <div className="flex items-center gap-3 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === index ? "w-10 bg-violet-600" : "w-2.5 bg-gray-300"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div variants={itemVariants} className="relative h-full md:mr-10 min-h-[420px] md:min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex: activeIndex === index ? 10 : 0, pointerEvents: activeIndex === index ? 'auto' : 'none' }}
              >
                <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl p-8 h-full flex flex-col">
                  {/* Animated Stars Container */}
                  <motion.div 
                    className="mb-6 flex gap-2"
                    initial="hidden"
                    animate={activeIndex === index ? "visible" : "hidden"}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                    }}
                  >
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <motion.div
                          key={i}
                          variants={{
                            hidden: { opacity: 0, scale: 0.5, rotate: -30 },
                            visible: { opacity: 1, scale: 1, rotate: 0 }
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                  </motion.div>

                  <div className="relative mb-6 flex-1">
                    <Quote className="absolute -top-2 -left-3 h-8 w-8 text-violet-500/10 rotate-180" />
                    <p className="relative z-10 text-lg font-medium leading-relaxed text-gray-800">"{testimonial.content}"</p>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border border-gray-100">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500 font-sans">
                        {testimonial.role}, <span className="text-violet-600">{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-violet-600/5 -z-10"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-xl bg-violet-600/5 -z-10"></div>
          </motion.div>
        </motion.div>

        {/* Logo cloud */}
        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} initial="hidden" animate={controls} className="mt-32 text-center overflow-hidden w-full">
            <h3 className="text-sm font-medium text-gray-500 mb-10 tracking-wider uppercase">{trustedCompaniesTitle}</h3>
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-4">
              <motion.div 
                className="flex flex-nowrap gap-x-16 items-center w-max opacity-60 hover:opacity-100 transition-opacity duration-500 pr-16"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              >
                {[...trustedCompanies, ...trustedCompanies, ...trustedCompanies, ...trustedCompanies].map((company, index) => (
                  <div key={`${company}-${index}`} className="text-2xl sm:text-3xl font-display font-semibold text-gray-400 hover:text-violet-600 transition-colors cursor-default whitespace-nowrap">
                    {company}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
