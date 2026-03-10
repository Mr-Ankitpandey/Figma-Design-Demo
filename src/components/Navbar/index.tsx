import Button from '../base/Button/index'
import SearchIcon from '../../assets/icons/search-normal.png'
import BagIcon from '../../assets/icons/bag-2.png'
import HeartIcon from '../../assets/icons/heart.png'
import ProfileIcon from '../../assets/icons/profile.png'
import Link from '../base/Link/index'
import Logo from '../../assets/icons/Group 37.png'

import styles from './index.module.css'

const index = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.common}>
        <div>
          <img src={Logo} alt='Logo' />
        </div>
        <div className={styles.navLinks}>
          <Link path='/home'>Home</Link>
          <Link path='/shop'>Shop</Link>
          <Link path='/spa'>Spa</Link>
          <Link path='/about'>About</Link>
          <Link path='/contact'>Contact</Link>
        </div>
        <div className={styles.icons}>
          <Button>
            <img src={BagIcon} alt="BagIcon" />
          </Button>
          <Button>
            <img src={HeartIcon} alt="HeartIcon" />
          </Button>
          <Button>
            <img src={ProfileIcon} alt="ProfileIcon" />
          </Button>
        </div>
      </div>
      <div className={styles.common}>
        <div className={styles.categories}>
          <Button>Women</Button>
          <Button>Men</Button>
          <Button>Kiddies</Button>
          <Button>New</Button>
          <Button>Popular</Button>
        </div>
        <div className={styles.icons}>
          <Button>
            <img src={SearchIcon} alt='search-logo' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default index
