import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bake & Bliss" },
      {
        name: "description",
        content:
          "Visit Bake & Bliss, place a custom cake order, or send us a message. We'd love to hear from you.",
      },
      { property: "og:title", content: "Contact — Bake & Bliss" },
      { property: "og:description", content: "Custom cakes, bulk orders or just a hello — we're listening." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent — we'll be in touch soon ✨");
    }, 600);
  };

  return (
    <div className="pt-28 md:pt-32">
      <section className="mx-auto max-w-5xl px-5 pb-12 text-center md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Say hello</p>
          <h1 className="mt-3 font-display text-5xl text-cocoa md:text-6xl">
            Let's <span className="font-script text-gradient-gold">talk</span> bakes
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Custom cake order, bulk gifting, or just a quick hello — we'd love to hear from you.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-24 md:grid-cols-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <div className="rounded-3xl bg-gradient-to-br from-blush/60 to-cream p-7 shadow-soft">
            <h2 className="font-display text-2xl text-cocoa">Visit the bakery</h2>
            <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cream text-cocoa">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  12 Patisserie Lane<br />
                  Ground Floor, Mumbai 400001
                </span>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cream text-cocoa">
                  <Clock className="h-4 w-4" />
                </span>
                <span>Mon — Sun · 8am to 10pm</span>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cream text-cocoa">
                  <Phone className="h-4 w-4" />
                </span>
                <a href="tel:+919812345678" className="hover:text-cocoa">+91 98 1234 5678</a>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cream text-cocoa">
                  <Mail className="h-4 w-4" />
                </span>
                <a href="mailto:hello@bakeandbliss.com" className="hover:text-cocoa">hello@bakeandbliss.com</a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 rounded-3xl border border-border bg-card p-7 shadow-soft md:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input required name="name" className="input-style" placeholder="Your name" />
            </Field>
            <Field label="Email">
              <input required name="email" type="email" className="input-style" placeholder="you@example.com" />
            </Field>
          </div>
          <Field label="Subject">
            <input name="subject" className="input-style" placeholder="Custom cake for…" />
          </Field>
          <Field label="Message">
            <textarea
              required
              name="message"
              rows={5}
              className="input-style resize-none"
              placeholder="Tell us what you have in mind…"
            />
          </Field>
          <button type="submit" disabled={submitting} className="btn-elegant btn-primary">
            {submitting ? <span>Sending…</span> : (<><span>Send message</span> <Send className="h-4 w-4" /></>)}
          </button>
        </motion.form>
      </section>

      <style>{`
        .input-style {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid var(--border);
          background: var(--background);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.2s;
        }
        .input-style:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--gold) 20%, transparent);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-cocoa/70">{label}</span>
      {children}
    </label>
  );
}
