# Design System

This document defines the visual and implementation conventions for the Astro oncology and hematology website. It is intended to keep new pages and components calm, trustworthy, accessible, and visually consistent.

## 1. Design principles

- **Patient-first clarity:** Use plain, reassuring Persian. Explain medical concepts without making guarantees or creating unnecessary anxiety.
- **Evidence-led, human tone:** The interface should communicate clinical expertise alongside empathy and ongoing support.
- **Calm visual hierarchy:** Prefer generous whitespace, restrained colour, readable text, and a small number of strong calls to action.
- **Consistency over novelty:** Reuse existing layout and card components before creating new patterns.
- **Responsive by default:** All content must remain readable and usable on phones, tablets, and desktops.

## 2. Colour tokens

Use semantic tokens rather than hard-coded colours in components.

```css
:root {
  /* Brand */
  --color-brand-green: rgb(111, 122, 94);
  --color-brand-green-light: rgb(138, 150, 119);
  --color-brand-green-dark: rgb(85, 94, 71);

  --color-brand-accent: #F08A00;
  --color-brand-accent-light: #F4A63B;
  --color-brand-accent-dark: #C67200;

  /* Backgrounds */
  --color-bg-primary: #FCFBF9;
  --color-bg-secondary: #F7F7F1;
  --color-bg-hero: #efebdd;
  --color-bg-dark: #1f241e;

  /* Text and UI */
  --color-text-heading: #30322B;
  --color-text-primary: #66685C;
  --color-text-secondary: rgb(92, 96, 87);
  --color-text-inverse: #FFFFFF;
  --color-border: #E5E5D8;
  --color-danger: #d9534f;
  --color-danger-bg: rgba(217, 83, 79, 0.08);
}
```

Guidelines:

- Use `--color-text-heading` for headings and `--color-text-primary` or `--color-text-secondary` for reading text.
- Use green for supportive and navigational emphasis; use the amber accent for primary actions.
- Use `--color-bg-secondary` to alternate dense content sections and create visual rhythm.
- Avoid adding near-duplicate colour variables. If a new colour is needed, give it a distinct semantic purpose.

## 3. Typography

The site uses Vazirmatn for body copy and Estedad for prominent display headings.

```css
:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.563rem;
  --text-2xl: 1.953rem;
  --text-3xl: 2.441rem;
}
```

Available weights: `300`, `400`, `500`, and `700`.

| Role | Weight | Guidance |
| --- | --- | --- |
| Body copy | 400 | Default for paragraphs and longer explanations. |
| Labels, badges, buttons | 500 | Clear but not visually heavy. |
| Headings | 700 | Use for page, section, and card titles. |
| Hero titles | 700 | Use Estedad and keep wording compact. |

Typography rules:

- Body text uses `--text-base` with a line height around `1.7` to `1.9`.
- Lead text may use `1.1rem` to `1.15rem` with line height `1.9` to `2`.
- Section headings should use `clamp()` where needed and may use `text-wrap: balance`.
- Do not rely on global heading margins for component layout. Components should own their spacing.
- Keep medical copy scannable: prefer short paragraphs and meaningful subheadings.

## 4. Spacing scale

Use the spacing scale instead of one-off values whenever practical.

```css
:root {
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
}
```

- Use `--space-md` and `--space-lg` for internal component spacing.
- Use `--space-xl` for grids and major card separation.
- Use `--space-2xl` and `--space-3xl` for large layout rhythm.
- Do not compress text-heavy medical content; comfortable spacing improves readability.

## 5. Border radius

```css
:root {
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 999px;
}
```

- Cards: `--radius-lg`
- Buttons: `--radius-md` or `--radius-lg`
- Large visual panels and images: `--radius-lg` or `--radius-xl`
- Pills, tags, and badges: `--radius-full`

## 6. Shadows and borders

