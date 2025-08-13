'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { type ArticleNewFormData, articleNewSchema } from '@/app/articles/new/forms';
import { createArticle } from '@/lib/actions';

export default function ArticleNewPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ArticleNewFormData>({
        resolver: zodResolver(articleNewSchema),
    });

    const onSubmit: SubmitHandler<ArticleNewFormData> = async (data) => {
        await createArticle(data);
    };

    return (
        <main className="max-w-5xl my-4 mx-auto">
            <p>{errors.body?.message}</p>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="title">Title</Label>
                    </div>
                    <TextInput {...register('title')} type="text" placeholder="The article title" />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="body">Body</Label>
                    </div>
                    <Textarea {...register('body')} placeholder="The body of the article" rows={4} />
                </div>

                <Button disabled={isSubmitting} type="submit">
                    {isSubmitting ? 'Submitting' : 'Submit'}
                </Button>
            </form>
        </main>
    );
}
