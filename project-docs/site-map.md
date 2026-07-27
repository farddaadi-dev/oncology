# Oncology Website Architecture

Generated: 7/27/2026, 7:20:16 AM

---

# Pages

## src/pages/about/[doctor]/publications.astro

### Dependencies

- doctors.ts
- getPublications.ts
- BaseLayout.astro
- PublicationCard.astro
- Section.astro
- SectionHeading.astro

### Used by

- None

---

## src/pages/about/farshid-fardad.astro

### Dependencies

- BaseLayout.astro
- DoctorProfileHero.astro
- ProfessionalJourney.astro
- DoctorBiography.astro
- MembershipsCertifications.astro
- DoctorCTA.astro
- DoctorTreatmentApproach.astro
- ResearchHighlights.astro
- doctors.ts
- Publications.astro

### Used by

- None

---

## src/pages/about/index.astro

### Dependencies

- BaseLayout.astro
- AboutHero.astro
- WhyChooseUs.astro
- TreatmentPhilosophy.astro
- AboutStory.astro
- WhatToExpect.astro
- MeetTheDoctors.astro
- Cta.astro
- ButtonLink.astro

### Used by

- None

---

## src/pages/about/nafiseh-ansarinejad.astro

### Dependencies

- BaseLayout.astro
- DoctorProfileHero.astro
- ProfessionalJourney.astro
- DoctorBiography.astro
- MembershipsCertifications.astro
- DoctorCTA.astro
- DoctorTreatmentApproach.astro
- ResearchHighlights.astro
- doctors.ts
- Publications.astro

### Used by

- None

---

## src/pages/articles/[...slug].astro

### Dependencies

- BaseLayout.astro
- BlogLayout.astro

### Used by

- None

---

## src/pages/articles/category/[category].astro

### Dependencies

- BaseLayout.astro
- BlogGrid.astro
- Section.astro
- categories.ts

### Used by

- None

---

## src/pages/articles/index.astro

### Dependencies

- BaseLayout.astro
- SectionHeading.astro
- Hero.astro
- Section.astro
- BlogSearch.astro
- CategoryChips.astro
- FeaturedArticle.astro
- ButtonLink.astro
- BlogGrid.astro
- Cta.astro

### Used by

- None

---

## src/pages/articles/search.astro

### Dependencies

- BaseLayout.astro
- Hero.astro
- Section.astro
- BlogSearch.astro
- BlogGrid.astro

### Used by

- None

---

## src/pages/consultation.astro

### Dependencies

- BaseLayout.astro
- Hero.astro
- consultation-hero.webp
- ConsultationEligibility.astro
- HowItWorks.astro
- ConsultationPreparation.astro
- ConsultationLimitation.astro
- ConsultationDoctors.astro
- PrivacySecurity.astro
- ConsultationFAQ.astro
- consultationCTA.astro

### Used by

- None

---

## src/pages/contact.astro

### Dependencies

- BaseLayout.astro
- Hero.astro
- contactHero.png
- Section.astro
- ContactGrid.astro
- ContactCard.astro
- SectionHeading.astro
- MapViewer.astro
- maps.ts
- Faq.astro
- Cta.astro
- contactFAQ.ts
- ButtonLink.astro
- ClinicHours.astro

### Used by

- None

---

## src/pages/index.astro

### Dependencies

- BaseLayout.astro
- Hero.astro
- hero.webp
- HomeIntroduction.astro
- HomeServices.astro
- HomeWhyChoose.astro
- MeetTheDoctors.astro
- HomeTreatmentJourney.astro
- HomeArticles.astro
- PatientCenteredCare.astro
- Cta.astro
- ButtonLink.astro

### Used by

- None

---

## src/pages/services/ambulatory.astro

### Dependencies

- ServiceDetailLayout.astro
- Section.astro
- SectionHeading.astro
- FeatureGrid.astro
- FeatureCard.astro
- getService.ts
- Faq.astro
- ambulatoryFAQ.ts

### Used by

- None

---

## src/pages/services/consult.astro

