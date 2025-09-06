import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export type Colors = "deep-blue" | "vibrant-teal" | "soft-gray" | "crisp-white" | "accent-orange";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function renderPrice(price: number) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(price); // Assuming price is in cents
}
