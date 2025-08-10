import type { Api } from './index';
import { articleSchema, categorySchema } from '@/lib/types';
import { client } from '@/openapi/client';

export class RestApi implements Api {
    async getArticles() {
        const { data: response } = await client.GET('/articles');
        const articles = response?.data;

        return articleSchema.array().parse(
            articles?.flatMap((article) => {
                const first = article?.blocks?.[0];
                if (!article || first?.__component !== 'shared.rich-text') return [];

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
        const { data: response } = await client.GET('/categories');
        const categories = response?.data;

        return categorySchema.array().parse(
            categories?.map((category) => ({
                id: category?.documentId,
                name: category?.name,
                slug: category?.slug,
            })),
        );
    }
}
