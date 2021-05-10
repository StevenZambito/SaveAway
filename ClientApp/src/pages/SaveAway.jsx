import styles from '../styles/SaveAway.module.scss'
import { Header } from '../components/Header'

export function SaveAway() {
  return (
    <>
      <div className={styles.saveAwayPage}>
        <Header />
        <div className={styles.goalBoxContainer}>
          <div className={styles.goalBox}>
            <div className={styles.emoji}>
              <p>🚗</p>
              <p>New Car</p>
            </div>

            <div className={styles.numberInfo}>
              <p>Target Amount: $300000</p>
              <p>Amount Saved: $300</p>
            </div>
            <div className={styles.progressBar}>
              <progress value="30" max="50" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
