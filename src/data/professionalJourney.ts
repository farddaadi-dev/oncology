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
      year: "2000",
      title: "دکترای پزشکی",
      description:
        "دانشگاه علوم پزشکی تهران"
    },

    {
      year: "2011",
      title: "بورد تخصصی بیماری‌های داخلی",
      description:
        "دانشگاه علوم پزشکی جندی‌شاپور اهواز"
    },

    {
      year: "2016",
      title: "بورد فوق تخصص خون و سرطان (هماتولوژی و آنکولوژی)",
      description:
        "دانشگاه علوم پزشکی تهران"
    },

    {
      year: "2016–2021",
      title: "پزشک معالج و عضو هیئت علمی",
      description:
        "بیمارستان رسول اکرم، دانشگاه علوم پزشکی ایران"
    },

    {
      year: "2018–2021",
      title: "رئیس بخش شیمی‌درمانی",
      description:
        "بیمارستان رسول اکرم"
    },

    {
      year: "2019–2021",
      title: "مدیر برنامه دستیاری داخلی",
      description:
        "بیمارستان رسول اکرم"
    },

    {
      year: "2022–2024",
      title: "فوق تخصص خون و سرطان و رئیس بخش شیمی‌درمانی",
      description:
        "بیمارستان صارم"
    }

  ],

  nafiseh: [

    {
      year: "2005",
      title: "دکترای پزشکی",
      description:
        "دانشگاه علوم پزشکی تهران"
    },

    {
      year: "2010",
      title: "بورد تخصصی بیماری‌های داخلی",
      description:
        "دانشگاه علوم پزشکی تهران"
    },

    {
      year: "2014",
      title: "بورد فوق تخصص خون و سرطان (هماتولوژی و آنکولوژی)",
      description:
        "دانشگاه علوم پزشکی تهران"
    },

    {
      year: "2015–2022",
      title: "رئیس هموویژیلانس",
      description:
        "بیمارستان رسول اکرم"
    },

    {
      year: "2015–2022",
      title: "رئیس کمیته انتقال خون",
      description:
        "بیمارستان رسول اکرم"
    },

    {
      year: "2015–2022",
      title: "مسئول هسته پژوهشی فارماکوژنتیک سرطان",
      description:
        "دانشگاه علوم پزشکی ایران"
    },

    {
      year: "2022–2024",
      title: "فوق تخصص خون و سرطان",
      description:
        "بیمارستان صارم"
    }

  ]

};