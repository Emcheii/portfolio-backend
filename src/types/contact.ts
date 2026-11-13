export interface ContactField {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "textarea";
  required: boolean;
  maxLength?: number;
  rows?: number;
}

export interface ContactData {
  title: string;
  subtitle: string;
  timezone: string;
  endpointLabel: string;
  securityLabel: string;
  fields: ContactField[];
  privacyNotice: string;
  submitLabel: string;
  successMessage: string;
}