import { useState } from 'react';

export default function Ex01() {
    const [isDark, setIsDark] = useState(false);

    return(
        <div className={isDark ? 'bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center' : 'bg-white text-black min-h-screen flex flex-col items-center justify-center'}>
            <h1 className="text-4xl font-bold mb-4">Theme Toggle</h1>
            <p className="mb-4">Estado + Estilização (dark/light mode)</p>
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" 
                onClick={() => setIsDark(!isDark)}
            >
                {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    )
}