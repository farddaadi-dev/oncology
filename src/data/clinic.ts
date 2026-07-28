export interface Clinic {
    name: string;
    description: string;
    telephone: string;
    address: Address;
    openingHours: OpeningHours;
  }
  
  export interface Address {
    streetAddress: string;
    addressLocality: string;
    addressCountry: string;
  }
  
  export interface OpeningHours {
    days: string[];
    opens: string;
    closes: string;
  }
  
  export const clinic: Clinic = {
    name: "کلینیک فوق تخصصی هماتولوژی و آنکولوژی",
  
    description:
      "مرکز تخصصی هماتولوژی و آنکولوژی با ارائه خدمات تشخیص و درمان سرطان، بیماری‌های خون، شیمی‌درمانی و درمان‌های نوین سرطان.",
  
    telephone: "+98 21 4612 9143",
  
    address: {
      streetAddress:
        "صادقیه، خیابان ستارخان، بلوار شهدای صادقیه، خیابان پرویز، پلاک ۱۵، طبقه ششم",
      addressLocality: "تهران",
      addressCountry: "IR",
    },
  
    openingHours: {
      days: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  };