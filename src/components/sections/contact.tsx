"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }
    setStatus("Thanks! I’ll get back to you.");
    form.reset();
  };

  return (
    <section id="contact" className="container py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-xl">
        <Input name="name" placeholder="Your name" />
        <Input name="email" type="email" placeholder="Your email" />
        <Textarea name="message" placeholder="Your message" rows={5} />
        <Button type="submit">Send</Button>
      </form>

      <div className="mt-6 text-sm text-foreground/70 space-y-1">
        <div>
          WhatsApp: <a className="underline" href="https://wa.me/254715080952">wa.me/254715080952</a>
        </div>
        <div>Email: <a className="underline" href="mailto:mainaerick.k@gmail.com">mainaerick.k@gmail.com</a></div>
        <div className="flex gap-3">
          <a className="underline" href="https://www.linkedin.com/in/erick-koine/">LinkedIn</a>
          <a className="underline" href="https://x.com/bushbristles">X</a>
          <a className="underline" href="https://instagram.com/bushbristles">Instagram</a>
          <a className="underline" href="https://facebook.com/bushbristles">Facebook</a>
        </div>
      </div>

      {status && <p className="mt-4 text-green-600">{status}</p>}
    </section>
  );
}

