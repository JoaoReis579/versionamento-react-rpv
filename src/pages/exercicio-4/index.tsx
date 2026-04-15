import { useState } from 'react';

export default function Ex04() {
    const [form, setForm] = useState({name: '', email: '', password: '', confirmPassword: ''});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Nome é obrigatório';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) newErrors.email = 'Email inválido';
        if (form.password.length < 8) newErrors.password = 'Senha deve ter pelo menos 8 caracteres';
        if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Senhas não coincidem';
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) alert('Cadastro bem-sucedido!');
    };

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4 text-white">Formulário de Cadastro</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-gray-700">Nome:</label>
                    <input 
                        type="text" 
                        name="name"
                        value={form.name} 
                        onChange={handleChange} 
                        className="w-full p-2 border border-gray-300 rounded" 
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input 
                        type="email" 
                        name="email"
                        value={form.email} 
                        onChange={handleChange} 
                        className="w-full p-2 border border-gray-300 rounded" 
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Senha:</label>
                    <input 
                        type="password" 
                        name="password"
                        value={form.password} 
                        onChange={handleChange} 
                        className="w-full p-2 border border-gray-300 rounded" 
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Confirmar Senha:</label>
                    <input 
                        type="password" 
                        name="confirmPassword"
                        value={form.confirmPassword} 
                        onChange={handleChange} 
                        className="w-full p-2 border border-gray-300 rounded" 
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Cadastrar</button>
            </form>
        </div>
    )
}