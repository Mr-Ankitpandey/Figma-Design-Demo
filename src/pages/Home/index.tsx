import Navbar from '../../components/Navbar/index'
import styles from './index.module.css'
import Hero from '../../sections/Hero/index'
import About from '../../sections/About/index'
import BestSeller from '../../sections/BestSeller/index'
import Testimonial from '../../sections/Testimonial/index'
import LimitedOffer from '../../sections/LimitedOffer/index'

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
