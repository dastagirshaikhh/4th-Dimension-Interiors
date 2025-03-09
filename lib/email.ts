import { init } from '@emailjs/browser';

export const EMAILJS_SERVICE_ID = "service_zo9w3ab";
export const EMAILJS_TEMPLATE_ID = "template_huxfdgz"; // Replace with your actual template ID
export const EMAILJS_PUBLIC_KEY = "xA-5b6J4CZxhkPb4B"

export const initEmailJS = () => {
  init(EMAILJS_PUBLIC_KEY);
};

