import Button from '../../../../../components/base/Button/index'
import HeartIcon from '../../../../../assets/icons/heart.svg'
import BagIcon from '../../../../../assets/icons/bag-2.png'
import styles from './index.module.css'

type ProductCardProps = {
    badge: string
    name: string
    originalPrice: string
    salePrice: string
    imageSrc?: string
}

const index = ({ badge, name, originalPrice, salePrice, imageSrc = '' }: ProductCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageArea}>
                <div className={styles.imageTopRow}>
                    <div className={styles.badgeRating}>
                        <span className={styles.badge}>{badge}</span>
                        <span className={styles.stars}>★★★★★</span>
                    </div>
                    <Button className={styles.wishlistBtn}>
                        <img src={HeartIcon} alt="wishlist" className={styles.heartIcon} />
                    </Button>
                </div>
                <div className={styles.productImageWrapper}>
                    {imageSrc && <img src={imageSrc} alt={name} className={styles.productImage} />}
                </div>
            </div>
            <div className={styles.infoArea}>
                <div className={styles.namePrice}>
                    <p className={styles.productName}>{name}</p>
                    <div className={styles.pricing}>
                        <span className={styles.originalPrice}>{originalPrice}</span>
                        <span className={styles.salePrice}>{salePrice}</span>
                    </div>
                </div>
                <Button className={styles.addToCartBtn}>
                    Add to Cart
                    <img src={BagIcon} alt="cart" className={styles.bagIcon} />
                </Button>
            </div>
        </div>
    )
}

export default index
