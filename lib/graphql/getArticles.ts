import type { ArticlesQuery } from '@/graphql/graphql';
import { sdk } from '@/graphql/sdk';
import { type Article, articleSchema } from '@/lib/types';

export const getArticles = async (): Promise<Article[]> => {
    const { articles } = await sdk.Articles();
    return parseArticles(articles);
};

const parseArticles = (articles: ArticlesQuery['articles']) => {
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
};
