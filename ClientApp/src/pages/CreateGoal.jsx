import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import styles from '../styles/CreateGoal.module.scss'

export function CreateGoal() {
  return (
    <>
      <div className={styles.createGoalPage}>
        <Header />
        <nav>
          <Link to="/">
            <i>Home</i>
          </Link>
        </nav>
        <main className={styles.createGoalContainer}>
          <section className={styles.createGoal}>
            <h1>Create a New Goal</h1>
            <form>
              <div>
                <input
                  name="saving"
                  id="saving"
                  placeholder="What are you saving for?"
                ></input>
              </div>
              <div className={styles.emojis}>
                <label htmlFor="savingOptions"></label>
                <select name="savingOptions" id="savingOptions">
                  <option value="money">💵</option>
                  <option value="bills">💳</option>
                  <option value="home">🏠</option>
                  <option value="car">🚗</option>
                  <option value="vacation">🏖</option>
                  <option value="travel">✈️</option>
                  <option value="tickets">🎟</option>
                  <option value="clothes">👕</option>
                  <option value="food">🥪</option>
                  <option value="electronics">💻</option>
                  <option value="party">🎉</option>
                  <option value="christmas">🎄</option>
                </select>
              </div>
              <div>
                <input
                  name="targetAmount"
                  id="targetAmount"
                  placeholder="Target Amount"
                ></input>
              </div>

              <div>
                <input
                  name="savedAmount"
                  id="savedAmount"
                  placeholder="Saved Amount"
                ></input>
              </div>
              <div className={styles.createButton}>
                <button type="submit">Create Goal</button>
              </div>
            </form>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
