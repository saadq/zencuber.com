import React from 'react'
import styles from './stats.styl'

function Stats() {
  return (
    <div className="container is-centered has-text-centered">
      <div className="is-10 is-offset-1 column">
        <table className="table">
          <thead>
            <tr>
              <th className={styles.th}>Team</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>32.45</td>
              <td>32.45</td>
            </tr>
            <tr>
              <td>32.45</td>
              <td>32.45</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Stats
