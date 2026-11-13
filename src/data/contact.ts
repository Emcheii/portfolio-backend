import type { ContactData } from "../types/contact";

export const contactData: ContactData = {
  title: "Get in Touch",
  subtitle:
    "Have a question or want to discuss a project? Send me a message.",
  timezone: "TIMEZONE: UTC+8 (PHT)",
  endpointLabel: "CONTACT / MESSAGE FORM",
  securityLabel: "CONTACT FORM",
  fields: [
    {
      id: "contact-name",
      name: "name",
      label: "PARAM: sender_name",
      placeholder: "Your Name",
      type: "text",
      required: true,
    },
    {
      id: "contact-email",
      name: "email",
      label: "PARAM: return_email",
      placeholder: "your.email@example.com",
      type: "email",
      required: true,
    },
    {
      id: "contact-message",
      name: "message",
      label: "PAYLOAD: message_body",
      placeholder: "Write your message here...",
      type: "textarea",
      required: true,
      maxLength: 2048,
      rows: 6,
    },
  ],
  privacyNotice: "Your email will only be used to respond to your inquiry.",
  submitLabel: "Send Message",
  successMessage: "Your message has been sent successfully.",
};