import { List } from 'flowbite-react';
import { ArticleItem } from './ArticleItem';
import { api } from '@/lib/api';

export const ArticleList = async () => {
    const articles = await api.getArticles();
    articles.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

    return (
        <List ordered unstyled className="max-w-4xl mx-auto">
            {articles.map((article) => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </List>
    );
};
