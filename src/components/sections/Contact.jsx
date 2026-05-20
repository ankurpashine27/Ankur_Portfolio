import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/data/portfolioData";

// Configure these in your .env file — see .env.example
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_xxxxxxx";
const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_xxxxxxx";
const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "xxxxxxxxxxxxxxxxx";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors text-sm";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const validate = (data) => {
    const errs = {};
    if (!data.user_name?.trim()) errs.user_name = "Name is required";
    if (!data.user_email?.trim()) errs.user_email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.user_email))
      errs.user_email = "Enter a valid email";
    if (!data.subject?.trim()) errs.subject = "Subject is required";
    if (!data.message?.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(formRef.current));
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current);
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle="Get In Touch" title="Let's Work Together" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              I&apos;m currently open to new opportunities — whether that&apos;s
              a full-time role, freelance project, or interesting collaboration.
              My inbox is always open. If you have a question or just want to
              say hi, I&apos;ll do my best to get back to you!
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FiMail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium mb-0.5">
                    Email
                  </p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                  <FiPhone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium mb-0.5">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                  <FiMapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium mb-0.5">
                    Location
                  </p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 font-medium">
              Or find me on
            </p>
            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
                {
                  icon: FiLinkedin,
                  href: personalInfo.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: FiTwitter,
                  href: personalInfo.twitter,
                  label: "Twitter",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glass-card rounded-xl text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary/30 transition-all"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="glass-card p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Your Name"
                    className={inputClass}
                    aria-label="Your name"
                  />
                  {errors.user_name && (
                    <p className="text-xs text-rose-500 mt-1">
                      {errors.user_name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="your@email.com"
                    className={inputClass}
                    aria-label="Your email"
                  />
                  {errors.user_email && (
                    <p className="text-xs text-rose-500 mt-1">
                      {errors.user_email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className={inputClass}
                  aria-label="Message subject"
                />
                {errors.subject && (
                  <p className="text-xs text-rose-500 mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, idea, or just say hi..."
                  className={`${inputClass} resize-none`}
                  aria-label="Your message"
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:shadow-glow-indigo transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={17} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Toast */}
            <AnimatePresence>
              {(status === "success" || status === "error") && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`mt-4 p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                    status === "success"
                      ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                      : "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800"
                  }`}
                >
                  {status === "success" ? (
                    <>
                      <FiCheckCircle size={18} /> Message sent! I&apos;ll get
                      back to you soon.
                    </>
                  ) : (
                    <>
                      <FiAlertCircle size={18} /> Something went wrong. Please
                      try again.
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