```css
:root {
  --shadow-soft: 0 4px 12px rgba(0, 0, 0, 0.06);
  --shadow-medium: 0 8px 24px rgba(0, 0, 0, 0.08);
  --shadow-normal: 2px 2px 4px rgba(0, 0, 0, 0.2);
  --shadow-glow: 0 0 8px rgba(242, 155, 23, 0.18);
}
```

- Prefer `--shadow-soft` or `--shadow-medium` for cards.
- Avoid adding component-specific hard-coded shadows unless there is a clear visual reason.
- Standard card border: `1px solid var(--color-border)`.
- On hover, use a subtle lift (`translateY(-4px)` to `translateY(-6px)`) and `--shadow-medium`.

## 7. Transitions

```css
:root {
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}
```

Use transitions only for meaningful feedback. Prefer a consistent set of properties:

```css
transition:
  transform 0.25s ease,
  box-shadow 0.25s ease,
  background-color 0.25s ease,
  color 0.25s ease,
  border-color 0.25s ease;
```

Avoid excessive movement or animation. The site should feel calm and dependable.

## 8. Layout containers

```css
:root {
  --max-width-hero: 1400px;
  --max-width-content: 1200px;
  --max-width-narrow: 800px;
}
```

| Container | Use |
| --- | --- |
| `.container` | Standard pages, grids, and browsing content. |
| `.container-narrow` | Articles, policies, and reading-focused content. |
| `.container-hero` | Hero areas with large imagery. |

Use `--max-width-content` as the standard content width. Medical content benefits from a restrained layout rather than very wide text columns.

## 9. Section spacing and backgrounds

`Section.astro` is the standard page section component.

```astro
<Section background="white" width="normal">
  ...
</Section>
```

Guidelines:

- Standard vertical spacing: `padding-block: clamp(4rem, 8vw, 7rem)`.
- Use `background="secondary"` for visual separation, card-heavy content, or alternating sections.
- Use `width="wide"` for broad grids and visual content.
- Reserve narrow reading widths for article-like content.
- Give anchorable sections a `scroll-margin-top` that clears the sticky header.

## 10. Grid patterns

Use `FeatureGrid`, `ServiceGrid`, and `ProcessGrid` before creating a new grid pattern.

```css
.grid-auto {
  display: grid;
  gap: var(--space-xl);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

Guidelines:

- The visual system is built around **four-card feature grids**. Use four cards when presenting parallel concepts.
- If content only has three items, either add a meaningful fourth item or use a deliberately different component/layout. Do not leave an unintended empty grid column.
- At smaller widths, cards must stack or reflow without causing narrow text columns.
- `ProcessGrid` is currently best suited to five steps; use five meaningful steps or make the component responsive before using a different count.

## 11. Card guidelines

The primary card components are `FeatureCard`, `ServiceCard`, and `InfoCard`.

Shared conventions:

- Use `--radius-lg`, `--color-border`, and a tokenized shadow.
- Use `padding: var(--space-xl)` (or the established equivalent).
- Use a subtle hover lift only when a card is interactive or benefits from emphasis.
- Use `display: flex; flex-direction: column; height: 100%` when cards need equal heights in a grid.
- Use heading colour tokens and `--color-text-secondary` for descriptions.
- Keep card titles concise and descriptions to one or two short sentences.

### Icon containers in cards

Use the shared visual language:

```css
.card-icon {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid var(--color-brand-green-light);
  border-radius: 18px;
}

.card-icon :global(img) {
  width: 1.8rem;
  height: 1.8rem;
}
```

## 12. Buttons

Use `ButtonLink.astro` for navigational calls to action.

```astro
<ButtonLink
  href="/consultation"
  text="مشاوره آنلاین"
  variant="primary"
