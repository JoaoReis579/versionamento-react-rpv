import { useState, useEffect } from 'react';

export default function Ex05() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-800 text-white p-8">
            <h1 className="text-3xl font-bold mb-4 text-white">Lista de Usuários</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <ul className="bg-white p-6 rounded shadow-md w-96 text-black">
                    {users.map(user => (
                        <li key={user.id} className="mb-2 p-2 border-b border-gray-200 text-black">
                            <strong>{user.name}</strong> - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}