import *  as React from 'react'
//import styles from '../css/Foo.styl'
const styles = require('../css/Foo.styl')
export default () =>
  <div className={styles.container}>
    <span>Foo -- loaded</span>
  </div>
