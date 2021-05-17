import styles from '../styles/Header.module.scss'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <h1>Save Away</h1>
        </Link>

        <button>Log Out</button>
      </div>
    </header>
  )
}
