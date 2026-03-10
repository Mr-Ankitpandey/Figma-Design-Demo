import styles from './index.module.css'

type UserCardProps = {
    imageSrc?: string
    title: string
    review: string
    reviewer: string
}

const index = ({ imageSrc = '', title, review, reviewer }: UserCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.avatarWrapper}>
                {imageSrc && <img src={imageSrc} alt={reviewer} className={styles.avatar} />}
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.review}>
                {review} <span className={styles.reviewer}>– {reviewer}</span>
            </p>
        </div>
    )
}

export default index
