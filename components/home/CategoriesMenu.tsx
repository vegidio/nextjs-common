'use client';

import { Sidebar, SidebarItemGroup, SidebarItems } from 'flowbite-react';
import { HiViewBoards } from 'react-icons/hi';
import { CategoryItem } from '@/components/home/CategoryItem';

export const CategoriesMenu = () => {
    return (
        <Sidebar>
            <SidebarItems>
                <h2 className="dark:text-white">Categories</h2>

                <SidebarItemGroup>
                    <CategoryItem icon={<HiViewBoards />} text="Food" />
                    <CategoryItem icon={<HiViewBoards />} text="Nature" />
                    <CategoryItem icon={<HiViewBoards />} text="Tech" />
                </SidebarItemGroup>
            </SidebarItems>
        </Sidebar>
    );
};
