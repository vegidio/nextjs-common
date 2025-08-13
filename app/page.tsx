import { ArticleList, CategoriesMenu } from '@/components/root';

export default function Home() {
    return (
        <main className="py-3 flex gap-3">
            <section>
                <CategoriesMenu />
            </section>

            <section className="grow">
                <ArticleList />
            </section>
        </main>
    );
}
