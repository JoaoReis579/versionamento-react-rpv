import { useState } from 'react';

export default function Ex02() {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState<number[]>([]);

    const increment = () => {
        setHistory(prev => [...prev, count]);
        setCount(count + 1);
    };

    const decrement = () => {
        setHistory(prev => [...prev, count]);
        setCount(count - 1);
    };

    const reset = () => {
        setHistory([]);
        setCount(0);
    };

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">Counter com Histórico</h1>
            <p className="text-xl mb-4">Count: {count}</p>
            <div className="flex gap-4 mb-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={increment}>Increment</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={decrement}>Decrement</button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={reset}>Reset</button>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">Histórico:</h2>
                <div className="flex gap-2 flex-wrap">
                    {history.map((value, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500 text-white rounded">{value}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}