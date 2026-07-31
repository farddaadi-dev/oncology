import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
  }),

  schema: ({ image }) =>
  z.object({
    // ===== Basic Information =====
    title: z.string(),

    description: z
      .string()
      .max(160, "Description should be no more than 160 characters."),

    excerpt: z.string(),

    // ===== Author =====
    author: z.enum([
      "farshid",
      "nafiseh",
    ]),

    // ===== Classification =====
categories: z
  .array(
    z.enum([
      "patient-education",
      "treatment-updates",
      "cancers",
      "hematology",
      "medications",
      "nutrition",
      "research-news",
    ]),
  )
  .min(1, "Choose at least one category."),

tags: z.array(z.string()).default([]),
    // ===== Dates =====
    publishDate: z.coerce.date(),

    updatedDate: z.coerce.date().optional(),

    // ===== Media =====
    image: image().optional(),

    imageAlt: z.string().optional(),

    // ===== Article Options =====
    featured: z.boolean().default(false),

    draft: z.boolean().default(false),

    // ===== References =====
    sources: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog,
};