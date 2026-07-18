import type { IconName } from "@/data/icons";

interface Benefit {

    title: string;

    icon: IconName;

    description: string;

}

export const benefits: Benefit[] = [

    {
        title: "درمان مبتنی بر شواهد",
        icon: "bookOpenCheck",
        description:
            "تصمیم‌های درمانی بر اساس آخرین شواهد علمی و راهنماهای معتبر پزشکی اتخاذ می‌شوند."
    },

    {
        title: "مراقبت بیمار محور",
        icon: "heartHandshake",
        description:
            "شرایط، نیازها و اولویت‌های هر بیمار در طراحی مسیر درمان مورد توجه قرار می‌گیرد."
    },

    {
        title: "تخصص و تجربه بالینی",
        icon: "stethoscope",
        description:
            "ارائه خدمات تخصصی در زمینه هماتولوژی و انکولوژی با تکیه بر دانش و تجربه بالینی."
    },

    {
        title: "ارتباط شفاف",
        icon: "messageCircle",
        description:
            "توضیح روشن مراحل تشخیص و درمان و پاسخ به پرسش‌های بیماران و خانواده‌ها."
    },

    {
        title: "همراهی در مسیر درمان",
        icon: "heartPulse",
        description:
            "از تشخیص تا پیگیری درمان، در کنار بیماران و خانواده‌های آنان هستیم."
    },

    {
        title: "توجه به کیفیت زندگی",
        icon: "smile",
        description:
            "در کنار درمان بیماری، به کنترل علائم و حفظ کیفیت زندگی بیماران توجه می‌کنیم."
    }

];