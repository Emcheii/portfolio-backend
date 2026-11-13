import { useState, type FormEvent } from "react";
import { Send, ShieldCheck } from "lucide-react";

import type { ContactData } from "../../../types/contact";

interface ContactFormProps {
  data: ContactData;
  onSubmit: (values: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

function ContactForm({ data, onSubmit }: ContactFormProps) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const messageBytes = new TextEncoder().encode(formValues.message).length;
  const maxLength = 2048;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <div className="w-full rounded-lg border border-slate-800 bg-[#181b25] p-4 sm:p-6">
      {/* Terminal Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          </div>

          <span className="font-mono text-xs font-medium text-slate-300 sm:text-sm">
            {data.endpointLabel}
          </span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {data.securityLabel}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        {/* Name and Email */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.fields
            .filter((field) => field.type !== "textarea")
            .map((field) => (
              <div key={field.id} className="flex flex-col gap-2">
                <label
                  htmlFor={field.id}
                  className="flex items-center justify-between gap-2 font-mono text-xs text-slate-300"
                >
                  <span>{field.label}</span>
                  {field.required && (
                    <span className="text-[10px] text-slate-500">
                      REQUIRED
                    </span>
                  )}
                </label>

                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formValues[field.name as "name" | "email"]}
                  onChange={handleChange}
                  className="w-full rounded bg-[#262a34] px-3 py-3 text-sm text-slate-200 outline-none transition-colors placeholder:text-slate-500 focus:bg-[#31353f] focus:ring-1 focus:ring-emerald-400"
                />
              </div>
            ))}
        </div>

        {/* Message */}
        {data.fields
          .filter((field) => field.type === "textarea")
          .map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-slate-300">
                <label htmlFor={field.id}>{field.label}</label>
                <span className="text-[10px] text-slate-500">
                  {messageBytes} / {maxLength} BYTES
                </span>
              </div>

              <textarea
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                maxLength={field.maxLength}
                rows={field.rows ?? 6}
                value={formValues.message}
                onChange={handleChange}
                className="w-full resize-none rounded bg-[#262a34] p-3 text-sm leading-relaxed text-slate-200 outline-none transition-colors placeholder:text-slate-500 focus:bg-[#31353f] focus:ring-1 focus:ring-emerald-400"
              />
            </div>
          ))}

        {/* Privacy Notice and Submit */}
        <div className="flex flex-col justify-between gap-4 pt-1 sm:flex-row sm:items-center">
          <div className="flex max-w-md items-start gap-2">
            <ShieldCheck
              size={16}
              className="mt-0.5 shrink-0 text-emerald-400"
            />
            <p className="font-mono text-xs leading-relaxed text-slate-400">
              {data.privacyNotice}
            </p>
          </div>

          <button
            type="submit"
            className="flex shrink-0 items-center justify-center gap-2 rounded bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#003824] transition-colors hover:bg-emerald-300 active:scale-[0.98]"
          >
            <Send size={16} />
            {data.submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;