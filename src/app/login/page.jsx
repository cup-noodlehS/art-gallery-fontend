import Navbar from '@/components/generics/navbar';
import LoginPane from '@/components/auth/LoginPane';

export const metadata = {
    title: 'MoonNine GALLERY | login',
    description:
        'Login to MoonNine GALLERY to start bidding on your favorite artworks.',
};

function Page() {
    return (
        <>
            <Navbar />
            <main className="flex justify-center items-center font-Adamina h-[calc(100vh-75px)]">
                <LoginPane />
            </main>
        </>
    );
}

export default Page;
