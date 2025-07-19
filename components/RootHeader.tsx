import Link from 'next/link';
import { DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { LuNotebookPen } from 'react-icons/lu';

export const RootHeader = () => {
    return (
        <Navbar fluid rounded>
            <NavbarBrand className="gap-2" as={Link} href="/">
                <LuNotebookPen className="dark:text-white size-5" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Common Blog</span>
            </NavbarBrand>

            <DarkThemeToggle />

            <NavbarToggle />

            <NavbarCollapse className="items-center">
                <NavbarLink href="/" active>
                    Home
                </NavbarLink>
                <NavbarLink as={Link} href="#">
                    Categories
                </NavbarLink>
                <NavbarLink href="#">Authors</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
};
