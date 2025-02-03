import { init } from '@emailjs/browser';

export const EMAILJS_SERVICE_ID = "service_a5f3p8m";
export const EMAILJS_TEMPLATE_ID = "template_gtau8ge"; // Replace with your actual template ID
export const EMAILJS_PUBLIC_KEY = "rfSJvUpcGGAXw0-tB";

export const initEmailJS = () => {
  init(EMAILJS_PUBLIC_KEY);
};

