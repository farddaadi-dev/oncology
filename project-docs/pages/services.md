# Services Page Documentation

## Purpose

The Services section presents the oncology and hematology services
provided by the clinic. It acts as the main navigation point for
patients seeking information about diagnosis, treatment options,
supportive care, and consultation services.

The section is designed using reusable components and a shared
service detail architecture to allow future services to be added
without rebuilding page layouts.

---

# Services Overview Page

File:

- src/pages/services/index.astro

---

## 1. Hero Section

### Component

- Hero.astro

### Purpose

Introduces the clinic's medical services and guides visitors into
exploring available treatments.

---

## 2. Services Grid

### Component

- ServiceGrid.astro

### Purpose

Displays the main categories of oncology and hematology services.

### Child Components

- ServiceCard.astro

### Data Source

- services.ts

---

## 3. Treatment Features Section

### Components

- FeatureGrid.astro
- FeatureCard.astro

### Purpose

Highlights important aspects of the clinic's treatment approach.

---

## 4. Treatment Journey Section

### Components

- ProcessGrid.astro
- ProcessStep.astro

### Purpose

Explains the general patient pathway from consultation to treatment.

---

## 5. FAQ Section

### Component

- Faq.astro

### Purpose

Provides answers to common patient questions.

### Data Source

- servicesFAQ.ts

---

## 6. Call To Action

### Component

- Cta.astro

### Purpose

Encourages patients to contact the clinic or request consultation.

### Child Components

- ButtonLink.astro

---

# Service Detail Architecture

## Layout

All individual service pages use:

- ServiceDetailLayout.astro

This creates a consistent structure for:

- medical oncology
- hematology
- procedures
- supportive care
- ambulatory services
- consultation
- home visit
- home nursing

---

# Shared Service Detail Components

## Hero Area

### Component

- Hero.astro

### Data Source

- services.ts

---

## Content Sections

### Components

- Section.astro
- SectionHeading.astro

---

## Feature Sections

### Components

- FeatureGrid.astro
- FeatureCard.astro

---

## Process Sections

### Components

- ProcessGrid.astro
- ProcessStep.astro

---

## FAQ Sections

### Component

- Faq.astro

### Data Sources

Examples:

- medicalOncologyFAQ.ts
- hematologyFAQ.ts
- proceduresFAQ.ts
- supportiveFAQ.ts
- ambulatoryFAQ.ts
- consultFAQ.ts
- homeVisitFAQ.ts
- homeNursingFAQ.ts

---

# Main Dependencies

## Layouts

- BaseLayout.astro
- ServiceDetailLayout.astro

## Components

- Hero.astro
- Section.astro
- SectionHeading.astro
- ServiceGrid.astro
- ServiceCard.astro
- FeatureGrid.astro
- FeatureCard.astro
- ProcessGrid.astro
- ProcessStep.astro
- Faq.astro
- Cta.astro
- ButtonLink.astro

## Data Files

- services.ts
- servicesFAQ.ts
- individual service FAQ files

## Utility Files

- getService.ts

---

# High-impact Components Used

- ServiceDetailLayout.astro
- FeatureGrid.astro
- FeatureCard.astro
- ProcessGrid.astro
- ProcessStep.astro
- Faq.astro
- Section.astro

Changes to these components may affect many service pages.

---

# Design Notes

## Architecture Decision

The service pages intentionally use a shared layout instead of separate
custom page structures.

Benefits:

- Consistent patient experience
- Easier addition of new services
- Centralized design updates
- Reduced code duplication

## Future Expansion

Adding a new service should usually require:

1. Adding service information to services.ts
2. Creating the service page
3. Adding FAQ data if needed
4. Reusing ServiceDetailLayout.astro
