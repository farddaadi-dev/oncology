export interface BlogCategory {
    slug: string;
    label: string;
    description: string;
}

export const categories: BlogCategory[] = [
    {
        slug: "patient-education",
        label: "آموزش بیماران",
        description: "مقالات آموزشی برای بیماران و خانواده‌ها"
    },
    {
        slug: "treatment-updates",
        label: "تازه‌های درمان",
        description: "آخرین روش‌ها و پیشرفت‌های درمان سرطان"
    },
    {
        slug: "cancers",
        label: "سرطان‌ها",
        description: "معرفی انواع سرطان و روش‌های درمان"
    },
    {
        slug: "hematology",
        label: "بیماری‌های خون",
        description: "بیماری‌های خوش‌خیم و بدخیم خون"
    },
    {
        slug: "medications",
        label: "داروها",
        description: "اطلاعات داروهای شیمی‌درمانی، هدفمند و ایمونوتراپی"
    }
];