import styles from './index.module.css'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const index = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`${styles.button}${className ? ` ${className}` : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default index
