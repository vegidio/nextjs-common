import { sdk } from '@/graphql/sdk';

export const getCategories = async () => {
    const { categories } = await sdk.Categories();

    categories.map((category) => {
        console.log(category?.documentId);
    });
};
