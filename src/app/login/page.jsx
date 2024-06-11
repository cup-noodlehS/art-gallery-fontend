import Navbar from '@/components/generics/navbar';
import LoginPane from '@/components/auth/LoginPane';

export const metadata = {
    title: 'MooNine GALLERY | login',
    description:
        'Login to MooNine GALLERY to start bidding on your favorite artworks.',
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
