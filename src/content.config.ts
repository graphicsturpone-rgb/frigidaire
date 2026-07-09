import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const retailersCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/retailers" }),
  schema: z.object({
    name: z.string(),
    availability: z.string(),
    url: z.string().url(),
    display_order: z.number().default(0),
    default_image: z.string().optional(),
    hover_image: z.string().optional(),
  }),
});

const faqsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faqs" }),
  schema: z.object({
    question: z.string(),
    language: z.enum(['en', 'fr']).default('en'),
  }),
});

export const collections = {
  'retailers': retailersCollection,
  'faqs': faqsCollection,
};
