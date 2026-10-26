import { useState } from "react";
import emailjs from "@emailjs/browser";

const CONTACT_EMAIL = "talha.ahmad.tech@gmail.com";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const fieldClassName =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15 dark:border-slate-800 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-400";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (status) setStatus("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !subject || !message) {
      setStatus("Please complete all fields.");
      return;
    }

    setStatus("Sending your message...");
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject,
          message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("Message sent successfully! Thank you for reaching out.");
      setForm(initialForm);
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("Couldn't send your message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Name - Entry */}
        <div>
          <label
            htmlFor="contact-name"
            className="text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            maxLength={100}
            className={fieldClassName}
          />
        </div>

        {/* Email Address - Entry */}
        <div>
          <label
            htmlFor="contact-email"
            className="text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@example.com"
            required
            maxLength={254}
            className={fieldClassName}
          />
        </div>
      </div>

      {/* Subject - Entry */}
      <div>
        <label
          htmlFor="contact-subject"
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          placeholder="What would you like to discuss?"
          required
          maxLength={150}
          className={fieldClassName}
        />
      </div>

      {/* Message Box */}
      <div>
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me a little about your idea..."
          rows={5}
          required
          maxLength={5000}
          className={`${fieldClassName} resize-y`}
        />
      </div>

      {/* Send Button */}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-sky-400 motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
      >
        {status === "Sending your message..." ? "Sending..." : "Send Message"}
        <span aria-hidden="true">↗</span>
      </button>

      {status && (
        <p
          role="status"
          aria-live="polite"
          className="text-sm text-slate-600 dark:text-slate-400"
        >
          {status}
        </p>
      )}
    </form>
  );
}
