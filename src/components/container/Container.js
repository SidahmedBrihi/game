import "./Container.css"



const Container = (props) => {
  return (
    <div className="main">{props.children}</div>
  )
}

export default Container