### Dependencies

- ServiceDetailLayout.astro
- Section.astro
- SectionHeading.astro
- FeatureGrid.astro
- FeatureCard.astro
- getService.ts
- ProcessGrid.astro
- ProcessStep.astro
- Faq.astro
- consultFAQ.ts

### Used by

- None

---

## src/pages/services/hematology.astro

### Dependencies

- ServiceDetailLayout.astro
- Section.astro
- SectionHeading.astro
- FeatureGrid.astro
- FeatureCard.astro
- Faq.astro
- getService.ts
- hematologyFAQ.ts

### Used by

- None

---

## src/pages/services/home-nursing.astro

### Dependencies

- ServiceDetailLayout.astro
- Section.astro
- SectionHeading.astro
- FeatureGrid.astro
- FeatureCard.astro
- Faq.astro
- getService.ts
- homeNursingFAQ.ts

### Used by

- None

---

## src/pages/services/home-visit.astro

### Dependencies

- ServiceDetailLayout.astro
- Section.astro
- SectionHeading.astro
- FeatureGrid.astro
- FeatureCard.astro
- ProcessGrid.astro
- ProcessStep.astro
- Faq.astro
- getService.ts
- homeVisitFAQ.ts

### Used by

- None

---

## src/pages/services/index.astro

### Dependencies

- services.ts
- BaseLayout.astro
- Hero.astro
- Section.astro
- SectionHeading.astro
- ServiceGrid.astro
- ServiceCard.astro
- Services.png
- FeatureGrid.astro
- FeatureCard.astro
- ProcessGrid.astro
- ProcessStep.astro
- Faq.astro
- Cta.astro
- servicesFAQ.ts
- ButtonLink.astro
- CareServiceGrid.astro

### Used by

- None

---

## src/pages/services/international-consultation.astro

### Dependencies

- BaseLayout.astro
- Hero.astro
- Section.astro
- SectionHeading.astro
- InternationalDoctorCard.astro
- DoctorConsultationGrid.astro
- doctors.ts
- InfoCard.astro
- ProcessStep.astro
- GridFour.astro
- NoticeBanner.astro
- Faq.astro
- internationalConsultationFAQ.ts
- Cta.astro
- ButtonLink.astro
- consultation-hero.webp

### Used by

- None

---

## src/pages/services/medical-oncology.astro

### Dependencies

- ServiceDetailLayout.astro
- Section.astro
- SectionHeading.astro
- getService.ts
- FeatureGrid.astro
- FeatureCard.astro
- Faq.astro
- medicalOncologyFAQ.ts

### Used by

- None

---

## src/pages/services/procedures.astro

### Dependencies

- ServiceDetailLayout.astro
- Section.astro
- SectionHeading.astro
- FeatureGrid.astro
- FeatureCard.astro
- getService.ts
- Faq.astro
- proceduresFAQ.ts

### Used by

- None

---

## src/pages/services/supportive.astro

### Dependencies

- ServiceDetailLayout.astro
- Section.astro
- SectionHeading.astro
- FeatureGrid.astro
- FeatureCard.astro
- getService.ts
- Faq.astro
- supportiveFAQ.ts

### Used by

- None

---

## src/pages/visit.astro

### Dependencies

- BaseLayout.astro
- Hero.astro
- visit.webp
- Section.astro
- NoticeBanner.astro
- doctors.ts
- DoctorScheduleCard.astro
- SectionHeading.astro
- ContactGrid.astro
- ReservationCard.astro
- Faq.astro
- Cta.astro
- visitFAQ.ts
- ButtonLink.astro

### Used by

- None

---

# Components

## AboutStory.astro

File:
`src/components/AboutStory.astro`

Children:
- Section.astro
- SectionHeading.astro
- ButtonLink.astro
- about-story.webp

Used by:
- src/pages/about/index.astro

---

## BaseHead.astro

File:
`src/components/BaseHead.astro`

Children:
- None

Used by:
- src/layouts/BaseLayout.astro

---

## Breadcrumb.astro

