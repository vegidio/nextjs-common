'use server';

import type { ArticleNewFormData } from '@/app/articles/new/forms';

export const createArticle = async (formData: ArticleNewFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(JSON.stringify(formData));
};
