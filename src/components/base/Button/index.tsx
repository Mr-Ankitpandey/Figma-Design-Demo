import styles from './index.module.css'

type ButtonProps = {
    children : React.ReactNode
}

const index = ({children}:ButtonProps) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}

export default index
