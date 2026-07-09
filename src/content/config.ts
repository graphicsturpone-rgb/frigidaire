import { defineCollection, z } from 'astro:content';

const retailers = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    availability: z.string(),
    availability_fr: z.string().optional(),
    url: z.string(),
    default_image_url: z.string().optional(),
    hover_image_url: z.string().optional(),
    hover_bg_color: z.string().optional(),
    display_order: z.number().optional(),
    country_code: z.string().optional(),
  }),
});

const faqs = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    language: z.string().optional(),
    display_order: z.number().optional(),
  }),
});

export const collections = { retailers, faqs };
