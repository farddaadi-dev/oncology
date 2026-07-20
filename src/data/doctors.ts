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


  // Short description for DoctorCard
  bio: string;


  // Full introduction for doctor page
  biography: {
    introduction: string;
    experience: string;
    philosophy: string;
  };


  highlights: string[];


  education: Education[];


  experiences: Experience[];


  certifications: string[];


  researchSummary?: string;

  biographyImage: ImageMetadata;

  heroDescription: string;

  research: AcademicStat[];

  memberships: string[];


  cvUrl?: string;


  profileUrl: string;


  consultationUrl: string;


  locations: Location[];

  heroDescription: string;

  

}

export interface AcademicStat {
  title: string;
  value: string;
  description: string;
  icon: IconName;
}



export const doctors: Doctor[] = [

/* =====================================================
   Dr. Nafiseh Ansarinejad
===================================================== */


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


  bio:
    "فوق تخصص خون و آنکولوژی با بیش از یک دهه تجربه در درمان بیماری‌های خون، سرطان‌های شایع و ارائه مراقبت‌های مبتنی بر شواهد علمی.",


    biography: {

      introduction:
        "در تمام سال‌های فعالیت حرفه‌ای، همواره تلاش کرده‌ام درمان سرطان و بیماری‌های خون را با نگاهی علمی، دقیق و در عین حال انسانی دنبال کنم. باور دارم که هر بیمار شرایط و نیازهای منحصربه‌فرد خود را دارد و درمان موفق، نتیجه همکاری نزدیک پزشک و بیمار است.",
    
      experience:
        "تجربه فعالیت در مراکز دانشگاهی، بیمارستان‌های تخصصی و مشارکت در پژوهش‌های علمی، فرصت ارزشمندی برای به‌کارگیری جدیدترین دستاوردهای پزشکی در مراقبت از بیماران فراهم کرده است. این تجربه به من کمک کرده است تا در کنار درمان بیماری، به کیفیت زندگی و دغدغه‌های بیماران نیز توجه ویژه داشته باشم.",
    
      philosophy:
        "هدف من ارائه مراقبتی مبتنی بر شواهد علمی، همراه با ارتباطی شفاف و احترام به انتخاب‌های بیمار است تا هر فرد بتواند با آگاهی و اطمینان، مسیر درمان خود را دنبال کند."
    
    },


  highlights: [

    "فوق تخصص خون و آنکولوژی از دانشگاه علوم پزشکی تهران",

    "تجربه در درمان سرطان‌های خون و تومورهای جامد",

    "فعالیت پژوهشی در زمینه فارماکوژنتیک سرطان",

    "عضو انجمن‌های علمی داخلی و بین‌المللی"

  ],


  education: [

    {
      title: "فوق تخصص خون و آنکولوژی",
      institution: "دانشگاه علوم پزشکی تهران",
      years: "۱۳۹۰ - ۱۳۹۳"
    },

    {
      title: "تخصص بیماری‌های داخلی",
      institution: "دانشگاه علوم پزشکی تهران",
      years: "۱۳۸۵ - ۱۳۸۹"
    },

    {
      title: "دکترای پزشکی عمومی",
      institution: "دانشگاه علوم پزشکی تهران",
      years: "۱۳۷۶ - ۱۳۸۴"
    }

  ],


  experiences: [

    {
      title: "پزشک مشاور خون و آنکولوژی",
      workplace: "بیمارستان سَرم، تهران",
      years: "۱۴۰۱ - ۱۴۰۳"
    },

    {
      title: "رئیس هسته پژوهشی فارماکوژنتیک سرطان",
      workplace: "دانشگاه علوم پزشکی ایران",
      years: "۱۳۹۴ - ۱۴۰۱"
    },

    {
      title: "مسئول هموویژیلانس و کمیته انتقال خون",
      workplace: "بیمارستان رسول اکرم، تهران",
      years: "۱۳۹۴ - ۱۴۰۱"
    }

  ],


  certifications: [

    "عضو انجمن خون و سرطان ایران",

    "عضو انجمن انکولوژی پزشکی اروپا (ESMO)",

    "عضو انجمن متخصصین داخلی ایران"

  ],


  researchSummary:
    "دارای مقالات متعدد در زمینه سرطان پستان، سرطان‌های گوارشی، درمان‌های هدفمند، پزشکی شخصی‌سازی شده و درمان عوارض ناشی از شیمی‌درمانی.",


  profileUrl:
    "/about/nafiseh-ansarinejad",

    research: [

      {
        title: "مقالات علمی",
        value: "20+",
        description:
          "انتشار مقالات علمی در حوزه سرطان، هماتولوژی، فارماکوژنتیک و پزشکی انتقال خون.",
        icon: "bookOpenCheck",
      },
    
      {
        title: "پژوهش‌های بالینی",
        value: "15+",
        description:
          "مشارکت در مطالعات بالینی، کارآزمایی‌های فاز III و پژوهش‌های سرطان پستان.",
        icon: "flaskConical",
      },
    
      {
        title: "مدیریت علمی",
        value: "7 سال",
        description:
          "مدیریت پژوهش، آموزش و برنامه‌های همووژیلانس و پزشکی انتقال خون.",
        icon: "graduationCap",
      },
    
    ],
    
    memberships: [
      "انجمن متخصصین داخلی ایران",
      "انجمن هماتولوژی و آنکولوژی ایران",
      "European Society for Medical Oncology (ESMO)"
    ],
    
    cvUrl: "/cv/nafiseh-ansarinejad.pdf",


  consultationUrl:
    "https://axon.me/hcps/104083-nafiseh-ansari-nejad/",


  locations: [],

  heroDescription: "فوق تخصص خون و آنکولوژی با تجربه در تشخیص و درمان بیماری‌های خون، سرطان‌های شایع و درمان‌های نوین سرطان، با تمرکز بر مراقبت فردمحور و تصمیم‌گیری مبتنی بر شواهد علمی."

},



