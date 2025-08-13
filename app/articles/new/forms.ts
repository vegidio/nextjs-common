import { z } from 'zod';

export const articleNewSchema = z.object({
    title: z.string().min(5, 'THe title field must be at least 5 characters'),
    body: z.string().nonempty('The body field cannot be empty'),
});

export type ArticleNewFormData = z.infer<typeof articleNewSchema>;
