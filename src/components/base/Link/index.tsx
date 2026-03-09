type LinkProps = {
    path : string;
    children : React.ReactNode

}

const index = ({path, children}:LinkProps) => {
  return (
    <a href={path}>{children}</a>
  )
}

export default index
