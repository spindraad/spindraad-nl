import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export type Colors = "deep-blue" | "vibrant-teal" | "soft-gray" | "crisp-white" | "accent-orange";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
