import Navbar from '../../components/Navbar/index'
import styles from './index.module.css'
import Hero from '../../sections/Hero/index'
import About from '../../sections/About/index'
const index = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default index
