import type { ReactNode } from 'react';

type CategoryItemProps = {
    href?: string;
    icon?: ReactNode;
    text: string;
    label?: string;
};

export const CategoryItem = ({ href, icon, text, label }: CategoryItemProps) => {
    return (
        <li>
            <a
                href={href}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
                {icon}

                <span className="flex-1 ms-3 whitespace-nowrap">{text}</span>

                {label && (
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                        {label}
                    </span>
                )}
            </a>
        </li>
    );
};
