import type { ImageMetadata } from "astro";
import type { IconName } from "@/data/icons";

import FarshidProfileImage from "@/assets/images/doctors/farshid-profile.jpg";
import FarshidBiographyImage from "@/assets/images/doctors/farshid-biography.jpg";
import FarshidResearchImage from "@/assets/images/doctors/farshid-research.jpg";
import FarshidClinicImage from "@/assets/images/doctors/farshid-clinic.jpg";

import NafisehProfileImage from "@/assets/images/doctors/nafiseh-profile.png";
import NafisehBiographyImage from "@/assets/images/doctors/nafiseh-biography.png";
import NafisehResearchImage from "@/assets/images/doctors/nafiseh-research.png";
import NafisehClinicImage from "@/assets/images/doctors/nafiseh-clinic.png";



export type DoctorId = "farshid" | "nafiseh";



export interface Session {
  day: string;
  hours: string;
}

export interface Location {
  name: string;
  phone: string;
  sessions: Session[];
}

export interface Education {
  title: string;
  institution: string;
  years: string;
}

export interface Experience {
  title: string;
  workplace: string;
  years: string;
}

export interface AcademicStat {
  title: string;
  value: string;
  description: string;
  icon: IconName;
}

export interface TreatmentApproach {
  title?: string;
  paragraphs: string[];
  icon?: IconName;
}

export interface Doctor {

  id: DoctorId;

  name: string;

  specialty: string;

  images: {
    profile: ImageMetadata;
    biography: ImageMetadata;
    research: ImageMetadata;
    clinic: ImageMetadata;
  };

  heroDescription: string;

  bio: string;

  biography: {
    introduction: string;
    experience: string;
    philosophy: string;
  };

  quote: string;

  highlights: string[];

  education: Education[];

  researchInterests: string[];

  experiences: Experience[];

  certifications: string[];

  memberships: string[];

  researchSummary?: string;

  research: AcademicStat[];

  treatmentApproach: TreatmentApproach;

  cvUrl?: string;

  publicationsUrl: string;

  profileUrl: string;

  consultationUrl: string;

  locations: Location[];
}



