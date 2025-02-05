import { init } from '@emailjs/browser';

export const EMAILJS_SERVICE_ID = "service_8lyo5be";
export const EMAILJS_TEMPLATE_ID = "template_ikchjyy"; // Replace with your actual template ID
export const EMAILJS_PUBLIC_KEY = "XpK474YJyvr3Ej17g";

export const initEmailJS = () => {
  init(EMAILJS_PUBLIC_KEY);
};

