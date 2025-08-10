import createClient from 'openapi-fetch';
import type { paths } from '@/openapi/generated';

export const client = createClient<paths>({ baseUrl: 'https://clever-fish-045791bdd9.strapiapp.com' });
