import { CategoriesMenu } from '@/components/home';

export default function Home() {
    return (
        <main className="py-3 flex gap-3">
            <section>
                <CategoriesMenu />
            </section>

            <section className="bg-pink-400 grow">
                <h1>Articles</h1>
            </section>
        </main>
    );
}