File:
`src/components/Breadcrumb.astro`

Children:
- icons.ts

Used by:
- src/layouts/ServiceDetailLayout.astro

---

## ButtonLink.astro

File:
`src/components/ButtonLink.astro`

Children:
- None

Used by:
- src/pages/about/index.astro
- src/pages/articles/index.astro
- src/pages/contact.astro
- src/pages/index.astro
- src/pages/services/index.astro
- src/pages/services/international-consultation.astro
- src/pages/visit.astro
- src/components/AboutStory.astro
- src/components/DoctorCard.astro
- src/components/Hero.astro
- src/components/HomeArticles.astro
- src/components/HomeIntroduction.astro
- src/components/HomeServices.astro
- src/components/ReservationCard.astro
- src/components/ServiceCard.astro
- src/components/consultationCTA.astro
- src/components/doctors/DoctorCTA.astro
- src/components/doctors/DoctorIntroduction.astro
- src/components/doctors/DoctorProfileHero.astro
- src/components/doctors/Publications.astro
- src/components/doctors/ResearchHighlights.astro
- src/layouts/ServiceDetailLayout.astro

---

## CareServiceGrid.astro

File:
`src/components/CareServiceGrid.astro`

Children:
- None

Used by:
- src/pages/services/index.astro

---

## ClinicHours.astro

File:
`src/components/ClinicHours.astro`

Children:
- clinicHours.ts
- icons.ts

Used by:
- src/pages/contact.astro

---

## ConsultationDoctors.astro

File:
`src/components/ConsultationDoctors.astro`

Children:
- Section.astro
- SectionHeading.astro
- DoctorCard.astro
- doctors.ts

Used by:
- src/pages/consultation.astro

---

## ConsultationEligibility.astro

File:
`src/components/ConsultationEligibility.astro`

Children:
- Section.astro
- SectionHeading.astro
- InfoCard.astro
- IconList.astro
- NoticeBox.astro
- onlineConsultation.ts

Used by:
- src/pages/consultation.astro

---

## ConsultationFAQ.astro

File:
`src/components/ConsultationFAQ.astro`

Children:
- Section.astro
- SectionHeading.astro
- Faq.astro
- consultationFAQ.ts

Used by:
- src/pages/consultation.astro

---

## ConsultationLimitation.astro

File:
`src/components/ConsultationLimitation.astro`

Children:
- Section.astro
- SectionHeading.astro
- InfoCard.astro
- onlineConsultation.ts

Used by:
- src/pages/consultation.astro

---

## ConsultationPreparation.astro

File:
`src/components/ConsultationPreparation.astro`

Children:
- Section.astro
- SectionHeading.astro
- InfoCard.astro
- onlineConsultation.ts
- IconList.astro
- NoticeBox.astro

Used by:
- src/pages/consultation.astro

---

## ContactCard.astro

File:
`src/components/ContactCard.astro`

Children:
- None

Used by:
- src/pages/contact.astro

---

## ContactGrid.astro

File:
`src/components/ContactGrid.astro`

Children:
- None

Used by:
- src/pages/contact.astro
- src/pages/visit.astro

---

## Cta.astro

File:
`src/components/Cta.astro`

Children:
- Section.astro

Used by:
- src/pages/about/index.astro
- src/pages/articles/index.astro
- src/pages/contact.astro
- src/pages/index.astro
- src/pages/services/index.astro
- src/pages/services/international-consultation.astro
- src/pages/visit.astro
- src/components/consultationCTA.astro
- src/components/doctors/DoctorCTA.astro
- src/layouts/ServiceDetailLayout.astro

---

## DoctorCard.astro

File:
`src/components/DoctorCard.astro`

Children:
- ButtonLink.astro
- IconList.astro
- doctors.ts

Used by:
- src/components/ConsultationDoctors.astro
- src/components/about/MeetTheDoctors.astro

---

## DoctorConsultationGrid.astro

File:
`src/components/DoctorConsultationGrid.astro`

Children:
- None

Used by:
- src/pages/services/international-consultation.astro

---

