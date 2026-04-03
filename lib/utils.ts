import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "971541989921";
export const PHONE_DISPLAY = "+971 54 198 9921";
export const PHONE_CALL = "+971541989921";
export const EMAIL = "info@zenthoz.com";
export const SITE_URL = "https://uae.zenthoz.com";
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/zenthoz/consultation";

export function getWhatsAppLink(message?: string) {
  const encodedMsg = encodeURIComponent(
    message || "Hi, I'm interested in growing my business with Zenthoz UAE."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
}

export function getCallLink() {
  return `tel:${PHONE_CALL}`;
}

export function getEmailLink(subject?: string) {
  const sub = encodeURIComponent(subject || "Business Enquiry — Zenthoz UAE");
  return `mailto:${EMAIL}?subject=${sub}`;
}
