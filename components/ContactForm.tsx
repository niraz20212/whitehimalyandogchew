"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Loader2, Mail, MessageSquareText, Phone, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ContactValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactValues, string>>;

type SubmitStatus = {
  type: "success" | "error";
  message: string;
} | null;

const initialValues: ContactValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const fieldLimits: Record<keyof ContactValues, number> = {
  name: 120,
  email: 254,
  phone: 40,
  subject: 160,
  message: 4000,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\-\s.\d]{7,40}$/;

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<SubmitStatus>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof ContactValues) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((currentValues) => ({
        ...currentValues,
        [field]: event.target.value,
      }));
      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: undefined,
      }));
      setStatus(null);
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const validation = validateContactForm(values);
    setErrors(validation.errors);

    if (Object.keys(validation.errors).length > 0) {
      setStatus({ type: "error", message: "Please fix the highlighted fields before sending." });
      return;
    }

    if (!accessKey) {
      setStatus({ type: "error", message: "The contact form is not connected yet. Please add the Web3Forms access key." });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: "White Himalayan Dog Chew Website",
          subject: `[Website Contact] ${validation.values.subject}`,
          name: validation.values.name,
          email: validation.values.email,
          phone: validation.values.phone,
          message: validation.values.message,
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || !result?.success) {
        setStatus({
          type: "error",
          message: result?.message ?? "Your message could not be sent. Please try again.",
        });
        return;
      }

      setValues(initialValues);
      setErrors({});
      setStatus({ type: "success", message: "Thank you. Your inquiry has been sent successfully." });
    } catch {
      setStatus({ type: "error", message: "Your message could not be sent. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="group relative overflow-hidden rounded-lg border border-[#e8dccd] bg-white p-5 shadow-[0_24px_70px_rgba(93,61,33,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_90px_rgba(93,61,33,0.16)] sm:p-7 lg:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d8b98f] via-[#f0dcc1] to-[#fff4e6]" />


      <div className="grid gap-5 sm:grid-cols-2">
        <FormField error={errors.name} icon={<User className="h-4 w-4" aria-hidden="true" />} id="name" label="Name">
          <Input
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            className="h-12 rounded-lg border-[#e4d5c4] bg-[#fffaf4] text-[#3f2a1a] placeholder:text-[#aa9278] focus-visible:ring-[#c9a37d]"
            disabled={isSubmitting}
            id="name"
            name="name"
            onChange={updateField("name")}
            placeholder="Your full name"
            required
            value={values.name}
          />
        </FormField>

        <FormField error={errors.email} icon={<Mail className="h-4 w-4" aria-hidden="true" />} id="email" label="Email">
          <Input
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            className="h-12 rounded-lg border-[#e4d5c4] bg-[#fffaf4] text-[#3f2a1a] placeholder:text-[#aa9278] focus-visible:ring-[#c9a37d]"
            disabled={isSubmitting}
            id="email"
            name="email"
            onChange={updateField("email")}
            placeholder="you@example.com"
            required
            type="email"
            value={values.email}
          />
        </FormField>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <FormField error={errors.phone} icon={<Phone className="h-4 w-4" aria-hidden="true" />} id="phone" label="Phone Number">
          <Input
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={Boolean(errors.phone)}
            autoComplete="tel"
            className="h-12 rounded-lg border-[#e4d5c4] bg-[#fffaf4] text-[#3f2a1a] placeholder:text-[#aa9278] focus-visible:ring-[#c9a37d]"
            disabled={isSubmitting}
            id="phone"
            name="phone"
            onChange={updateField("phone")}
            required
            type="tel"
            value={values.phone}
          />
        </FormField>

        <FormField error={errors.subject} id="subject" label="Subject">
          <Input
            aria-describedby={errors.subject ? "subject-error" : undefined}
            aria-invalid={Boolean(errors.subject)}
            className="h-12 rounded-lg border-[#e4d5c4] bg-[#fffaf4] text-[#3f2a1a] placeholder:text-[#aa9278] focus-visible:ring-[#c9a37d]"
            disabled={isSubmitting}
            id="subject"
            name="subject"
            onChange={updateField("subject")}
            placeholder="Wholesale inquiry"
            required
            value={values.subject}
          />
        </FormField>
      </div>

      <div className="mt-5">
        <FormField error={errors.message} id="message" label="Message">
          <textarea
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={Boolean(errors.message)}
            className="min-h-44 w-full rounded-lg border border-[#e4d5c4] bg-[#fffaf4] p-4 text-sm text-[#3f2a1a] outline-none transition placeholder:text-[#aa9278] focus-visible:ring-2 focus-visible:ring-[#c9a37d] disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSubmitting}
            id="message"
            name="message"
            onChange={updateField("message")}
            placeholder="Enter you message here..."
            required
            value={values.message}
          />
        </FormField>
      </div>

      {status ? (
        <p
          className={
            status.type === "success"
              ? "mt-6 flex items-start gap-2 rounded-lg border border-[#9eb27a]/40 bg-[#f2f8e8] px-4 py-3 text-sm font-medium text-[#31411f]"
              : "mt-5 rounded-lg border border-destructive/25 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
          }
          role={status.type === "success" ? "status" : "alert"}
        >
          {status.type === "success" ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> : null}
          {status.message}
        </p>
      ) : null}

      <Button
        className="mt-7 h-12 rounded-lg bg-[#9d7048] px-7 text-white shadow-[0_14px_30px_rgba(157,112,72,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#805739] sm:w-fit"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
}

function validateContactForm(values: ContactValues) {
  const cleanValues: ContactValues = {
    name: values.name.trim(),
    email: values.email.trim().toLowerCase(),
    phone: values.phone.trim(),
    subject: values.subject.trim(),
    message: values.message.trim(),
  };
  const errors: ContactErrors = {};

  for (const [field, value] of Object.entries(cleanValues) as [keyof ContactValues, string][]) {
    if (!value) {
      errors[field] = "This field is required.";
    } else if (value.length > fieldLimits[field]) {
      errors[field] = `Must be ${fieldLimits[field]} characters or fewer.`;
    }
  }

  if (cleanValues.email && !emailPattern.test(cleanValues.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (cleanValues.phone && !phonePattern.test(cleanValues.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  return { values: cleanValues, errors };
}

function FormField({
  children,
  error,
  icon,
  id,
  label,
}: {
  children: ReactNode;
  error?: string;
  icon?: ReactNode;
  id: keyof ContactValues;
  label: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="flex items-center gap-2 text-sm font-semibold text-[#513724]" htmlFor={id}>
        {icon ? <span className="text-[#a97c50]">{icon}</span> : null}
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-xs font-medium text-destructive" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