## DoctorScheduleCard.astro

File:
`src/components/DoctorScheduleCard.astro`

Children:
- ScheduleRow.astro
- doctors.ts

Used by:
- src/pages/visit.astro

---

## Faq.astro

File:
`src/components/Faq.astro`

Children:
- None

Used by:
- src/pages/contact.astro
- src/pages/services/ambulatory.astro
- src/pages/services/consult.astro
- src/pages/services/hematology.astro
- src/pages/services/home-nursing.astro
- src/pages/services/home-visit.astro
- src/pages/services/index.astro
- src/pages/services/international-consultation.astro
- src/pages/services/medical-oncology.astro
- src/pages/services/procedures.astro
- src/pages/services/supportive.astro
- src/pages/visit.astro
- src/components/ConsultationFAQ.astro

---

## FeatureCard.astro

File:
`src/components/FeatureCard.astro`

Children:
- icons.ts

Used by:
- src/pages/services/ambulatory.astro
- src/pages/services/consult.astro
- src/pages/services/hematology.astro
- src/pages/services/home-nursing.astro
- src/pages/services/home-visit.astro
- src/pages/services/index.astro
- src/pages/services/medical-oncology.astro
- src/pages/services/procedures.astro
- src/pages/services/supportive.astro
- src/components/HomeWhyChoose.astro
- src/components/PatientCenteredCare.astro

---

## FeatureGrid.astro

File:
`src/components/FeatureGrid.astro`

Children:
- None

Used by:
- src/pages/services/ambulatory.astro
- src/pages/services/consult.astro
- src/pages/services/hematology.astro
- src/pages/services/home-nursing.astro
- src/pages/services/home-visit.astro
- src/pages/services/index.astro
- src/pages/services/medical-oncology.astro
- src/pages/services/procedures.astro
- src/pages/services/supportive.astro
- src/components/HomeWhyChoose.astro
- src/components/PatientCenteredCare.astro

---

## Footer.astro

File:
`src/components/Footer.astro`

Children:
- None

Used by:
- src/layouts/BaseLayout.astro

---

## GridFive.astro

File:
`src/components/GridFive.astro`

Children:
- None

Used by:
- None

---

## GridFour.astro

File:
`src/components/GridFour.astro`

Children:
- None

Used by:
- src/pages/services/international-consultation.astro

---

## GridThree.astro

File:
`src/components/GridThree.astro`

Children:
- None

Used by:
- None

---

## Header.astro

File:
`src/components/Header.astro`

Children:
- None

Used by:
- src/layouts/BaseLayout.astro

---

## Hero.astro

File:
`src/components/Hero.astro`

Children:
- ButtonLink.astro

Used by:
- src/pages/articles/index.astro
- src/pages/articles/search.astro
- src/pages/consultation.astro
- src/pages/contact.astro
- src/pages/index.astro
- src/pages/services/index.astro
- src/pages/services/international-consultation.astro
- src/pages/visit.astro
- src/components/about/AboutHero.astro
- src/layouts/ServiceDetailLayout.astro

---

## HomeArticles.astro

File:
`src/components/HomeArticles.astro`

Children:
- Section.astro
- SectionHeading.astro
- BlogGrid.astro
- ButtonLink.astro

Used by:
- src/pages/index.astro

---

## HomeIntroduction.astro

File:
`src/components/HomeIntroduction.astro`

Children:
- ButtonLink.astro
- Section.astro
- SectionHeading.astro

Used by:
- src/pages/index.astro

---

## HomeServices.astro

File:
`src/components/HomeServices.astro`

Children:
- Section.astro
- SectionHeading.astro
- ServiceGrid.astro
- ServiceCard.astro
- ButtonLink.astro
- services.ts

Used by:
- src/pages/index.astro

---

## HomeTreatmentJourney.astro

File:
`src/components/HomeTreatmentJourney.astro`

Children:
- Section.astro
- SectionHeading.astro
- ProcessGrid.astro
- ProcessStep.astro

Used by:
- src/pages/index.astro

---

