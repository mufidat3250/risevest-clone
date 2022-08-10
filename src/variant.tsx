import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

export const downloadVariant: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};
export const joinVariant: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export const dollarInvestmentVariant: Variants = {
  hidden: { y: 70, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeInOut" },
  },
};

 export const buttonVariant: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export const AppPhoneVariant: Variants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};
