import type { ImageMetadata } from "astro";

import medicalOncologyImage from "@/assets/images/services/MedicalOncology.png";
import hematologyImage from "@/assets/images/services/Hematology.png";
import proceduresImage from "@/assets/images/services/Procedures.png";
import supportiveImage from "@/assets/images/services/SupportiveCare.png";
import ambulatoryImage from "@/assets/images/services/Ambulatory.png";
import consultImage from "@/assets/images/services/SecondOpinion.png";
import homeVisitImage from "@/assets/images/services/HomeVisit.png";
import homeNursingImage from "@/assets/images/services/HomeNursing.png";
import onlineConsultationImage from "@/assets/images/services/consultation-hero.webp";
import internationalConsultationImage from "@/assets/images/services/consultation-hero.webp";
import type { IconName } from "@/data/icons";

export type ServiceSlug =
  | "medical-oncology"
  | "hematology"
  | "procedures"
  | "supportive"
  | "ambulatory"
  | "home-visit"
  | "home-nursing"
  | "consult"
  | "online-consultation"
  | "international-consultation";

  export type ServiceCategory =
  | "treatments"
  | "care"
  | "consultation";

  export interface Service {
  title: string;
  badge: string;
  description: string;
  image: ImageMetadata;
  alt: string;
  icon: IconName;
  category: ServiceCategory;
}

export const services: Record<ServiceSlug, Service> = {
  "medical-oncology": {
    title: "درمان‌های سرطان",

    badge: "خدمات تخصصی انکولوژی",

    description:
      "شیمی‌درمانی، ایمونوتراپی، درمان‌های هدفمند و پیگیری درمان بیماران مبتلا به سرطان",

    

    image: medicalOncologyImage,

    alt: "مشاوره پزشک و بیمار درباره درمان سرطان",

    icon: "ribbon",
    category: "treatments",
  },

  hematology: {
    title: "بیماری‌های خونی",

    badge: "خدمات تخصصی هماتولوژی",

    description:
      "ارزیابی و درمان کم‌خونی، اختلالات انعقادی و سایر بیماری‌های هماتولوژیک",

    

    image: hematologyImage,

    alt: "ارزیابی بیماری‌های خونی توسط پزشک متخصص",

    icon: "blood",
    category: "treatments",
  },

  procedures: {
    title: "اقدامات تخصصی",

    badge: "اقدامات تشخیصی و درمانی",

    description:
      "بیوپسی مغز استخوان، آسپیراسیون، LP و شیمی‌درمانی داخل نخاعی",

    

    image: proceduresImage,

    alt: "اقدامات تخصصی هماتولوژی و انکولوژی",

    icon: "syringe",
    category: "treatments",
  },

  supportive: {
    title: "مراقبت حمایتی",

    badge: "مراقبت جامع بیماران مبتلا به سرطان",

    description:
      "کنترل درد، تهوع، ضعف و بی‌اشتهایی ناشی از درمان‌ها برای ارتقای کیفیت زندگی بیماران",

    

    image: supportiveImage,

    alt: "مراقبت حمایتی از بیمار مبتلا به سرطان",

    icon: "supportive",
    category: "care",
  },

  ambulatory: {
    title: "اقدامات سرپایی",

    badge: "خدمات سرپایی انکولوژی و هماتولوژی",

    description:
      "سرم‌تراپی، تزریق فرآورده‌های آهن و درمان‌های علامتی",

    

    image: ambulatoryImage,

    alt: "خدمات درمانی سرپایی",

    icon: "ambulatory",
    category: "care",
  },

  consult: {
    title: "مشاوره تخصصی دوم ",

    badge: "بررسی تخصصی پرونده‌های پزشکی",

    description:
      "بررسی دقیق پرونده‌های پیچیده پزشکی، پاتولوژی و تصاویر پزشکی برای ارائه بهترین پیشنهاد درمانی",

    

    image: consultImage,

    alt: "بررسی پرونده پزشکی توسط پزشک متخصص",

    icon: "consult",
    category: "consultation",
  },
};