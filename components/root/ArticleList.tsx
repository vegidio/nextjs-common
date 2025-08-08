import { List } from 'flowbite-react';
import { ArticleItem } from './ArticleItem';
import { getArticles } from '@/lib/graphql/getArticles';

export const ArticleList = async () => {
    const articles = await getArticles();
    articles.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

    return (
        <List ordered unstyled className="max-w-4xl mx-auto">
            {articles.map((article) => (
                <ArticleItem key={article.id} title={article.title} image={article.image} body={article.body} />
            ))}
        </List>
    );
};
