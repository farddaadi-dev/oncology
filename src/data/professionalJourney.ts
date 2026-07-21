import type { DoctorId } from "./doctors";

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

export const professionalJourney: Record<
  DoctorId,
  JourneyItem[]
> = {

  farshid: [

    {
      year: "۱۳۷۹",
      title: "دکترای پزشکی",
      description:
        "دانشگاه علوم پزشکی تهران"
    },

    {
      year: "۱۳۹۰",
      title: "بورد تخصصی بیماری‌های داخلی",
      description:
        "دانشگاه علوم پزشکی جندی‌شاپور اهواز"
    },

    {
      year: "۱۳۹۴",
      title: "بورد فوق تخصص خون و سرطان (هماتولوژی و آنکولوژی)",
      description:
        "دانشگاه علوم پزشکی تهران"
    },

    {
      year: "۱۳۹۵",
      title: "پزشک معالج و عضو هیئت علمی",
      description:
        "بیمارستان رسول اکرم، دانشگاه علوم پزشکی ایران"
    },

    {
      year: "۱۳۹۶",
      title: "رئیس بخش شیمی‌درمانی",
      description:
        "بیمارستان رسول اکرم"
    },

    {
      year: "۱۳۹۸-۱۴۰۰",
      title: "مدیر برنامه دستیاری داخلی",
      description:
        "بیمارستان رسول اکرم"
    },

    {
      year: "۱۴۰۱-۱۴۰۳",
      title: "فوق تخصص خون و سرطان و رئیس بخش شیمی‌درمانی",
      description:
        "بیمارستان صارم"
    }

  ],

  nafiseh: [

    {
      year: "۱۳۸۴",
      title: "دکترای پزشکی",
      description:
        "دانشگاه علوم پزشکی تهران"
    },

    {
      year: "۱۳۸۹",
      title: "بورد تخصصی بیماری‌های داخلی",
      description:
        "دانشگاه علوم پزشکی تهران"
    },

    {
      year: "۱۳۹۳",
      title: "بورد فوق تخصص خون و سرطان (هماتولوژی و آنکولوژی)",
      description:
        "دانشگاه علوم پزشکی تهران"
    },

    {
      year: "۱۳۹۴-۱۴۰۵",
      title: "رئیس هموویژیلانس",
      description:
        "بیمارستان رسول اکرم"
    },

    {
      year: "۱۳۹۴-۱۴۰۱",
      title: "رئیس کمیته انتقال خون",
      description:
        "بیمارستان رسول اکرم"
    },

    {
      year: "۱۳۹۴-۱۴۰۱",
      title: "مسئول هسته پژوهشی فارماکوژنتیک سرطان",
      description:
        "دانشگاه علوم پزشکی ایران"
    },

    {
      year: "۱۴۰۱-۱۴۰۳",
      title: "فوق تخصص خون و سرطان",
      description:
        "بیمارستان صارم"
    }

  ]

};