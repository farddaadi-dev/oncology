# Home Page Documentation

## Purpose

The home page is the main entry point of the oncology clinic website.
Its purpose is to introduce the medical team, communicate trust,
explain the clinic's approach, and guide visitors toward consultation
or appointment booking.

---

# Page Structure

## 1. Hero Section

### Component

- Hero.astro

### Purpose

The first visual impression of the website.
Introduces the clinic's specialty and provides the main call-to-action.

### Assets

- hero.webp

### Main Actions

- Online consultation
- Visit information

---

## 2. Introduction Section

### Component

- HomeIntroduction.astro

### Purpose

Introduces the clinic and physicians.
Builds patient confidence through a short professional overview.

### Shared Components

- Section.astro
- SectionHeading.astro
- ButtonLink.astro

---

## 3. Meet The Doctors Section

### Component

- MeetTheDoctors.astro

### Purpose

Introduces the medical team and provides links to physician profile pages.

### Child Components

- DoctorCard.astro

### Data Source

- doctors.ts

---

## 4. Services Overview

### Component

- HomeServices.astro

### Purpose

Presents the main oncology and hematology services offered.

### Data Source

- services.ts

### Child Components

- ServiceGrid.astro
- ServiceCard.astro

---

## 5. Why Choose Us

### Component

- HomeWhyChoose.astro

### Purpose

Explains the clinic's advantages and patient-centered approach.

### Child Components

- FeatureGrid.astro
- FeatureCard.astro



---

## 6. Treatment Journey

### Component

- HomeTreatmentJourney.astro

### Purpose

Explains the patient's treatment pathway in a simple step-by-step format.

### Child Components

- ProcessGrid.astro
- ProcessStep.astro

---

## 7. Articles Section

### Component

- HomeArticles.astro

### Purpose

Highlights educational oncology articles and encourages patient education.

### Child Components

- BlogGrid.astro

---

## 8. Patient-Centered Care

### Component

- PatientCenteredCare.astro

### Purpose

Communicates the clinic's philosophy of personalized and supportive care.

### Child Components

- FeatureGrid.astro
- FeatureCard.astro

---

## 9. Call To Action

### Component

- Cta.astro

### Purpose

Final conversion section encouraging visitors to contact the clinic.

### Shared Components

- ButtonLink.astro

---

# Main Dependencies

## Layout

- BaseLayout.astro

## Global Components

- Hero.astro
- Section.astro
- SectionHeading.astro
- ButtonLink.astro
- Cta.astro

## Data Files

- services.ts
- benefits.ts

## Assets

- hero.webp

---

# Maintenance Notes

## High-impact components used on this page

- Hero.astro
- Section.astro
- SectionHeading.astro
- ButtonLink.astro
- Cta.astro

Changes to these components may affect multiple pages.
