type LinkProps = {
  path: string
  children: React.ReactNode
  className?: string
}

const index = ({ path, children, className }: LinkProps) => {
  return (
    <a href={path} className={className}>{children}</a>
  )
}

export default index
