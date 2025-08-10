import { type DocumentNode, print } from 'graphql';
import { getSdk, type Requester } from '@/graphql/generated';

type FetcherOptions = Pick<RequestInit, 'cache' | 'next'>;

const fetcher: Requester<FetcherOptions> = async <R, V>(
    doc: DocumentNode,
    variables?: V,
    options?: FetcherOptions,
): Promise<R> => {
    const query = print(doc);
    const res = await fetch('https://clever-fish-045791bdd9.strapiapp.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
        cache: options?.cache,
        next: options?.next,
    });

    const json = await res.json();
    if (json.errors) {
        throw new Error(json.errors.map((e: any) => e.message).join('\n'));
    }

    return json.data as R;
};

export const sdk = getSdk(fetcher);
