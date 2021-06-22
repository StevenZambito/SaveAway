import styles from '../styles/SaveAway.module.scss'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export function SaveAway() {
  const [goals, setGoals] = useState([])
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    const getGoals = async () => {
      let url = '/api/Goals'

      const response = await axios.get(url)
      let sortedGoals = response.data

      setGoals(sortedGoals)
    }

    getGoals()
  }, [])

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

          {goals.map((goal) => (
            <Link to="/goal">
              <div className={styles.goalBox}>
                <div className={styles.emoji}>
                  <p>🚗</p>
                  <p>{goal.name}</p>
                </div>

                <div className={styles.numberInfo}>
                  <p className={styles.targetAndAmount}>
                    Target Amount: <p>${goal.targetAmount}</p>
                  </p>
                  <p className={styles.targetAndAmount}>
                    Amount Saved: <p>${goal.savedAmount}</p>
                  </p>
                </div>
                <div className={styles.progressBar}>
                  <progress value="300" max="3000" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </>
  )
}
