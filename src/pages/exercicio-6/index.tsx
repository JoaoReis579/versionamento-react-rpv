import { useState, useEffect } from 'react';

export default function Ex06() {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data.slice(0, 20));
                setLoading(false);
            })
            .catch(err => {
                setError('Erro ao carregar posts');
                setLoading(false);
            });
    }, []);

    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.body.toLowerCase().includes(query.toLowerCase())
    );

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">Buscador com Filtro</h1>
            <input 
                type="text" 
                placeholder="Buscar por título ou conteúdo..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                className="w-96 p-3 mb-4 border-2 border-gray-400 rounded text-black text-lg font-semibold placeholder-gray-600" 
            />
            {loading && <p className="text-white mb-4">Carregando posts...</p>}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {!loading && (
                <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl max-h-96 overflow-y-auto">
                    {filteredPosts.length > 0 ? (
                        <ul>
                            {filteredPosts.map(post => (
                                <li key={post.id} className="mb-4 p-3 border-b border-gray-200">
                                    <strong className="text-black block text-lg">{post.title}</strong>
                                    <p className="text-gray-700 text-sm mt-2">{post.body.substring(0, 150)}...</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-black text-center">Nenhum post encontrado</p>
                    )}
                </div>
            )}
        </div>
    )
}