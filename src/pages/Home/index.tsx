import Navbar from '../../components/Navbar/index'
import styles from './index.module.css'
import Hero from '../../sections/Hero/index'
const index = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default index
