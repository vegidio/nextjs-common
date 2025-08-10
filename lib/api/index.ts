import 'server-only';

import type { Article, Category } from '@/lib/types';
import { GraphqlApi } from '@/lib/api/graphql';
import { RestApi } from '@/lib/api/rest';

export interface Api {
    getCategories: () => Promise<Category[]>;
    getArticles: () => Promise<Article[]>;
}

const makeApi = (apiType: 'graphql' | 'rest'): Api => {
    switch (apiType) {
        case 'graphql':
            return new GraphqlApi();
        case 'rest':
            return new RestApi();
    }
};

export const api = makeApi('graphql');
