import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971501234567";
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/zenthoz/consultation";

export function getWhatsAppLink(message?: string) {
  const encodedMsg = encodeURIComponent(message || "Hi, I'm interested in growing my business with Zenthoz UAE.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
}
