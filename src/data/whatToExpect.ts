import type { IconName } from "@/data/icons";

export const expectations: {
  number: number;
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    number: 1,
    icon: "ear",
    title: "شنیدن دقیق شرایط شما",
    description:
      "در نخستین ویزیت، زمان کافی برای آشنایی با سوابق پزشکی، علائم، نگرانی‌ها و اهداف درمانی شما اختصاص داده می‌شود."
  },

  {
    number: 2,
    icon: "fileSearch",
    title: "بررسی کامل مدارک پزشکی",
    description:
      "آزمایش‌ها، تصاویر پزشکی، گزارش‌های پاتولوژی و سوابق درمانی با دقت بررسی می‌شوند تا تصویر دقیقی از وضعیت بیماری به دست آید."
  },

  {
    number: 3,
    icon: "clipboardList",
    title: "طراحی برنامه درمان",
    description:
      "گزینه‌های درمانی بر پایه آخرین شواهد علمی و متناسب با شرایط اختصاصی هر بیمار بررسی و درباره آن‌ها به صورت شفاف گفتگو می‌شود."
  },

  {
    number: 4,
    icon: "heartHandshake",
    title: "همراهی در تمام مسیر درمان",
    description:
      "در طول درمان و پیگیری‌های بعدی، روند بیماری، پاسخ به درمان و پرسش‌های شما به طور مستمر مورد توجه قرار خواهد گرفت."
  }
];