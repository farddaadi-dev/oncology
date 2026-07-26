export interface ClinicHour {
  day: string;
  hours: string;
}


export const clinicHours: ClinicHour[] = [
  {
    day: "شنبه تا چهارشنبه",
    hours: "۹:۰۰ صبح تا ۱۷:۰۰"
  },
  {
    day: "پنجشنبه",
    hours: "۹:۰۰ صبح تا ۱۳:۰۰"
  },
  {
    day: "جمعه و تعطیلات رسمی",
    hours: "تعطیل"
  }
];