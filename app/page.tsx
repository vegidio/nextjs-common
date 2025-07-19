import { CategoriesMenu } from '@/components/home';

export default function Home() {
    return (
        <main className="py-3 flex gap-3">
            <section className="flex-1/3">
                <CategoriesMenu />
            </section>

            <section className="flex-2/3 bg-pink-400">
                <h1>Articles</h1>
            </section>
        </main>
    );
}
