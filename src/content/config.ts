const blog = defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
      author: z.string(),
      featured: z.boolean().default(false),
      publishDate: z.date(),
      updatedDate: z.date().optional(),
      readingTime: z.string()
    })
  });