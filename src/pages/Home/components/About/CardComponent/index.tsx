import styles from './index.module.css'

type CardProps = {
  h3: string;
  p: string;
}

const index = ({ h3, p }: CardProps) => {
  return (
    <div className={styles.card}>
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  )
}

export default index
