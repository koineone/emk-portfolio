"use client";

import { useState } from "react";
import { ArrowUpRight, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, SectionHeading } from "@/components/reveal";

const methods = [
  {
    label: "WhatsApp",
    value: "+254 715 080 952",
    href: "https://wa.me/254715080952",
    icon: MessageCircle,
  },
  {
    label: "Email",
    value: "mainaerick.k@gmail.com",
    href: "mailto:mainaerick.k@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/erick-koine/",
    icon: Linkedin,
  },
];

export function ContactSection() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("Thanks — I’ll get back to you soon.");
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something."
          description="Design, development, or a system that needs to work. One conversation is enough to start."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="space-y-3">
              {methods.map((m) => {
                const Icon = m.icon;
                return (
                  <a
                    key={m.label}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-16 items-center gap-4 rounded-[1.25rem] border border-foreground/10 px-4 py-3 transition-colors hover:border-foreground/25"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground/6 text-[color:var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium">{m.label}</span>
                      <span className="block text-sm text-foreground/55">{m.value}</span>
                    </span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-foreground/30" />
                  </a>
                );
              })}
            </div>
            <p className="mt-8 text-sm text-foreground/45">
              Erick Koine · Nairobi, Kenya
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Your name"
                required
                className="h-12 rounded-xl border-foreground/12 bg-transparent"
              />
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="h-12 rounded-xl border-foreground/12 bg-transparent"
              />
              <Textarea
                name="message"
                placeholder="Tell me about the project"
                rows={5}
                required
                className="rounded-xl border-foreground/12 bg-transparent"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-[15px] font-medium text-background disabled:opacity-60 sm:w-auto sm:px-8"
              >
                {isSubmitting ? "Sending…" : "Send message"}
                {!isSubmitting && <ArrowUpRight className="h-4 w-4" />}
              </button>
              {status && (
                <p className="text-sm text-foreground/60">{status}</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
