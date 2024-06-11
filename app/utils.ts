import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export enum Colors {
  DEEP_BLUE = "deep-blue",
  VIBRANT_TEAL = "vibrant-teal",
  SOFT_GRAY = "soft-gray",
  CRISP_WHITE = "crisp-white",
  ACCENT_ORANGE = "accent-orange",
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
