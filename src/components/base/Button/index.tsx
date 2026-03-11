import styles from './index.module.css'

type ButtonProps = {
  children: React.ReactNode
  className?: string
}

const index = ({ children, className}: ButtonProps) => {
  return (
    <button
      className={`${styles.button}${className ? ` ${className}` : ''}`}
    
    >
      {children}
    </button>
  )
}

export default index
