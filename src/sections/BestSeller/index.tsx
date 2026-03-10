import ProductCard from './ProductCard/index'
import Link from '../../components/base/Link/index'
import styles from './index.module.css'

const products = [
    {
        badge: 'Best Seller',
        name: 'X5 Extreme Body Lotion',
        originalPrice: '₦35,000',
        salePrice: '₦30,000',
        imageSrc: '',
    },
    {
        badge: 'Refined',
        name: 'AHA Face Toner',
        originalPrice: '₦75,000',
        salePrice: '₦60,000',
        imageSrc: '',
    },
    {
        badge: 'Top',
        name: 'Anti Stretchmark Oil',
        originalPrice: '₦75,000',
        salePrice: '₦70,000',
        imageSrc: '',
    },
]

const index = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Discover Our Best-Sellers</h2>
                <Link path="/shop" className={styles.viewAll}>View all</Link>
            </div>
            <div className={styles.cardGrid}>
                {products.map((product) => (
                    <ProductCard
                        key={product.name}
                        badge={product.badge}
                        name={product.name}
                        originalPrice={product.originalPrice}
                        salePrice={product.salePrice}
                        imageSrc={product.imageSrc}
                    />
                ))}
            </div>
        </section>
    )
}

export default index
