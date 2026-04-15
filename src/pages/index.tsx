import Link from "next/link";
import { useState } from "react";

//  Cada item abaixo deverá ser criado numa página separada dentro da pasta "pages"
const exercises = [
  {
    id: 1,
    title: "Theme Toggle",
    description: "Estado + Estilização "
  },
  {
    id: 2,
    title: "Counter com Histórico",
    description: "Estado UseState + lista"
  },
  {
    id: 3,
    title: "Formulário de Login",
    description: "Formulários + Validação básica"
  },
  {
    id: 4,
    title: "Formulário de Cadastro",
    description: "Formulários + Validação avançada"
  },
  {
    id: 5,
    title: "Lista de Usuários",
    description: "Consumo de API (JSONPlaceholder)"
  },
  {
    id: 6,
    title: "Buscador com Filtro",
    description: "Estado + API + Estilização"
  },
  {
    id: 7,
    title: "Todo List",
    description: "Estado completo (CRUD) + Estilização"
  }
];

// Renderizar cada exercício como um card ( com link ) para a página na qual vocês irão desenvolver
// Sugestão de card 
// p-8 flex rounded-md border border-zinc-300

export default function Home() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Versionamento <span className="text-purple-600">React</span> RPV</h1>
      <div className="flex flex-row gap-8">
        {exercises.map(exercicio => {
          return(
            <Link key={exercicio.id} href={`/exercicio-${exercicio.id}`}>
              <div className="w-48 h-24 p-4 rounded-md border border-zinc-300 bg-gray-600 text-white transition-transform hover:scale-105 shadow-lg flex flex-col items-center justify-center text-center cursor-pointer" onMouseEnter={() => setExpanded(prev => ({...prev, [exercicio.id]: true}))} onMouseLeave={() => setExpanded(prev => ({...prev, [exercicio.id]: false}))}>
                <h2 className="text-lg font-bold mb-2">{exercicio.title}</h2>
                {expanded[exercicio.id] && <p className="text-xs break-words">{exercicio.description}</p>}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
