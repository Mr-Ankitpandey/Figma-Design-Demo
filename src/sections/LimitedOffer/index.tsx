import Button from '../../components/base/Button/index'
import styles from './index.module.css'

const index = () => {
    return (
        <section className={styles.section}>
            <div className={styles.topText}>
                <p className={styles.headline}>Don't Miss Out: Limited-Time Offer!</p>
                <p className={styles.subline}>
                    Enjoy 20% Off Your First Purchase With Code <strong>GLOW20</strong>
                </p>
            </div>
            <p className={styles.countdown}>
                Hurry, Offer Ends In 12hrs 30mins 56secs
            </p>
            <Button className={styles.shopBtn}>Shop the Sale →</Button>
        </section>
    )
}

export default index
