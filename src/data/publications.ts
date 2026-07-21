import type { DoctorId } from "./doctors";


export interface Publication {

  doctorId: DoctorId;

  title: string;

  journal: string;

  year: string;

  featured?: boolean;

}


export const publications: Publication[] = [

  {
    doctorId: "farshid",

    title:
      "Relationship between weight gain and survival rate in patients with metastatic lung cancer",

    journal:
      "Medical Journal of the Islamic Republic of Iran",

    year:
      "2021",

    featured: true
  },

  {
    doctorId: "farshid",

    title:  "A comparative study to assess the effectiveness of curcumin, mucosamin, and chlorhexidine in chemotherapy-induced oral mucositis",

    journal: "Explore",

    year: "2023",

    featured: true
  },

  {
    doctorId: "farshid",

    title: "SLC19A1 and thymidylate synthase polymorphisms do not predict survival outcome in non-small-cell lung cancer treated with pemetrexed-cisplatin chemotherapy regimen",

    journal: "Middle East Journal of Cancer",

    year: "2023",

    featured: true
  },


  {
    doctorId: "nafiseh",

    title:
    "A randomized, double-blind, phase III clinical trial comparing the efficacy and safety of TA4415V and Herceptin in HER2-positive early-stage breast cancer patients",

    journal:
    "BMC Pharmacology & Toxicology",

    year:
      "2022",

    featured: true
  },

  {
    doctorId: "nafiseh",

    title: "Personalized medicine in colorectal cancer",

    journal: "Gastroenterology and Hepatology From Bed to Bench",

    year: "2020",

    featured: true


  },

  {
    doctorId: "nafiseh",

    title: "The Role of Dihydropyrimidine Dehydrogenase and Thymidylate Synthase Polymorphisms in Fluoropyrimidine-Based Cancer Chemotherapy",

    journal: "Avicenna Journal of Medical Biotechnology",

    year: "2020",

    featured: true
  }

];