export interface BaseSchema {
    title: string;
    description: string;
    url: string;
  }
  
  export interface ArticleSchema extends BaseSchema {
    image?: string;
    author: string;
    datePublished: Date;
    dateModified?: Date;
  }
  
  const siteName = "کلینیک دکتر فرشید فرداد";
  
  const organization = {
    "@type": "MedicalOrganization",
    name: siteName,
  };
  
  export function medicalWebPageSchema(
    data: BaseSchema
  ) {
    return {
      "@context": "https://schema.org",
  
      "@type": "MedicalWebPage",
  
      name: data.title,
  
      description: data.description,
  
      url: data.url,
  
      inLanguage: "fa-IR",
  
      isPartOf: {
        "@type": "WebSite",
        name: siteName,
      },
    };
  }
  
  export function articleSchema(
    data: ArticleSchema
  ) {
    return {
      "@context": "https://schema.org",
  
      "@type": "Article",
  
      headline: data.title,
  
      description: data.description,
  
      image: data.image,
  
      author: {
        "@type": "Person",
        name: data.author,
      },
  
      publisher: organization,
  
      datePublished: data.datePublished.toISOString(),
  
      dateModified: (
        data.dateModified ?? data.datePublished
      ).toISOString(),
  
      mainEntityOfPage: data.url,
  
      inLanguage: "fa-IR",
    };
  }
  
  export function physicianSchema() {
    return {
      "@context": "https://schema.org",
  
      "@type": "Physician",
  
      name: "دکتر فرشید فرداد",
  
      medicalSpecialty: [
        "Medical Oncology",
        "Hematology",
      ],
  
      inLanguage: "fa-IR",
    };
  }
  
  export function medicalBusinessSchema() {
    return {
      "@context": "https://schema.org",
  
      "@type": "MedicalClinic",
  
      name: siteName,
  
      inLanguage: "fa-IR",
    };
  }