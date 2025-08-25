"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

export function ContactSection() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus("Thanks! I'll get back to you soon.");
    setIsSubmitting(false);
    form.reset();
  };

  const contactMethods = [
    {
      icon: "📱",
      label: "WhatsApp",
      value: "+254 715 080 952",
      href: "https://wa.me/254715080952",
      color: "var(--brand-green)"
    },
    {
      icon: "✉️",
      label: "Email",
      value: "mainaerick.k@gmail.com",
      href: "mailto:mainaerick.k@gmail.com",
      color: "var(--brand-blue)"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/erick-koine/",
      color: "var(--brand-orange)"
    }
  ];

  const socialLinks = [
    { name: "X", href: "https://x.com/bushbristles", icon: "🐦" },
    { name: "Instagram", href: "https://instagram.com/bushbristles", icon: "📸" },
    { name: "Facebook", href: "https://facebook.com/bushbristles", icon: "👥" }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-blue)]/5 via-[color:var(--brand-green)]/5 to-[color:var(--brand-orange)]/5" />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Got an idea? Let&apos;s make it happen. Whether you need design, development, or both,
              I&apos;m here to bring your vision to life.
            </p>
          </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="border-[color:var(--brand-blue)]/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
                
                <form onSubmit={onSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Input 
                      name="name" 
                      placeholder="Your name" 
                      className="border-foreground/20 focus:border-[color:var(--brand-blue)] transition-colors"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="Your email" 
                      className="border-foreground/20 focus:border-[color:var(--brand-blue)] transition-colors"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Textarea 
                      name="message" 
                      placeholder="Tell me about your project..." 
                      rows={5}
                      className="border-foreground/20 focus:border-[color:var(--brand-blue)] transition-colors resize-none"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[color:var(--brand-blue)] hover:bg-[color:var(--brand-blue)]/90 text-white"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </motion.div>
                </form>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-3 rounded-lg text-sm ${
                      status.includes("Thanks") 
                        ? "bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)] border border-[color:var(--brand-green)]/20" 
                        : "bg-[color:var(--brand-red)]/10 text-[color:var(--brand-red)] border border-[color:var(--brand-red)]/20"
                    }`}
                  >
                    {status}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="border-foreground/10 hover:border-[color:var(--brand-blue)]/30 transition-all duration-300 group-hover:shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                            style={{ backgroundColor: `color-mix(in oklab, ${method.color} 15%, transparent)` }}
                          >
                            {method.icon}
                          </div>
                          <div>
                            <p className="font-medium group-hover:text-[color:var(--brand-blue)] transition-colors">
                              {method.label}
                            </p>
                            <p className="text-sm text-foreground/70">{method.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-foreground/5 hover:bg-[color:var(--brand-blue)]/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-6 bg-gradient-to-br from-[color:var(--brand-blue)]/5 to-[color:var(--brand-green)]/5 rounded-lg border border-[color:var(--brand-blue)]/10"
            >
              <p className="text-sm text-foreground/70 italic">
                "                &quot;Ready to transform your ideas into reality? Let&apos;s collaborate and create something amazing together.&quot;"
              </p>
            </motion.div>
          </motion.div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
