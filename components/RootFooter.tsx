import { Footer, FooterCopyright } from 'flowbite-react';
import { BsDribbble, BsGithub } from 'react-icons/bs';

export const RootFooter = () => {
    return (
        <Footer container>
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <FooterCopyright href="#" by="Vinicius Egidio" year={2025} />

                <div className="flex space-x-6 sm:mt-0 sm:justify-center">
                    <BsGithub className="dark:text-gray-400" />
                    <BsDribbble className="dark:text-gray-400" />
                </div>
            </div>
        </Footer>
    );
};
