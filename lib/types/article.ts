import { z } from 'zod';
import { categorySchema } from '@/lib/types';

export const articleSchema = z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    body: z.string(),
    createdAt: z.coerce.date(),
    image: z.url(),
    category: categorySchema.omit({ id: true }),
});

export type Article = z.infer<typeof articleSchema>;
