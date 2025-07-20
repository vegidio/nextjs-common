import { type DocumentNode, print } from 'graphql';
import { getSdk, type Requester } from '@/graphql/graphql';

const fetcher: Requester<unknown> = async <R, V>(doc: DocumentNode, variables?: V): Promise<R> => {
    const query = print(doc);
    const res = await fetch('https://clever-fish-045791bdd9.strapiapp.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();
    if (json.errors) {
        throw new Error(json.errors.map((e: any) => e.message).join('\n'));
    }

    return json.data as R;
};

export const sdk = getSdk(fetcher);
