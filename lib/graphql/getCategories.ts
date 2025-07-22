import type { CategoriesQuery } from '@/graphql/graphql';
import { sdk } from '@/graphql/sdk';
import { type Category, categorySchema } from '@/lib/types';

/**
 * Fetches the categories.
 */
export const getCategories = async (): Promise<Category[]> => {
    const { categories } = await sdk.Categories();
    return parseCategories(categories);
};

const parseCategories = (categories: CategoriesQuery['categories']) => {
    return categorySchema.array().parse(
        categories.map((category) => ({
            id: category?.documentId,
            name: category?.name,
            slug: category?.slug,
        })),
    );
};
