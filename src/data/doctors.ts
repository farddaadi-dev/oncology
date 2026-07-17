import FarshidImage from "@/assets/images/doctors/farshid.jpg";
import NafisehImage from "@/assets/images/doctors/nafiseh.png";

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

export interface Doctor {
  id: DoctorId;

  name: string;

  specialty: string;

  image: string;

  bio: string;

  profileUrl: string;

  consultationUrl: string;

  locations: Location[];
}

export const doctors: Doctor[] = [

  {
    id: "nafiseh",

    name: "دکتر نفیسه انصاری‌نژاد",

    specialty: "فوق تخصص خون و آنکولوژی",

    image: NafisehImage,

    bio:
      "ارائه خدمات تخصصی درمان سرطان و بیماری‌های خون با رویکردی مبتنی بر جدیدترین شواهد علمی و توجه ویژه به کیفیت زندگی بیماران.",

    profileUrl: "/about",

    consultationUrl: "https://axon.me/hcps/104083-nafiseh-ansari-nejad/?utm_medium=App&utm_campaign=PHRConversion&utm_source=PHRApp", // TODO: Replace with Axon consultation link

    locations: [

      {
        name: "مطب",

        phone: "021-23456789",

        sessions: [

          {
            day: "شنبه",
            hours: "10:00 - 14:00",
          },

          {
            day: "سه‌شنبه",
            hours: "12:00 - 16:00",
          },

        ],

      },

      {
        name: "کلینیک بیمارستان",

        phone: "021-98765432",

        sessions: [

          {
            day: "یکشنبه",
            hours: "09:00 - 13:00",
          },

          {
            day: "چهارشنبه",
            hours: "14:00 - 18:00",
          },

        ],

      },

    ],

  },

  {
    id: "farshid",

    name: "دکتر فرشید فرداد",

    specialty: "فوق تخصص خون و آنکولوژی",

    image: FarshidImage,

    bio:
      "بیش از دو دهه تجربه در تشخیص و درمان بیماری‌های خون و سرطان با تمرکز بر ارائه مراقبت علمی، فردمحور و مبتنی بر شواهد.",

    profileUrl: "/about",

    consultationUrl: "https://axon.me/hcps/84371-farshid-fardad/?utm_medium=App&utm_campaign=PHRConversion&utm_source=PHRApp", // TODO: Replace with Axon consultation link

    locations: [

      {
        name: "مطب",

        phone: "021-12345678",

        sessions: [

          {
            day: "شنبه",
            hours: "16:00 - 20:00",
          },

          {
            day: "دوشنبه",
            hours: "14:00 - 16:00",
          },

          {
            day: "چهارشنبه",
            hours: "13:00 - 15:00",
          },

        ],

      },

      {
        name: "کلینیک بیمارستان",

        phone: "021-87654321",

        sessions: [

          {
            day: "یکشنبه",
            hours: "09:00 - 13:00",
          },

          {
            day: "سه‌شنبه",
            hours: "08:30 - 11:30",
          },

        ],

      },

    ],

  },

];