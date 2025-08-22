"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const testimonials = [
  {
    quote: "Erick has the rare ability to combine deep technical knowledge with a creative eye for design. His work on our IT infrastructure and website redesign exceeded all expectations.",
    author: "Sarah Johnson",
    role: "ICT Manager",
    company: "Dry Associates Investment Bank",
    initials: "SJ",
    rating: 5
  },
  {
    quote: "Professional, reliable, and innovative. He transformed our digital presence completely, delivering both stunning design and robust functionality.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "Cerny Bureau Enterprises",
    initials: "MC",
    rating: 5
  },
  {
    quote: "Working with Erick was a game-changer for our business. His dual expertise in design and development meant we got everything we needed from one talented professional.",
    author: "Amara Okafor",
    role: "Founder",
    company: "Salmasamuafrica",
    initials: "AO",
    rating: 5
  },
  {
    quote: "Erick's automation solutions saved us countless hours and significantly reduced our operational costs. His technical skills are matched only by his professionalism.",
    author: "David Kimani",
    role: "IT Coordinator",
    company: "Oracle Edge",
    initials: "DK",
    rating: 5
  }
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-foreground/5" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            What Clients Say
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Don't just take my word for it. Here's what clients and colleagues have to say about working with me.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card className="h-full border-foreground/10 hover:border-[color:var(--brand-blue)]/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-[color:var(--brand-orange)] text-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 + i * 0.1 }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground/80 mb-6 leading-relaxed">
                    <span className="text-[color:var(--brand-blue)] text-2xl font-serif">"</span>
                    {testimonial.quote}
                    <span className="text-[color:var(--brand-blue)] text-2xl font-serif">"</span>
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-[color:var(--brand-blue)]/20">
                      <AvatarFallback className="bg-gradient-to-br from-[color:var(--brand-blue)] to-[color:var(--brand-green)] text-white font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                      <p className="text-sm text-[color:var(--brand-blue)] font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[color:var(--brand-blue)]/10 to-[color:var(--brand-green)]/10 rounded-full border border-[color:var(--brand-blue)]/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-sm font-medium text-foreground/70">
              Ready to join these satisfied clients?
            </span>
            <motion.a
              href="#contact"
              className="text-sm font-semibold text-[color:var(--brand-blue)] hover:text-[color:var(--brand-green)] transition-colors"
              whileHover={{ x: 5 }}
            >
              Let's talk →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
