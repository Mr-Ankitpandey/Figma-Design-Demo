import Button from '../../components/base/Button/index'
import styles from './index.module.css'
import sendIcon from '../../assets/icons/sendarrow.png'
const index = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
            <div className={styles.topText}>
                <p className={styles.headline}>Don't Miss Out: Limited-Time Offer!</p>
                <p className={styles.subline}>
                    Enjoy 20% Off Your First Purchase With Code <strong>GLOW20</strong>
                </p>
            </div>
            <div>
            <p className={styles.countdown}>
                Hurry, Offer Ends In 12hrs 30mins 56secs
            </p>
            </div>
            <div className={styles.btndiv}>
            <Button className={styles.shopBtn}>Shop the Sale <span className={styles.arrowIcon}><img src={sendIcon} alt="" /></span></Button>
            </div>
            </div>
        </section>
    )
}

export default index
