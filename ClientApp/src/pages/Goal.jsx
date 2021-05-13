import { Header } from '../components/Header'
import styles from '../styles/Goal.module.scss'

export function Goal() {
  return (
    <>
      <div className={styles.goalPage}>
        <Header />
        <div className={styles.goalBoxContainer}>
          <div className={styles.goalBox}>
            <div className={styles.emoji}>
              <p>🚗</p>
              <p>New Car</p>
            </div>

            <div className={styles.numberInfo}>
              <p className={styles.targetAndAmount}>
                Target Amount: <p>$3000</p>
              </p>
              <p className={styles.targetAndAmount}>
                Amount Saved: <p>$300</p>
              </p>
            </div>
            <div className={styles.progressBar}>
              <progress value="300" max="3000" />
            </div>
            <section className={styles.notesSection}>
              <p>Notes</p>
              <ul>
                <li>Can contribute around $500 monthly towards this goal</li>
                <li>December bonus ($600) going towards goal</li>
                <li>
                  Starting in June, need to decrease monthly goal contributions
                  by $100
                </li>
              </ul>
            </section>
            <section className={styles.goalButtons}>
              <button>Add Money</button>
              <button>Withdraw Money</button>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
