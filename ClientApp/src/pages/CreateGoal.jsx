import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../styles/CreateGoal.module.scss'

export function CreateGoal() {
  return (
    <>
      <div className={styles.createGoalPage}>
        <Header />
        <nav>
          <a href="#/">Home</a>
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
                <label htmlFor="goodies"></label>
                <select name="goodies" id="goodies">
                  <option value="cookie">💵</option>
                  <option value="brocolli">💳</option>
                  <option value="hotdog">🏠</option>
                  <option value="donut">🚗</option>
                  <option value="cookie">🏖</option>
                  <option value="cookie">✈️</option>
                  <option value="hamburger">🎟</option>
                  <option value="bacon">👕</option>
                  <option value="brocolli">🥪</option>
                  <option value="brocolli">💻</option>
                  <option value="cookie">🎉</option>
                  <option value="cookie">🎄</option>
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