/>
```

Button rules:

- `primary`: main conversion action; use sparingly per visible section.
- `secondary`: supporting navigation or alternative action.
- Use `inline-flex` with centered content so icons can be added later.
- Keep button labels action-oriented and short.
- Ensure a visible keyboard focus state:

```css
.button:focus-visible {
  outline: 3px solid var(--color-brand-accent);
  outline-offset: 3px;
}
```

- Add `rel="noopener noreferrer"` whenever using `target="_blank"`.
- Pass the optional `class` prop through to the rendered anchor when a local layout modifier is required.

## 13. Icon usage

Icons are centralized in `src/data/icons.ts`.

```ts
export type IconName = keyof typeof icons;
```

Rules:

- Pass semantic icon names such as `"heartPulse"`, `"clipboardList"`, and `"flaskConical"`; do not pass raw SVG paths into card components.
- Add a new SVG to `icons.ts` before using it in a typed component.
- Decorative icons must have empty alt text (`alt=""`) and an enclosing semantic label only when needed.
- Choose icons by meaning, not by file name. Maintain a calm, clinical visual vocabulary.

## 14. Component conventions

- Use `@/` aliases for internal imports.
- Define a local `Props` interface in each Astro component.
- Prefer typed prop unions for component variants, sizes, and icon names.
- Keep components focused: data lookup belongs in pages/data utilities; rendering belongs in components.
- Use slots for flexible content regions rather than introducing overly broad prop APIs.
- Reuse `BaseLayout`, `ServiceDetailLayout`, `Section`, `SectionHeading`, `Cta`, `Faq`, and grids rather than reproducing their markup in pages.
- For service pages, pass the full typed `service` object to `ServiceDetailLayout`.

## 15. Service-page conventions

All service detail pages use the shared flow:

```text
services.ts → getService() → page → ServiceDetailLayout → Hero + content + CTA
```

Use `ServiceDetailLayout` to provide:

- page metadata,
- shared hero,
- breadcrumb navigation,
- the final CTA.

Each page should explain the patient journey in this order where relevant:

1. What the service is.
2. What it includes or when it is needed.
3. Core conditions, treatments, or procedures.
4. Monitoring, follow-up, and patient support.
5. Service-specific FAQ.

Keep medical language careful: describe what may be appropriate after assessment; do not promise outcomes or advise patients to change treatment independently.

## 16. Accessibility

- Use one `h1` per page; use headings in a logical order.
- Give meaningful images informative Persian alt text. Decorative images and SVG icons use `alt=""`.
- Ensure visible focus states for links, buttons, form fields, menus, and accordions.
- Do not communicate meaning by colour alone.
- Maintain sufficient contrast, especially for body text and outline buttons.
- Use semantic elements: `nav`, `main`, `section`, `article`, `header`, lists, and buttons/links according to purpose.
- In Persian/RTL layouts, verify that breadcrumbs, icons, and interactive controls retain the correct visual direction.
- Respect reduced-motion preferences when adding non-essential animations.
- Write clear, human error and safety messages; avoid alarming language.

## 17. Development rules

- Prefer existing tokens over hard-coded values.
- Prefer existing reusable components over duplicated markup and CSS.
- Keep the data layer typed (`ServiceSlug`, `IconName`, `DoctorId`, etc.).
- Add data in one source of truth: services in `services.ts`, icons in `icons.ts`, doctor information in `doctors.ts`, and FAQs in their dedicated data files.
- Avoid duplicate object keys in data objects; later values silently overwrite earlier ones.
- Verify desktop and mobile layouts after changing a shared component.
- Test four-card sections, five-step processes, long Persian headings, and CTA buttons at narrow widths.
- Keep visible copy patient-friendly, evidence-based, and free of absolute medical promises.

## 18. Quick checklist for new work

Before considering a page or component complete, confirm:

- [ ] It uses the appropriate layout and container.
- [ ] It reuses the established section, heading, card, grid, and button patterns.
- [ ] It uses tokens instead of new hard-coded colours, radii, shadows, or spacing.
- [ ] Its icons use `IconName` through `icons.ts`.
- [ ] It has responsive behaviour at mobile widths.
- [ ] Its heading structure and alt text are accessible.
- [ ] Its CTA is clear, appropriate, and visually consistent.
- [ ] Medical copy is accurate in tone and does not overpromise.
