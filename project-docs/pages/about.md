# About Page Documentation

## Purpose

The About page introduces the oncology clinic's identity, philosophy,
and medical team. Its purpose is to establish trust, explain the
clinic's approach to cancer care, and introduce the physicians behind
the practice.

---

# Page Structure

## 1. About Hero Section

### Component

- AboutHero.astro

### Purpose

Creates the first impression of the About page.
Introduces the clinic and establishes the overall message.

### Child Components

- Hero.astro

### Assets

- aboutHero.webp

---

## 2. Why Choose Us Section

### Component

- WhyChooseUs.astro

### Purpose

Explains the strengths and values that differentiate the clinic.

### Child Components

- Section.astro
- SectionHeading.astro
- InfoCard.astro

### Data Source

- benefits.ts

---

## 3. Treatment Philosophy Section

### Component

- TreatmentPhilosophy.astro

### Purpose

Explains the clinic's approach to personalized oncology care
and treatment decision-making.

### Child Components

- Section.astro
- SectionHeading.astro
- InfoCard.astro

### Data Source

- philosophy.ts

---

## 4. Clinic Story Section

### Component

- AboutStory.astro

### Purpose

Presents the background, journey, and mission of the clinic.

### Child Components

- Section.astro
- SectionHeading.astro
- ButtonLink.astro

### Assets

- about-story.webp

---

## 5. What To Expect Section

### Component

- WhatToExpect.astro

### Purpose

Explains the patient experience and what visitors can expect
during their care journey.

### Child Components

- Section.astro
- SectionHeading.astro
- ProcessStep.astro

### Data Source

- whatToExpect.ts

---

## 6. Meet The Doctors Section

### Component

- MeetTheDoctors.astro

### Purpose

Introduces the medical team and provides access to physician profiles.

### Child Components

- DoctorCard.astro

### Data Source

- doctors.ts

---

## 7. Call To Action Section

### Component

- Cta.astro

### Purpose

Provides a final invitation for visitors to schedule consultation
or contact the clinic.

### Child Components

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

- philosophy.ts
- whatToExpect.ts
- doctors.ts

## Assets

- aboutHero.webp
- about-story.webp

---

# High-impact Components Used

- Section.astro
- SectionHeading.astro
- ButtonLink.astro
- Hero.astro
- Cta.astro

Changes to these components may affect multiple pages.

---

# Design Notes

## Page Role

The About page follows this trust-building journey:

1. Introduce the clinic
2. Explain values and treatment philosophy
3. Describe patient experience
4. Introduce physicians
5. Encourage visitors to continue toward consultation

## Future Maintenance Considerations

- Changes to doctors.ts affect physician information across the website.
- Treatment philosophy content should remain consistent with clinical messaging.
- Shared components should be modified carefully because they affect multiple pages.