export const doctors: Doctor[] = [

/* ===========================================================
   Dr. Nafiseh Ansarinejad
=========================================================== */

{

  id: "nafiseh",

  name: "دکتر نفیسه انصاری‌نژاد",

  specialty: "فوق تخصص خون و آنکولوژی",

  images: {

    profile: NafisehProfileImage,

    biography: NafisehBiographyImage,

    research: NafisehResearchImage,

    clinic: NafisehClinicImage,

  },

  heroDescription:
    "فوق تخصص خون و آنکولوژی با بیش از یک دهه تجربه در تشخیص و درمان بیماری‌های خون، سرطان‌های شایع و درمان‌های نوین سرطان، با تمرکز بر مراقبت فردمحور و تصمیم‌گیری مبتنی بر شواهد علمی.",

  bio:
    "فوق تخصص خون و آنکولوژی با تجربه در درمان بیماری‌های خون، سرطان‌های شایع و ارائه مراقبت‌های مبتنی بر شواهد علمی.",

  biography: {

    introduction:
      "درمان سرطان و بیماری‌های خون، علاوه بر دانش پزشکی، نیازمند دقت، همدلی و همراهی مستمر با بیمار است. در طول سال‌های فعالیت حرفه‌ای همواره تلاش کرده‌ام تصمیم‌های درمانی را بر پایه شواهد علمی روز و با در نظر گرفتن شرایط و اولویت‌های هر بیمار اتخاذ کنم.",

    experience:
      "فعالیت در مراکز دانشگاهی، بیمارستان‌های تخصصی و بخش‌های پژوهشی این فرصت را برای من فراهم کرده است که در کنار درمان بیماران، در توسعه دانش پزشکی، آموزش دستیاران و انجام پژوهش‌های بالینی نیز نقش داشته باشم.",

    philosophy:
      "هدف من ارائه مراقبتی علمی، دقیق و انسانی است تا هر بیمار با آگاهی، آرامش و اعتماد بیشتری مسیر درمان خود را طی کند."

  },

  quote:
    "درمان موفق زمانی شکل می‌گیرد که دانش پزشکی، ارتباط صمیمانه و اعتماد متقابل در کنار یکدیگر قرار گیرند.",

  highlights: [

    "بیش از ۱۰ سال تجربه در فوق تخصص خون و آنکولوژی",

    "درمان سرطان‌های خون و تومورهای جامد",

    "فعالیت پژوهشی در فارماکوژنتیک سرطان",

    "عضو انجمن‌های علمی ایران و اروپا"

  ],

  education: [

    {

      title: "فوق تخصص خون و آنکولوژی",

      institution: "دانشگاه علوم پزشکی تهران",

      years: "۱۳۹۰–۱۳۹۳"

    },

    {

      title: "تخصص بیماری‌های داخلی",

      institution: "دانشگاه علوم پزشکی تهران",

      years: "۱۳۸۵–۱۳۸۹"

    },

    {

      title: "دکترای پزشکی",

      institution: "دانشگاه علوم پزشکی تهران",

      years: "۱۳۷۶–۱۳۸۴"

    }

  ],

  researchInterests: [

    "فارماکوژنتیک سرطان",
  
    "سرطان پستان و درمان‌های هدفمند",
  
    "پزشکی شخصی‌سازی شده در سرطان",
  
    "بیماری‌های خوش‌خیم و بدخیم خون"
  
  ],

  experiences: [

    {

      title: "پزشک مشاور خون و آنکولوژی",

      workplace: "بیمارستان صارم، تهران",

      years: "۱۴۰۱–۱۴۰۳"

    },

    {

      title: "رئیس هسته پژوهشی فارماکوژنتیک سرطان",

      workplace: "دانشگاه علوم پزشکی ایران",

      years: "۱۳۹۴–۱۴۰۱"

    },

    {

      title: "مسئول هموویژیلانس و رئیس کمیته انتقال خون",

      workplace: "بیمارستان رسول اکرم",

      years: "۱۳۹۴–۱۴۰۱"

    },

    {

      title: "معاون آموزشی گروه هماتولوژی و آنکولوژی",

      workplace: "بیمارستان رسول اکرم",

      years: "۱۳۹۴–۱۴۰۱"

    }

  ],

  certifications: [

    "بورد فوق تخصص خون و آنکولوژی",

    "بورد تخصصی بیماری‌های داخلی"

  ],

  treatmentApproach: {

    title: "نگاه من به درمان",
  
    paragraphs: [
  
      "در درمان بیماری‌های سرطان و اختلالات خونی، باور دارم که هر بیمار مسیر درمانی منحصربه‌فردی دارد و انتخاب بهترین روش درمان باید بر اساس نوع بیماری، شرایط فردی، شواهد علمی روز و اهداف بیمار انجام شود.",
  
      "تلاش می‌کنم با ترکیب دانش تخصصی، تجربه بالینی و گفت‌وگوی شفاف با بیمار و خانواده او، تصمیم‌های درمانی آگاهانه و متناسب با نیازهای هر فرد گرفته شود. هدف من تنها کنترل بیماری نیست، بلکه حفظ کیفیت زندگی و همراهی بیمار در تمام مراحل مسیر درمان است."
  
    ],
  
    icon: "heartPulse"
  
  },

  memberships: [

    "انجمن متخصصین داخلی ایران",

    "انجمن هماتولوژی و آنکولوژی ایران",

    "European Society for Medical Oncology (ESMO)"

  ],

  researchSummary:
    "دارای سابقه پژوهش و انتشار مقالات متعدد در زمینه سرطان پستان، سرطان‌های گوارشی، فارماکوژنتیک، درمان‌های هدفمند، پزشکی شخصی‌سازی‌شده و پزشکی انتقال خون.",

  research: [

    {

      title: "مقاله علمی",

      value: "یبش از ۲۰",

      description:
        "انتشار مقالات در زمینه سرطان، هماتولوژی، پزشکی انتقال خون و فارماکوژنتیک.",

      icon: "bookOpenCheck"

    },

    {

      title: "کارآزمایی‌ بالینی",

      value: "بیش از ۱۵",

      description:
        "همکاری در مطالعات چندمرکزی و کارآزمایی‌های بالینی فاز III.",

      icon: "flaskConical"

    },

    {

      title: "مدیریت علمی",

      value: "7 سال",

      description:
        "مدیریت پژوهش، آموزش و برنامه‌های هموویژیلانس و انتقال خون.",

      icon: "graduationCap"

    }

  ],

  cvUrl: "/cv/nafiseh-ansarinejad.pdf",

  publicationsUrl:
"/about/nafiseh/publications",

  profileUrl: "/about/nafiseh-ansarinejad",

  consultationUrl:
    "https://axon.me/hcps/104083-nafiseh-ansari-nejad/",

  locations: []

},

/* ===========================================================
   Dr. Farshid Fardad
=========================================================== */

{

  id: "farshid",

  name: "دکتر فرشید فرداد",

  specialty: "فوق تخصص خون و آنکولوژی",

  images: {

    profile: FarshidProfileImage,

    biography: FarshidBiographyImage,

    research: FarshidResearchImage,

    clinic: FarshidClinicImage,

  },

  heroDescription:
    "فوق تخصص خون و آنکولوژی با بیش از دو دهه تجربه در تشخیص و درمان بیماری‌های خون و سرطان، با رویکردی مبتنی بر شواهد علمی، ارتباط شفاف با بیمار و توجه به کیفیت زندگی.",

  bio:
    "فوق تخصص خون و آنکولوژی با بیش از دو دهه تجربه در تشخیص و درمان بیماری‌های خون و سرطان و ارائه مراقبت‌های فردمحور.",

  biography: {

    introduction:
      "از آغاز فعالیت حرفه‌ای، همواره تلاش کرده‌ام درمان بیماری را تنها به تجویز دارو محدود نکنم. باور دارم که آگاهی، اعتماد و ارتباط مؤثر میان پزشک و بیمار، نقش مهمی در موفقیت درمان دارد و هر بیمار شایسته دریافت مراقبتی متناسب با شرایط و نیازهای فردی خود است.",

    experience:
      "در طول بیش از دو دهه فعالیت پزشکی و سال‌ها تجربه فوق‌تخصصی در حوزه هماتولوژی و آنکولوژی، فرصت درمان بیماران مبتلا به طیف گسترده‌ای از بیماری‌های خون و سرطان، مدیریت بخش‌های درمانی، آموزش دستیاران تخصصی و مشارکت در پژوهش‌های بالینی را داشته‌ام.",

    philosophy:
      "در هر برنامه درمانی تلاش می‌کنم با تکیه بر جدیدترین شواهد علمی و با در نظر گرفتن شرایط اختصاصی هر بیمار، بهترین تصمیم درمانی اتخاذ شود تا بیمار با آرامش، آگاهی و اطمینان بیشتری مسیر درمان خود را طی کند."

  },

  quote:
    "هدف من این است که هر بیمار، علاوه بر دریافت بهترین درمان علمی، با آرامش و آگاهی مسیر درمان خود را طی کند.",

  highlights: [

    "بیش از ۲۰ سال تجربه پزشکی",

    "فوق تخصص خون و آنکولوژی",

    "مدیریت بخش شیمی‌درمانی",

    "آموزش دستیاران تخصصی",

    "تألیف کتاب و فعالیت پژوهشی"

  ],

  education: [

    {

      title: "فوق تخصص خون و آنکولوژی",

      institution: "دانشگاه علوم پزشکی تهران",

      years: "۱۳۹۱–۱۳۹۴"

    },

    {

      title: "تخصص بیماری‌های داخلی",

      institution: "دانشگاه علوم پزشکی جندی‌شاپور اهواز",

      years: "۱۳۸۶–۱۳۹۰"

    },

    {

      title: "دکترای پزشکی",

      institution: "دانشگاه علوم پزشکی تهران",

      years: "۱۳۷۲–۱۳۷۹"

    }

  ],

  researchInterests: [

    "درمان‌های سیستمیک سرطان",
  
    "سرطان‌های ریه و گوارش",
  
    "عوارض ناشی از شیمی‌درمانی",
  
    "درمان‌های حمایتی در بیماران سرطانی"
  
  ],

  experiences: [

    {

      title: "پزشک مشاور و رئیس بخش شیمی‌درمانی",

      workplace: "بیمارستان صارم، تهران",

      years: "۱۴۰۱–۱۴۰۳"

    },

    {

      title: "پزشک مشاور خون و آنکولوژی",

      workplace: "مرکز پزشکی آروین، تهران",

      years: "۱۳۹۷–۱۴۰۳"

    },

    {

      title: "عضو هیئت علمی و پزشک معالج",

      workplace: "بیمارستان رسول اکرم، دانشگاه علوم پزشکی ایران",

      years: "۱۳۹۵–۱۴۰۰"

    },

    {

      title: "رئیس بخش شیمی‌درمانی",

      workplace: "بیمارستان رسول اکرم",

      years: "۱۳۹۷–۱۴۰۰"

    },

    {

      title: "مدیر برنامه رزیدنتی بیماری‌های داخلی",

      workplace: "بیمارستان رسول اکرم",

      years: "۱۳۹۸–۱۴۰۰"

    },

    {

      title: "متخصص بیماری‌های داخلی",

      workplace: "بیمارستان آل‌جلیل، گرگان",

      years: "۱۳۹۰–۱۳۹۱"

    },

    {

      title: "رئیس مرکز مدیریت بیماری‌ها",

      workplace: "شبکه بهداشت خاش",

      years: "۱۳۸۴–۱۳۸۶"

    },

    {

      title: "رئیس مرکز خدمات جامع سلامت",

      workplace: "مرکز بهداشتی چاه احمد، خاش",

      years: "۱۳۸۰–۱۳۸۴"

    }

  ],

  certifications: [

    "بورد فوق تخصص خون و آنکولوژی",

    "بورد تخصصی بیماری‌های داخلی",

    "Good Clinical Practice (NIDA Clinical Trials Network)"

  ],

  treatmentApproach: {

    title: "نگاه من به درمان",
  
    paragraphs: [
  
      "در درمان بیماری‌های سرطان و اختلالات خونی، تلاش می‌کنم هر بیمار را به عنوان فردی با شرایط، نگرانی‌ها و اولویت‌های منحصربه‌فرد ببینم.",
  
      "انتخاب بهترین روش درمانی نیازمند ترکیب دانش روز پزشکی، تجربه بالینی و شناخت دقیق شرایط بیمار است. هدف من ارائه درمانی مبتنی بر شواهد علمی، همراه با ارتباط شفاف و حمایت از بیمار و خانواده او در تمام مراحل مسیر درمان است."
  
    ],
  
    icon: "heartPulse"
  
  },

  memberships: [

    "انجمن متخصصین داخلی ایران",

    "انجمن هماتولوژی و آنکولوژی ایران",

    "European Society for Medical Oncology (ESMO)"

  ],

  researchSummary:
    "دارای سابقه انتشار مقالات متعدد، مشارکت در کارآزمایی‌های بالینی، تألیف کتاب و انجام پژوهش در زمینه سرطان، بیماری‌های خون، درمان‌های حمایتی و پزشکی مبتنی بر شواهد.",

  research: [

    {

      title: "مقاله علمی",

      value: "بیش از ۱۵",

      description:
        "انتشار مقالات پژوهشی در زمینه سرطان، هماتولوژی و درمان‌های حمایتی.",

      icon: "bookOpenCheck"

    },

    {

      title: "پژوهش‌ بالینی",

      value: "بیش از ۱۰",

      description:
        "مشارکت در مطالعات بالینی و پژوهش‌های مرتبط با درمان سرطان.",

      icon: "flaskConical"

    },

    {

      title: "کتاب و آموزش",

      value: "۲ کتاب",

      description:
        "تألیف کتاب، آموزش دستیاران تخصصی و مدیریت برنامه‌های آموزشی.",

      icon: "graduationCap"

    }

  ],

  cvUrl: "/cv/farshid-fardad.pdf",

  publicationsUrl:
"/about/farshid/publications",

  profileUrl: "/about/farshid-fardad",

  consultationUrl:
    "https://axon.me/hcps/84371-farshid-fardad/",

  locations: []

}

];

export function getDoctor(id: DoctorId) {
  return doctors.find((doctor) => doctor.id === id);
}