## HomeWhyChoose.astro

File:
`src/components/HomeWhyChoose.astro`

Children:
- Section.astro
- SectionHeading.astro
- FeatureGrid.astro
- FeatureCard.astro

Used by:
- src/pages/index.astro

---

## HowItWorks.astro

File:
`src/components/HowItWorks.astro`

Children:
- Section.astro
- SectionHeading.astro
- ProcessStep.astro

Used by:
- src/pages/consultation.astro

---

## IconList.astro

File:
`src/components/IconList.astro`

Children:
- icons.ts

Used by:
- src/components/ConsultationEligibility.astro
- src/components/ConsultationPreparation.astro
- src/components/DoctorCard.astro
- src/components/doctors/DoctorIntroduction.astro
- src/components/doctors/MembershipsCertifications.astro

---

## InfoCard.astro

File:
`src/components/InfoCard.astro`

Children:
- icons.ts

Used by:
- src/pages/services/international-consultation.astro
- src/components/ConsultationEligibility.astro
- src/components/ConsultationLimitation.astro
- src/components/ConsultationPreparation.astro
- src/components/PrivacySecurity.astro
- src/components/about/TreatmentPhilosophy.astro
- src/components/about/WhyChooseUs.astro

---

## MapViewer.astro

File:
`src/components/MapViewer.astro`

Children:
- None

Used by:
- src/pages/contact.astro

---

## NoticeBanner.astro

File:
`src/components/NoticeBanner.astro`

Children:
- None

Used by:
- src/pages/services/international-consultation.astro
- src/pages/visit.astro

---

## NoticeBox.astro

File:
`src/components/NoticeBox.astro`

Children:
- icons.ts

Used by:
- src/components/ConsultationEligibility.astro
- src/components/ConsultationPreparation.astro

---

## PatientCenteredCare.astro

File:
`src/components/PatientCenteredCare.astro`

Children:
- Section.astro
- SectionHeading.astro
- FeatureGrid.astro
- FeatureCard.astro

Used by:
- src/pages/index.astro

---

## PrivacySecurity.astro

File:
`src/components/PrivacySecurity.astro`

Children:
- Section.astro
- SectionHeading.astro
- InfoCard.astro
- icons.ts

Used by:
- src/pages/consultation.astro

---

## ProcessGrid.astro

File:
`src/components/ProcessGrid.astro`

Children:
- None

Used by:
- src/pages/services/consult.astro
- src/pages/services/home-visit.astro
- src/pages/services/index.astro
- src/components/HomeTreatmentJourney.astro

---

## ProcessStep.astro

File:
`src/components/ProcessStep.astro`

Children:
- icons.ts

Used by:
- src/pages/services/consult.astro
- src/pages/services/home-visit.astro
- src/pages/services/index.astro
- src/pages/services/international-consultation.astro
- src/components/HomeTreatmentJourney.astro
- src/components/HowItWorks.astro
- src/components/about/WhatToExpect.astro

---

## ReservationCard.astro

File:
`src/components/ReservationCard.astro`

Children:
- ButtonLink.astro

Used by:
- src/pages/visit.astro

---

## ScheduleRow.astro

File:
`src/components/ScheduleRow.astro`

Children:
- None

Used by:
- src/components/DoctorScheduleCard.astro

---

## Section.astro

File:
`src/components/Section.astro`

Children:
- None

