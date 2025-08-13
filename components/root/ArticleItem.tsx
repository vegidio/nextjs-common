import Image from 'next/image';
import { Card, ListItem } from 'flowbite-react';
import type { Article } from '@/lib/types';

type ArticleItemProps = {
    article: Article;
};

export const ArticleItem = ({ article }: ArticleItemProps) => {
    const shortBody = `${article.body.slice(0, 200)}...`;

    return (
        <ListItem className="pb-3 sm:pb-4">
            <Card href="#">
                <div className="flex gap-4">
                    <div className="relative w-[8rem] h-[8rem]">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover object-center rounded-lg"
                        />
                    </div>

                    <div className="flex-1">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {article.title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{shortBody}</p>
                    </div>
                </div>
            </Card>
        </ListItem>
    );
};
