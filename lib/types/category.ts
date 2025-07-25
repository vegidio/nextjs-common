import { z } from 'zod';

export const categorySchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
});

export type Category = z.infer<typeof categorySchema>;
