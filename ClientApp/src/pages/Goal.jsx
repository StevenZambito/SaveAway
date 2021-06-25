import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState, useEffect, useParams } from 'react'
import styles from '../styles/Goal.module.scss'
import axios from 'axios'

export function Goal() {
  const params = useParams()
  const id = params.id

  const [goal, setGoal] = useState({
    name: '',
    emoji: '',
    targetAmount: 0,
    savedAmount: 0,
  })

  useEffect(() => {
    const getGoal = async () => {
      const url = `/api/Goals/${id}`

      const response = await axios.get(url)
      let sortedGoals = response.data

      setGoal(sortedGoals)
    }

    getGoal()
  }, [id])

  return (
    <>
      <div className={styles.goalPage}>
        <Header />
        <nav>
          <Link to="/">
            <i>Home</i>
          </Link>
        </nav>

        <div className={styles.goalBoxContainer}>
          <div className={styles.goalBox}>
            <div className={styles.theX}>
              <p>X</p>
            </div>
            <div className={styles.emoji}>
              <p>{goal.emoji}</p>
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

            {/* <div className={styles.confirm}>
              <form>
                <div>
                  <input
                    name="saving"
                    id="saving"
                    placeholder="Enter Amount"
                  ></input>
                  <button type="submit">Confirm</button>
                </div>
              </form>
            </div> */}

            <section className={styles.goalButtons}>
              <button>Add Money</button>
              <button>Withdraw Money</button>
              <button>Edit Target</button>
            </section>

            <section className={styles.notesSection}>
              <p>Transaction History</p>
              <ul>
                <li>
                  $60 was added to the savings goal,"New Car" on 5/14/2021{' '}
                </li>
                <li>
                  $10 was withdrawn from the savings goal, "New Car" and put
                  into your checking account on 5/15/2021
                </li>
                <li>You edited the target amount to $3000 on 5/15/2021</li>
              </ul>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
