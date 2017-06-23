import React from 'react'
import styles from './stats.styl'

function Stats() {
  return (
    <div className={`columns is-gapless ${styles.row}`}>
      <div className="column">
        <table className={`table ${styles.table}`}>
          <thead>
            <tr style={{ textAlign: 'center' }}>
              <th style={{ textAlign: 'center' }}>
                Ao12:<strong> 32.5</strong>
              </th>
              <th style={{ textAlign: 'center' }}>
                Ao5: <strong>32.5</strong>
              </th>
              <th style={{ textAlign: 'center' }}>
                Ao3: <strong>32.5</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'center' }}>32.5</td>
              <td style={{ textAlign: 'center' }}>32.5</td>
              <td style={{ textAlign: 'center' }}>32.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Stats
