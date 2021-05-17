import styles from '../styles/SaveAway.module.scss'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'

export function SaveAway() {
  return (
    <>
      <div className={styles.saveAwayPage}>
        <Header />
        <div className={styles.searchContainerMain}>
          <section className={styles.searchContainer}>
            <div className={styles.search}>
              <input
                type="text"
                className={styles.searchTerm}
                placeholder="Which goal are you looking for?"
              />
              <button type="submit" className={styles.searchGoButton}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </section>
        </div>
        <div className={styles.searchContainerMain}>
          <section className={styles.dropDownSort}>
            <p>Sort By:</p>
            <select>
              <option value="Alphabetical">Goal: A to Z</option>
              <option value="ByYear">Amount Saved: High to Low</option>
            </select>
          </section>
        </div>

        <div className={styles.goalBoxContainer}>
          <Link to="/checking">
            <div className={styles.addGoalBox}>
              <div className={styles.emoji}>
                <h1>🏦</h1>
                <p>Checking</p>
                <p>$34000</p>
              </div>
            </div>
          </Link>
          <Link to="/creategoal">
            <div className={styles.addGoalBox}>
              <div className={styles.emoji}>
                <p>+</p>
                <p>New Goal</p>
              </div>
            </div>
          </Link>
          <Link to="/goal">
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
            </div>
          </Link>

          <div className={styles.goalBox}>
            <div className={styles.emoji}>
              <p>🎄</p>
              <p>Christmas</p>
            </div>

            <div className={styles.numberInfo}>
              <p className={styles.targetAndAmount}>
                Target Amount: <p>$2000</p>
              </p>
              <p className={styles.targetAndAmount}>
                Amount Saved: <p>$450</p>
              </p>
            </div>
            <div className={styles.progressBar}>
              <progress value="450" max="2000" />
            </div>
          </div>
          <div className={styles.goalBox}>
            <div className={styles.emoji}>
              <p>🏖</p>
              <p>Hawaii Vacation</p>
            </div>

            <div className={styles.numberInfo}>
              <p className={styles.targetAndAmount}>
                Target Amount: <p>$40000</p>
              </p>
              <p className={styles.targetAndAmount}>
                Amount Saved: <p>$20000</p>
              </p>
            </div>
            <div className={styles.progressBar}>
              <progress value="20000" max="40000" />
            </div>
          </div>
          <div className={styles.goalBox}>
            <div className={styles.emoji}>
              <p>🎟</p>
              <p>Concert Tickets</p>
            </div>

            <div className={styles.numberInfo}>
              <p className={styles.targetAndAmount}>
                Target Amount: <p>$1000</p>
              </p>
              <p className={styles.targetAndAmount}>
                Amount Saved: <p>$700</p>
              </p>
            </div>
            <div className={styles.progressBar}>
              <progress value="700" max="1000" />
            </div>
          </div>
          <div className={styles.goalBox}>
            <div className={styles.emoji}>
              <p>🎉</p>
              <p>Birthday Party</p>
            </div>

            <div className={styles.numberInfo}>
              <p className={styles.targetAndAmount}>
                Target Amount: <p>$500</p>
              </p>
              <p className={styles.targetAndAmount}>
                Amount Saved: <p>$400</p>
              </p>
            </div>
            <div className={styles.progressBar}>
              <progress value="400" max="500" />
            </div>
          </div>
          <div className={styles.goalBox}>
            <div className={styles.emoji}>
              <p>💻</p>
              <p>New Laptop</p>
            </div>

            <div className={styles.numberInfo}>
              <p className={styles.targetAndAmount}>
                Target Amount: <p>$2500</p>
              </p>
              <p className={styles.targetAndAmount}>
                Amount Saved: <p>$1000</p>
              </p>
            </div>
            <div className={styles.progressBar}>
              <progress value="1000" max="2500" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
