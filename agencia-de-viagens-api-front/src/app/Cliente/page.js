'use client'
import { useEffect, useState } from "react";
import ClienteCard from "../Components/ClienteCard";
import styles from '../page.module.css'
import Link from "next/link";

export default function page() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
          try {
            const response = await fetch('https://localhost:7178/api/Clientes');
            
            // Certifique-se de verificar se a resposta foi bem-sucedida (status 200)
            if (!response.ok) {
              throw new Error('Erro ao buscar clientes');
            }
    
            // Converte o corpo da resposta para JSON
            const data = await response.json();
            setClientes(data);
          } catch (error) {
            console.error('Erro ao buscar clientes:', error.message);
          }
        };
    
        fetchClientes();
      }, []);

  return (
    <div  >
    <nav className={styles.navBar}>
        <h1>Agencia de viagens</h1>
        <button>
        <Link href="/">Home</Link>
        </button>
      </nav>
    <div className={styles.backimage}>
      <h1>Lista de Clientes</h1>
      {clientes.map((cliente) => (
        <ClienteCard key={cliente.id} cliente={cliente} />
      ))}
    </div>
    </div>
  )
}
