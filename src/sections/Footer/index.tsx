import Button from '../../components/base/Button/index'
import styles from './index.module.css'
const index = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
      <div className={styles.upper}>
        <div>
            <p className={styles.text}>Be the first to get notification about our upcoming event</p>
        </div>
        <div className={styles.emailBox}>
            <input className={styles.email} type="email" placeholder="Email" />
            <Button className={styles.btn}>Submit</Button>
        </div>
      </div>
      <hr className={styles.middle}/>
      <div className={styles.lower}>
        <p>© 2024, Xtragleam Skincare. All Right Reserved</p>
      </div>
      </div>
    </div>
  )
}

export default index
