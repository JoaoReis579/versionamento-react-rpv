import { useState, FormEvent } from 'react';

export default function Ex03() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors: { email?: string; password?: string } = {};
        if (!email.includes('@')) newErrors.email = 'Email inválido';
        if (password.length < 6) newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) alert('Login bem-sucedido!');
    };

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-800 text-white p-8">
            <h1 className="text-3xl font-bold mb-4 text-white">Formulário de Login</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded" 
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Senha:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded" 
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
            </form>
        </div>
    )
}