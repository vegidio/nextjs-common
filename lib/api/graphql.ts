import type { Api } from './index';
import { sdk } from '@/graphql/sdk';
import { articleSchema, categorySchema } from '@/lib/types';

export class GraphqlApi implements Api {
    async getArticles() {
        const { articles } = await sdk.Articles();

        return articleSchema.array().parse(
            articles.flatMap((article) => {
                const first = article?.blocks?.[0];
                if (!article || first?.__typename !== 'ComponentSharedRichText') return [];

                return [
                    {
                        id: article.documentId,
                        title: article.title,
                        slug: article.slug,
                        body: first.body,
                        createdAt: article.createdAt,
                        image: article.cover?.url,
                        category: article.category,
                    },
                ];
            }),
        );
    }

    async getCategories() {
        const { categories } = await sdk.Categories();

        return categorySchema.array().parse(
            categories.map((category) => ({
                id: category?.documentId,
                name: category?.name,
                slug: category?.slug,
            })),
        );
    }
}
