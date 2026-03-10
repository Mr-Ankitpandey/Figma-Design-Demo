import Button from "../../components/base/Button/index";
import AboutImage from '../../assets/images/R.png'
import styles from './index.module.css'
import Card from './CardComponent/index'
import about2 from '../../assets/images/Pic About 2.png'
const index = () => {
  return (
    <div className={styles.aboutContainer}>
        {/* left */}
      <div className={styles.left}>
        <div className={styles.left_upper}>
            <div className={styles.aboutBtn}>
                <Button>About Us</Button>
            </div>
            <div>
                <h1>How much is your property worth now?</h1>
            </div>
            <div>
                <p>
                    We have built our reputation as true local area experts. We have gained more knowledge about buyer interests, our neighborhood and the market than any other brand because we live locally and work for local people.
                </p>
            </div>
        </div>
        <div className={styles.left_lower}>
            <Card h3={'178K+'} p={'Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.'}></Card>
            <Card h3={'362'} p={'Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.'}></Card>
            <Card h3={'Title'} p={'Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.'}></Card>
            <div>
                <img id={styles.house} src={about2} alt="about2" />
            </div>
        </div>
      </div>
      {/* right */}
      <div className={styles.right}>
        <div className={styles.aboutImage}>
            <img src={AboutImage} alt="aboutImage" />
        </div>
      </div>
    </div>
  )
}

export default index
