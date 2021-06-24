import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import styles from '../styles/CreateGoal.module.scss'
import axios from 'axios'

export function CreateGoal() {
  const [newGoal, setNewGoal] = useState({
    name: '',
    targetAmount: 0,
    savedAmount: 0,
  })
  const [errorMessage, setErrorMessage] = useState()

  const history = useHistory()

  const handleStringFieldChange = (event) => {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedGoal = { ...newGoal, [fieldName]: value }
    setNewGoal(updatedGoal)
  }

  const handleIntegerFieldChange = (event) => {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedGoal = { ...newGoal, [fieldName]: value }
    setNewGoal(updatedGoal)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await axios.post('/api/Goals', newGoal)
      history.push('/')
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage('Not authorized')
      } else if (error.response.status === 400) {
        const errorString = Object.values(error.response.data.errors).join(' ')
        console.log(errorString)
        setErrorMessage(errorString.toLowerCase())
      }
    }
  }

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
            {errorMessage ? (
              <p className={styles.errorMessage}>{errorMessage}</p>
            ) : null}
            <form>
              <div>
                <input
                  name="name"
                  id="name"
                  placeholder="What are you saving for?"
                  value={newGoal.name}
                  onChange={handleStringFieldChange}
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
                  value={newGoal.targetAmount}
                  onChange={handleIntegerFieldChange}
                ></input>
              </div>

              <div>
                <input
                  name="savedAmount"
                  id="savedAmount"
                  placeholder="Saved Amount"
                  value={newGoal.savedAmount}
                  onChange={handleIntegerFieldChange}
                ></input>
              </div>
              <div className={styles.createButton}>
                <button onClick={handleSubmit} type="submit">
                  Create Goal
                </button>
              </div>
            </form>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
