import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeModeScript } from 'flowbite-react';
import { PageFooter, PageHeader } from '@/components/root';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Common Blog',
    description: 'A site with the code that I usually use in my Next.js projects.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <ThemeModeScript />
            </head>

            <body
                id="root-layout"
                className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[90rem] mx-auto mt-3 dark:bg-gray-900`}
            >
                <PageHeader />
                {children}
                <PageFooter />
            </body>
        </html>
    );
}
