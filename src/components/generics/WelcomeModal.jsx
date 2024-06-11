'use client';

import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function WelcomeModal(props) {
    const { close } = props;
    const key = 'show-welcome-modal';
    const contRef = useRef();

    const toggleDontShow = () => {
        const value = JSON.parse(localStorage.getItem(key) || 'true');
        localStorage.setItem(key, JSON.stringify(!value));
    };

    useEffect(() => {
        const handleClick = (e) => {
            console.log('hree');
            if (!contRef.current.contains(e.target)) {
                console.log('hii');
                close();
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);
    return (
        <div class="fixed z-[9999] top-0 left-0 w-screen h-screen bg-black/[0.6] flex items-center justify-center">
            <div
                ref={contRef}
                class="absolute bg-white p-5 rounded-md max-h-[80%] overflow-y-auto w-[400px] max-w-[90%] z-[99999]"
            >
                <div className="flex justify-end relative h-[20px]">
                    <button className="fixed" onClick={close}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <h1 className="font-bold text-xl text-center mb-2">
                    Welcome to Moonine Gallery!
                </h1>

                <h2 className="italic mb-1 font-semibold">
                    This is a Prototype Functional Website
                </h2>
                <p className="mb-3">
                    Greetings! Thank you for visiting Moonine Gallery. Please
                    note that this platform is currently in its prototype phase,
                    serving as a glimpse into a larger vision. Also, this is
                    deployed in a slow server, so please be patient.
                </p>
                <h2 className="italic mb-1 font-semibold">What&apos;s Next?</h2>
                <p className="mb-3">
                    Moonine Gallery aims to evolve into a comprehensive platform
                    for artists, offering features such as blog posting, artwork
                    sales and auctions, freelancer connections, and much more.
                </p>
                <h2 className="italic mb-1 font-semibold">Stay in the Loop!</h2>
                <p className="mb-3">
                    Excited to see what&apos;s coming next? Leave us your email
                    below, and we&apos;ll notify you as soon as the full-fledged
                    platform is released. Be among the first to explore our
                    vibrant community of artists and art enthusiasts!
                </p>
                <div className="flex items-stretch gap-2">
                    <label class="input input-bordered flex items-center gap-2 min-w-[20px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="w-4 h-4 opacity-70"
                        >
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" class="grow" placeholder="Email" />
                    </label>
                    <button class="btn btn-neutral">Notify Me!</button>
                </div>
                <div className="flex gap-2 items-center mt-3">
                    <input
                        type="checkbox"
                        id="dont-show"
                        onChange={toggleDontShow}
                    />
                    <label for="dont-show">Don&apos;t show this again</label>
                </div>
            </div>
        </div>
    );
}

export default WelcomeModal;
