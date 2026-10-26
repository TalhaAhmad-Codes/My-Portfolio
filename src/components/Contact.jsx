import ContactForm from "./ContactForm.jsx";
import SocialLinks from "./SocialLinks.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200 dark:border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        <ScrollReveal delay={100}>
          <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
            GET IN TOUCH
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
            Let's build something meaningful.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            Have a project idea, an opportunity, or just want to connect? Feel
            free to send me a message.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:gap-16">
          <ScrollReveal delay={150}>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40 sm:p-7">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                Send me a message
              </h3>

              <p className="mt-2 mb-6 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Fill in the details below and your email application will open
                with your message ready to send.
              </p>

              <ContactForm />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <aside className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                Connect with me
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
                You can also find me on these platforms. I'm always happy to
                connect with fellow developers and discuss interesting ideas.
              </p>

              <div className="mt-6">
                <SocialLinks />
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
                <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">
                  Prefer email? Use the contact form to prepare a message
                  directly in your email application.
                </p>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
