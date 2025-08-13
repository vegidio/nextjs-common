type ArticlePageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { id } = await params;

    return (
        <main className="max-w-5xl mx-auto bg-amber-300">
            <h1>ArticlePage</h1>
            <p>{id}</p>
        </main>
    );
}
