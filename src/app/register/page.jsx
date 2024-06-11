import Navbar from '@/components/generics/navbar';
import RegisterPane from '@/components/auth/RegisterPane';
import React from 'react';

export const metadata = {
    title: 'MoonNine GALLERY | Sign up',
    description: 'Sign up to MoonNine GALLERY',
};

function page() {
    return (
        <>
            <Navbar />
            <main className="flex justify-center items-center font-Adamina min-h-[calc(100vh-75px)] max-w-screen overflow-x-hidden py-10 pt-[100px]">
                <RegisterPane />
            </main>
        </>
    );
}

export default page;
