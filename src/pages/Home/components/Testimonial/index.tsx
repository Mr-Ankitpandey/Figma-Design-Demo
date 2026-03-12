import { USERS_DETAILS } from '../../../../constants/USERS'
import UserCard from './UserCard/index'
import styles from './index.module.css'


const index = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Testimonial</h2>
            <div className={styles.cardGrid}>
                {USERS_DETAILS?.map((t) => (
                    <UserCard
                        key={t.reviewer}
                        imageSrc={t.imageSrc}
                        title={t.title}
                        review={t.review}
                        reviewer={t.reviewer}
                    />
                ))}
            </div>
        </section>
    )
}

export default index
