import { Sidebar, SidebarItemGroup, SidebarItems } from 'flowbite-react';
import { HiViewBoards } from 'react-icons/hi';
import { CategoryItem } from './CategoryItem';
import { getCategories } from '@/lib/graphql';

export const CategoriesMenu = async () => {
    const categories = await getCategories();
    categories.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <Sidebar>
            <SidebarItems>
                <h2 className="dark:text-white">Categories</h2>

                <SidebarItemGroup>
                    {categories.map((category) => (
                        <CategoryItem key={category.id} icon={<HiViewBoards />} text={category.name} />
                    ))}
                </SidebarItemGroup>
            </SidebarItems>
        </Sidebar>
    );
};
