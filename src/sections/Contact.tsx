import { contactData } from "../data/contact";
import ContactForm from "../components/features/contact/ContactForm";

function Contact() {
  const handleSubmit = (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    // Connect this handler to an email service or backend later.
    console.info("Contact form submission:", values);
  };

  return (
    <section
      id="contact"
      className="w-full scroll-mt-20 bg-[#0f131c] py-10 sm:py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg bg-[#181b25] p-5 sm:p-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
              {contactData.title}
            </h2>

            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              {contactData.subtitle}
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded bg-[#262a34] px-3 py-2 font-mono text-xs text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {contactData.timezone}
          </div>
        </div>

        {/* Full-Width Contact Form */}
        <ContactForm data={contactData} onSubmit={handleSubmit} />
      </div>
    </section>
  );
}

export default Contact;