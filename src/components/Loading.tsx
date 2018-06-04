import *  as React from 'react'
//import styles from '../css/Loading.styl'
const styles = require('../css/Loading.styl')
export default ({ page }) =>
  <div className={styles[page]}>
    <div className={styles.spinner}>
      <div />
    </div>
  </div>