/* =====================================================
   Dr. Farshid Fardad
===================================================== */


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


  bio:
    "فوق تخصص خون و آنکولوژی با بیش از دو دهه تجربه در تشخیص و درمان بیماری‌های خون و سرطان با تمرکز بر مراقبت علمی و فردمحور.",


    biography: {

      introduction:
        "از آغاز فعالیت پزشکی، هدف من تنها درمان بیماری نبوده است؛ بلکه تلاش کرده‌ام در هر مرحله از مسیر درمان، همراه و پاسخگوی بیماران و خانواده‌های آنان باشم. باور دارم که آگاهی، اعتماد و ارتباط مؤثر، نقش مهمی در موفقیت درمان ایفا می‌کنند.",
    
      experience:
        "طی بیش از دو دهه فعالیت حرفه‌ای در حوزه پزشکی و سال‌ها تجربه تخصصی در هماتولوژی و آنکولوژی، فرصت همکاری با مراکز دانشگاهی و درمانی مختلف و درمان بیماران مبتلا به طیف گسترده‌ای از بیماری‌های خون و سرطان را داشته‌ام. این تجربه، دیدگاهی جامع نسبت به تصمیم‌گیری‌های درمانی و مراقبت فردمحور برای من ایجاد کرده است.",
    
      philosophy:
        "در هر برنامه درمانی تلاش می‌کنم با تکیه بر شواهد علمی روز، شرایط اختصاصی هر بیمار و کیفیت زندگی او، مناسب‌ترین مسیر درمان انتخاب شود. هدف من ایجاد فضایی است که بیمار با آرامش، آگاهی و اطمینان بیشتری مسیر درمان خود را طی کند."
    
    },


  highlights: [

    "بیش از ۲۰ سال تجربه پزشکی",

    "فوق تخصص خون و آنکولوژی از دانشگاه علوم پزشکی تهران",

    "تجربه مدیریت بخش شیمی‌درمانی",

    "فعالیت علمی و پژوهشی در حوزه سرطان"

  ],


  education: [

    {
      title: "فوق تخصص خون و آنکولوژی",
      institution: "دانشگاه علوم پزشکی تهران",
      years: "۱۳۹۲ - ۱۳۹۵"
    },

    {
      title: "تخصص بیماری‌های داخلی",
      institution: "دانشگاه علوم پزشکی جندی‌شاپور اهواز",
      years: "۱۳۸۶ - ۱۳۹۰"
    },

    {
      title: "دکترای پزشکی عمومی",
      institution: "دانشگاه علوم پزشکی تهران",
      years: "۱۳۷۲ - ۱۳۷۹"
    }

  ],


  experiences: [

    {
      title: "رئیس بخش شیمی‌درمانی و پزشک مشاور",
      workplace: "بیمارستان سَرم، تهران",
      years: "۱۴۰۱ - ۱۴۰۳"
    },

    {
      title: "پزشک فوق تخصص خون و آنکولوژی",
      workplace: "مرکز پزشکی آروین، تهران",
      years: "۱۳۹۷ - ۱۴۰۳"
    },

    {
      title: "پزشک معالج و مسئول بخش شیمی‌درمانی",
      workplace: "بیمارستان رسول اکرم، تهران",
      years: "۱۳۹۵ - ۱۴۰۰"
    }

  ],


  certifications: [

    "عضو انجمن متخصصین داخلی ایران",

    "عضو انجمن خون و سرطان ایران",

    "عضو انجمن انکولوژی پزشکی اروپا (ESMO)",

    "دارای گواهی Good Clinical Practice از NIDA Clinical Trials Network"

  ],


  researchSummary:
    "نویسنده و همکار بیش از ۱۵ مقاله علمی در زمینه سرطان، بیماری‌های خون، درمان‌های ضدسرطان و عوارض درمان.",


  profileUrl:
    "/about/farshid-fardad",

    research: [

      {
        title: "مقالات علمی",
        value: "15+",
        description:
          "انتشار مقالات پژوهشی در زمینه سرطان، هماتولوژی و درمان‌های حمایتی.",
        icon: "bookOpenCheck",
      },
    
      {
        title: "پژوهش‌های بالینی",
        value: "10+",
        description:
          "مشارکت در کارآزمایی‌های بالینی و پژوهش‌های مرتبط با درمان سرطان.",
        icon: "flaskConical",
      },
    
      {
        title: "آموزش و مدیریت علمی",
        value: "8 سال",
        description:
          "تجربه در آموزش دستیاران تخصصی، مدیریت آموزشی و تألیف کتاب.",
        icon: "graduationCap",
      },
    
    ],
    
    memberships: [
      "انجمن متخصصین داخلی ایران",
      "انجمن هماتولوژی و آنکولوژی ایران",
      "European Society for Medical Oncology (ESMO)"
    ],
    
    cvUrl: "/cv/farshid-fardad.pdf",


  consultationUrl:
    "https://axon.me/hcps/84371-farshid-fardad/",


  locations: [],

  heroDescription:
"فوق تخصص خون و آنکولوژی با بیش از دو دهه تجربه در تشخیص و درمان بیماری‌های خون و سرطان، با رویکردی مبتنی بر شواهد علمی و توجه به نیازهای فردی بیماران."

}

];