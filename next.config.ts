import type { NextConfig } from 'next';
import withFlowbiteReact from 'flowbite-react/plugin/nextjs';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://clever-fish-045791bdd9.media.strapiapp.com/**')],
    },
};

export default withFlowbiteReact(nextConfig);