Used by:
- src/pages/about/[doctor]/publications.astro
- src/pages/articles/category/[category].astro
- src/pages/articles/index.astro
- src/pages/articles/search.astro
- src/pages/contact.astro
- src/pages/services/ambulatory.astro
- src/pages/services/consult.astro
- src/pages/services/hematology.astro
- src/pages/services/home-nursing.astro
- src/pages/services/home-visit.astro
- src/pages/services/index.astro
- src/pages/services/international-consultation.astro
- src/pages/services/medical-oncology.astro
- src/pages/services/procedures.astro
- src/pages/services/supportive.astro
- src/pages/visit.astro
- src/components/AboutStory.astro
- src/components/ConsultationDoctors.astro
- src/components/ConsultationEligibility.astro
- src/components/ConsultationFAQ.astro
- src/components/ConsultationLimitation.astro
- src/components/ConsultationPreparation.astro
- src/components/Cta.astro
- src/components/HomeArticles.astro
- src/components/HomeIntroduction.astro
- src/components/HomeServices.astro
- src/components/HomeTreatmentJourney.astro
- src/components/HomeWhyChoose.astro
- src/components/HowItWorks.astro
- src/components/PatientCenteredCare.astro
- src/components/PrivacySecurity.astro
- src/components/about/MeetTheDoctors.astro
- src/components/about/TreatmentPhilosophy.astro
- src/components/about/WhatToExpect.astro
- src/components/about/WhyChooseUs.astro
- src/components/consultationCTA.astro
- src/components/doctors/DoctorBiography.astro
- src/components/doctors/DoctorIntroduction.astro
- src/components/doctors/DoctorProfileHero.astro
- src/components/doctors/ProfessionalJourney.astro
- src/components/doctors/ResearchHighlights.astro

---

## SectionHeading.astro

File:
`src/components/SectionHeading.astro`

Children:
- None

Used by:
- src/pages/about/[doctor]/publications.astro
- src/pages/articles/index.astro
- src/pages/contact.astro
- src/pages/services/ambulatory.astro
- src/pages/services/consult.astro
- src/pages/services/hematology.astro
- src/pages/services/home-nursing.astro
- src/pages/services/home-visit.astro
- src/pages/services/index.astro
- src/pages/services/international-consultation.astro
- src/pages/services/medical-oncology.astro
- src/pages/services/procedures.astro
- src/pages/services/supportive.astro
- src/pages/visit.astro
- src/components/AboutStory.astro
- src/components/ConsultationDoctors.astro
- src/components/ConsultationEligibility.astro
- src/components/ConsultationFAQ.astro
- src/components/ConsultationLimitation.astro
- src/components/ConsultationPreparation.astro
- src/components/HomeArticles.astro
- src/components/HomeIntroduction.astro
- src/components/HomeServices.astro
- src/components/HomeTreatmentJourney.astro
- src/components/HomeWhyChoose.astro
- src/components/HowItWorks.astro
- src/components/PatientCenteredCare.astro
- src/components/PrivacySecurity.astro
- src/components/about/MeetTheDoctors.astro
- src/components/about/TreatmentPhilosophy.astro
- src/components/about/WhatToExpect.astro
- src/components/about/WhyChooseUs.astro
- src/components/doctors/DoctorBiography.astro
- src/components/doctors/DoctorIntroduction.astro
- src/components/doctors/ProfessionalJourney.astro
- src/components/doctors/Publications.astro
- src/components/doctors/ResearchHighlights.astro

---

## ServiceCard.astro

File:
`src/components/ServiceCard.astro`

Children:
- ButtonLink.astro
- icons.ts

Used by:
- src/pages/services/index.astro
- src/components/HomeServices.astro

---

## ServiceGrid.astro

File:
`src/components/ServiceGrid.astro`

Children:
- None

Used by:
- src/pages/services/index.astro
- src/components/HomeServices.astro

---

## AboutHero.astro

File:
`src/components/about/AboutHero.astro`

Children:
- Hero.astro
- aboutHero.webp

Used by:
- src/pages/about/index.astro

---

## MeetTheDoctors.astro

File:
`src/components/about/MeetTheDoctors.astro`

Children:
- Section.astro
- SectionHeading.astro
- DoctorCard.astro
- doctors.ts

Used by:
- src/pages/about/index.astro
- src/pages/index.astro

---

## TreatmentPhilosophy.astro

File:
`src/components/about/TreatmentPhilosophy.astro`

Children:
- Section.astro
- SectionHeading.astro
- InfoCard.astro
- philosophy.ts

Used by:
- src/pages/about/index.astro

---

## WhatToExpect.astro

File:
`src/components/about/WhatToExpect.astro`

