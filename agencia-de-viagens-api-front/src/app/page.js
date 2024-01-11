import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <nav className={styles.navBar}>
        <h1>Agencia de viagens</h1>
        <button>
        <Link href="/Cliente">Usuarios cadastrados</Link>
        </button>
      </nav>
      <main className={styles.main}>

     
      <h1>Confira os clientes cadastrados!!!!!!!!!!</h1>
        <div className={styles.description}>

        </div>
      </main>
    </>
  )
}
