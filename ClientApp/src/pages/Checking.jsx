import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../styles/Checking.module.scss'

export function Checking() {
  return (
    <>
      <div className={styles.createGoalPage}>
        <Header />
        <div>
          <nav>
            <a href="#/">Home</a>
          </nav>
          <main className={styles.createGoalContainer}>
            <section className={styles.createGoal}>
              <h1>Checking</h1>
              <h2>$300000</h2>
              <form>
                <div>
                  <input
                    name="saving"
                    id="saving"
                    placeholder="Enter Amount"
                  ></input>
                </div>

                {/* <div id={styles.wrap}>
                <ul id={styles.display}>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <li>+</li>
                  <div className={styles.clear}></div>
                </ul>
                <ul id={styles.numpad}>
                  <div>
                    <li>1</li>
                    <li>4</li>
                    <li>7</li>
                    <li>C</li>
                  </div>
                  <div>
                    <li>2</li>
                    <li>5</li>
                    <li>8</li>
                    <li>0</li>
                  </div>
                  <div>
                    <li>3</li>
                    <li>6</li>
                    <li>9</li>
                    <li>E</li>
                  </div>
                </ul>
              </div> */}
                <div className={styles.createButton}>
                  <button type="submit">Add Money</button>
                </div>
              </form>
            </section>
          </main>
        </div>

        <Footer />
      </div>
    </>
  )
}
