import React from 'react';

function FullLoader() {
    return (
        <div className="flex justify-center items-center fixed left-0 top-0 w-screen h-lvh bg-slate-50 z-40">
            <span className="loading loading-infinity loading-lg text-blue-400"></span>
        </div>
    );
}

export default FullLoader;
