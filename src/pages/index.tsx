import React from 'react'
import Head from 'next/head'

import styles from './index.module.scss'

enum Quadrent {
  AUTH_LEFT = 'AuthLeft',
  AUTH_RIGHT = 'AuthRight',
  LIB_LEFT = 'LibLeft',
  LIB_RIGHT = 'LibRight',
}

export const Home = (): JSX.Element => {
  const [equal, setEqual] = React.useState<boolean>(false)
  const [enforce, setEnforce] = React.useState<boolean>(false)
  const [quadrant, setQuadrant] = React.useState<Quadrent | null>(null)

  const equalYes = equal ? 'is-selected is-success' : ''
  const equalNo = !equal ? 'is-selected is-danger' : ''
  const enforceYes = enforce ? 'is-selected is-success' : ''
  const enforceNo = !enforce ? 'is-selected is-danger' : ''

  const determineQuadrant = () => {
    if (equal && enforce) {
      setQuadrant(Quadrent.AUTH_LEFT)
    } else if (!equal && enforce) {
      setQuadrant(Quadrent.AUTH_RIGHT)
    } else if (equal && !enforce) {
      setQuadrant(Quadrent.LIB_LEFT)
    } else {
      setQuadrant(Quadrent.LIB_RIGHT)
    }
  }

  return (
    <div className={styles.container}>
      {quadrant ? (
        <section className="section">
          <div className="contatiner has-text-centered">
            <p className="title is-1"> You are a {quadrant.toString()}</p>
          </div>
        </section>
      ) : (
        <div className={styles.container}>
          <Head>
            <title>Political Compass Test For Dummies</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <section className="section">
            <div className="contatiner has-text-centered">
              <p className="title is-1">Political Compass Test For Dummies</p>
              <p className="subtitle is-3">
                Find out which quadrant you belong in
              </p>
            </div>
          </section>

          <section className="section">
            <div className="container has-text-centered">
              <div className="card mb-2">
                <header className="card-header ">
                  <p className="card-header-title is-centered">
                    Do you believe that everyone is equal?
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    <div className="buttons has-addons is-centered">
                      <button
                        onClick={() => setEqual(false)}
                        className={`button ${equalNo}`}
                      >
                        No
                      </button>
                      <button
                        onClick={() => setEqual(true)}
                        className={`button ${equalYes}`}
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-2">
                <header className="card-header">
                  <p className="card-header-title is-centered">
                    Do you believe that the government should enforce it?
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    <div className="buttons has-addons is-centered">
                      <button
                        onClick={() => setEnforce(false)}
                        className={`button ${enforceNo}`}
                      >
                        No
                      </button>
                      <button
                        onClick={() => setEnforce(true)}
                        className={`button ${enforceYes}`}
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={determineQuadrant}
                className="button is-fullwidth"
              >
                Go
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default Home