Children:
- Section.astro
- SectionHeading.astro
- ProcessStep.astro
- whatToExpect.ts

Used by:
- src/pages/about/index.astro

---

## WhyChooseUs.astro

File:
`src/components/about/WhyChooseUs.astro`

Children:
- Section.astro
- SectionHeading.astro
- InfoCard.astro
- benefits.ts

Used by:
- src/pages/about/index.astro

---

## ArticleDisclaimer.astro

File:
`src/components/blog/ArticleDisclaimer.astro`

Children:
- None

Used by:
- src/layouts/BlogLayout.astro

---

## ArticleHeader.astro

File:
`src/components/blog/ArticleHeader.astro`

Children:
- None

Used by:
- None

---

## ArticleHero.astro

File:
`src/components/blog/ArticleHero.astro`

Children:
- MetaItem.astro
- authors.ts
- categories.ts
- formatDate.ts
- getReadingTime.ts

Used by:
- src/layouts/BlogLayout.astro

---

## ArticleMeta.astro

File:
`src/components/blog/ArticleMeta.astro`

Children:
- formatDate.ts
- getReadingTime.ts

Used by:
- None

---

## ArticleTrustBox.astro

File:
`src/components/blog/ArticleTrustBox.astro`

Children:
- authors.ts
- formatDate.ts

Used by:
- src/layouts/BlogLayout.astro

---

## ArticlesExplorer.astro

File:
`src/components/blog/ArticlesExplorer.astro`

Children:
- BlogSearch.astro
- BlogGrid.astro

Used by:
- None

---

## AuthorCard.astro

File:
`src/components/blog/AuthorCard.astro`

Children:
- authors.ts

Used by:
- src/layouts/BlogLayout.astro

---

## BlogCard.astro

File:
`src/components/blog/BlogCard.astro`

Children:
- ReadArticleLink.astro
- formatDate.ts
- getReadingTime.ts
- categories.ts
- getPostUrl.ts

Used by:
- src/components/blog/BlogGrid.astro
- src/components/blog/RelatedArticles.astro

---

## BlogGrid.astro

File:
`src/components/blog/BlogGrid.astro`

Children:
- BlogCard.astro

Used by:
- src/pages/articles/category/[category].astro
- src/pages/articles/index.astro
- src/pages/articles/search.astro
- src/components/HomeArticles.astro
- src/components/blog/ArticlesExplorer.astro

---

## BlogSearch.astro

File:
`src/components/blog/BlogSearch.astro`

Children:
- None

Used by:
- src/pages/articles/index.astro
- src/pages/articles/search.astro
- src/components/blog/ArticlesExplorer.astro

---

## CalloutBox.astro

File:
`src/components/blog/CalloutBox.astro`

Children:
- None

Used by:
- None

---

## CategoryChips.astro

File:
`src/components/blog/CategoryChips.astro`

Children:
- categories.ts

Used by:
- src/pages/articles/index.astro

---

## FeaturedArticle.astro

File:
`src/components/blog/FeaturedArticle.astro`

Children:
- ReadArticleLink.astro
- formatDate.ts
- getReadingTime.ts
- categories.ts
- getPostUrl.ts

Used by:
- src/pages/articles/index.astro

---

## MetaItem.astro

File:
`src/components/blog/MetaItem.astro`

Children:
- None

Used by:
- src/components/blog/ArticleHero.astro

---

## ReadArticleLink.astro

File:
`src/components/blog/ReadArticleLink.astro`

Children:
- None

Used by:
- src/components/blog/BlogCard.astro
- src/components/blog/FeaturedArticle.astro

---

## ReadingProgress.astro

File:
`src/components/blog/ReadingProgress.astro`

Children:
- None

Used by:
- src/layouts/BlogLayout.astro

---

## RelatedArticles.astro

File:
`src/components/blog/RelatedArticles.astro`

Children:
- BlogCard.astro

Used by:
- src/layouts/BlogLayout.astro

---

## ShareButtons.astro

File:
`src/components/blog/ShareButtons.astro`

Children:
- None

