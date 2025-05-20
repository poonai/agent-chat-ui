
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function percent(current: number, total: number) {
  if (total === 0) {
    return 0;
  }
  return Math.round((current / total) * 100);
}