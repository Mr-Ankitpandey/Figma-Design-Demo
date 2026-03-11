import UserCard from './UserCard/index'
import styles from './index.module.css'
import User1 from '../../assets/images/person1.png'
import User2 from '../../assets/images/person2.jpg'
import User3 from '../../assets/images/person3.jpg'


const testimonials = [
    {
        imageSrc: User1,
        title: '2 weeks of using Glow Serum',
        review: 'After 2 weeks of using Xtragleam, my skin has never felt smoother. Thank you!"',
        reviewer: 'Lisa, Verified Buyer',
    },
    {
        imageSrc: User2,
        title: 'Game Changer',
        review: 'The Glow Serum is a game-changer. My dark spots faded within weeks, and my skin feels so hydrated!"',
        reviewer: 'Emma L., Verified Buyer',
    },
    {
        imageSrc: User3,
        title: 'More Confident',
        review: 'I\'ve struggled with acne for years, but Xtragleam changed everything! My skin is glowing, and I\'ve never felt more confident."',
        reviewer: 'Sarah A., Verified Buyer',
    },
]

const index = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Testimonial</h2>
            <div className={styles.cardGrid}>
                {testimonials.map((t) => (
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
