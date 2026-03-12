import ProductCard from './ProductCard/index'
import Link from '../../../../components/base/Link/index'
import styles from './index.module.css'
import { PRODUCTS } from '../../../../constants/PRODUCTS'



const index = () => {
    return (
        <section className={styles.section} id='shop'>
            <div className={styles.header}>
                <h2 className={styles.title}>Discover Our Best-Sellers</h2>
                <Link path="/shop" className={styles.viewAll}>View all</Link>
            </div>
            <div className={styles.cardGrid}>
                {PRODUCTS.map((product) => (
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
