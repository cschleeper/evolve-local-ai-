"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Phone is required"),
  businessName: z.string().min(2, "Business name is required"),
  serviceInterest: z.string().min(1, "Select a service"),
  message: z.string().min(10, "Please add more detail"),
  referralSource: z.string().min(1, "Select an option"),
});

type ContactValues = z.infer<typeof contactSchema>;

const services = [
  "Dedicated AI Assistant",
  "AI Website Chatbot",
  "AI-Powered Website Redesign",
  "Workflow Automation",
  "AI Business Intelligence",
  "AI Phone and Voice Agent",
  "Not sure yet",
];

const referralSources = ["Google", "Referral", "Social Media", "Email", "Event", "Other"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-[20px] border border-black/10 bg-[var(--color-card)] p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input className="input" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input type="email" className="input" {...register("email")} />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input className="input" {...register("phone")} />
        </Field>
        <Field label="Business Name" error={errors.businessName?.message}>
          <input className="input" {...register("businessName")} />
        </Field>
      </div>
      <Field label="Service Interested In" error={errors.serviceInterest?.message}>
        <select className="input" defaultValue="" {...register("serviceInterest")}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </Field>
      <Field label="How did you hear about us?" error={errors.referralSource?.message}>
        <select className="input" defaultValue="" {...register("referralSource")}>
          <option value="" disabled>
            Select one
          </option>
          {referralSources.map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea className="input min-h-32 resize-y" {...register("message")} />
      </Field>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent)] disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
      {status === "success" ? (
        <p className="text-sm text-green-700">Thanks. Your message was sent and we will reply soon.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-700">Something went wrong. Please email us directly.</p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-[var(--color-ink)]">{label}</span>
      {children}
      {error ? <span className="text-xs text-red-700">{error}</span> : null}
    </label>
  );
}
