import *  as React from 'react'
//import styles from '../css/NotFound.styl'
const styles = require('../css/NotFound.styl')
export default ({ error }) =>
  <div className={styles.container}>
    <span>404 - PAGE NOT FOUND</span>
  </div>
