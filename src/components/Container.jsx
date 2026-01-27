

const Container = ({children, className}) => {
  return (
    <div className={`${className} w-332 mx-auto`}>{children}</div>
  )
}

export default Container