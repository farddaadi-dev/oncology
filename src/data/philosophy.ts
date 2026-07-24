import type { IconName } from "@/data/icons";

interface PhilosophyItem {
  title: string;
  icon: IconName;
  description: string;
}

export const treatmentPhilosophy: PhilosophyItem[] = [

  {
    title: "درمان مبتنی بر شواهد",
    icon: "bookOpenCheck",
    description:
      "انتخاب روش‌های درمانی بر اساس جدیدترین شواهد علمی، راهنماهای معتبر پزشکی و شرایط اختصاصی هر بیمار انجام می‌شود."
  },

  {
    title: "تصمیم‌گیری بیمار محور",
    icon: "userCheck",
    description:
      "هر بیمار مسیر متفاوتی دارد و تصمیم‌های درمانی با توجه به شرایط پزشکی، اهداف و ترجیحات او اتخاذ می‌شوند."
  },

  {
    title: "ارتباط شفاف و همراهی",
    icon: "messageCircle",
    description:
      "توضیح روشن گزینه‌های درمانی و پاسخ به پرسش‌های بیمار و خانواده، بخش مهمی از مسیر درمان است."
  },

  {
    title: "توجه به کیفیت زندگی",
    icon: "heartPulse",
    description:
      "در کنار کنترل بیماری، حفظ توانایی، آرامش و کیفیت زندگی بیمار همواره مورد توجه قرار دارد."
  }

];