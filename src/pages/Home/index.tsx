import Navbar from '../../components/Navbar/index'
import styles from './index.module.css'
import Hero from './components/Hero/index'
import About from './components/About/index'
import BestSeller from './components/BestSeller/index'
import Testimonial from './components/Testimonial/index'
import LimitedOffer from './components/LimitedOffer/index'

const index = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <About />
      <BestSeller />
      <Testimonial />
      <LimitedOffer />
    </div>
  )
}

export default index