Used by:
- src/layouts/BlogLayout.astro

---

## consultationCTA.astro

File:
`src/components/consultationCTA.astro`

Children:
- Section.astro
- Cta.astro
- ButtonLink.astro

Used by:
- src/pages/consultation.astro

---

## DoctorBiography.astro

File:
`src/components/doctors/DoctorBiography.astro`

Children:
- Section.astro
- SectionHeading.astro
- doctors.ts

Used by:
- src/pages/about/farshid-fardad.astro
- src/pages/about/nafiseh-ansarinejad.astro

---

## DoctorCTA.astro

File:
`src/components/doctors/DoctorCTA.astro`

Children:
- Cta.astro
- ButtonLink.astro
- doctors.ts

Used by:
- src/pages/about/farshid-fardad.astro
- src/pages/about/nafiseh-ansarinejad.astro

---

## DoctorEducation.astro

File:
`src/components/doctors/DoctorEducation.astro`

Children:
- None

Used by:
- None

---

## DoctorExperience.astro

File:
`src/components/doctors/DoctorExperience.astro`

Children:
- None

Used by:
- None

---

## DoctorIntroduction.astro

File:
`src/components/doctors/DoctorIntroduction.astro`

Children:
- Section.astro
- SectionHeading.astro
- ButtonLink.astro
- IconList.astro
- icons.ts
- doctors.ts

Used by:
- None

---

## DoctorProfileHero.astro

File:
`src/components/doctors/DoctorProfileHero.astro`

Children:
- Section.astro
- ButtonLink.astro
- doctors.ts

Used by:
- src/pages/about/farshid-fardad.astro
- src/pages/about/nafiseh-ansarinejad.astro

---

## DoctorResearch.astro

File:
`src/components/doctors/DoctorResearch.astro`

Children:
- None

Used by:
- None

---

## DoctorTreatmentApproach.astro

File:
`src/components/doctors/DoctorTreatmentApproach.astro`

Children:
- icons.ts
- doctors.ts

Used by:
- src/pages/about/farshid-fardad.astro
- src/pages/about/nafiseh-ansarinejad.astro

---

## InternationalDoctorCard.astro

File:
`src/components/doctors/InternationalDoctorCard.astro`

Children:
- doctors.ts

Used by:
- src/pages/services/international-consultation.astro

---

## MembershipsCertifications.astro

File:
`src/components/doctors/MembershipsCertifications.astro`

Children:
- doctors.ts
- IconList.astro

Used by:
- src/pages/about/farshid-fardad.astro
- src/pages/about/nafiseh-ansarinejad.astro

---

## ProfessionalJourney.astro

File:
`src/components/doctors/ProfessionalJourney.astro`

Children:
- Section.astro
- SectionHeading.astro
- doctors.ts
- professionalJourney.ts

Used by:
- src/pages/about/farshid-fardad.astro
- src/pages/about/nafiseh-ansarinejad.astro

---

## PublicationCard.astro

File:
`src/components/doctors/PublicationCard.astro`

Children:
- publications.ts

Used by:
- src/pages/about/[doctor]/publications.astro
- src/components/doctors/Publications.astro

---

## Publications.astro

File:
`src/components/doctors/Publications.astro`

Children:
- PublicationCard.astro
- ButtonLink.astro
- doctors.ts
- getPublications.ts
- SectionHeading.astro

Used by:
- src/pages/about/farshid-fardad.astro
- src/pages/about/nafiseh-ansarinejad.astro

---

## ResearchCard.astro

File:
`src/components/doctors/ResearchCard.astro`

Children:
- toPersianDigits.ts
- icons.ts

Used by:
- src/components/doctors/ResearchHighlights.astro

---

## ResearchHighlights.astro

File:
`src/components/doctors/ResearchHighlights.astro`

Children:
- Section.astro
- SectionHeading.astro
- ResearchCard.astro
- ButtonLink.astro
- doctors.ts

Used by:
- src/pages/about/farshid-fardad.astro
- src/pages/about/nafiseh-ansarinejad.astro

---

