import "./List.css"

const List = (props) => {
  return (
    <li className="nav-item" onClick={(a)=> {
      document.querySelectorAll("li a").forEach((one)=> {
          one.classList.remove("active")
      })
      a.target.classList.add("active")
    }}> {props.children}</li>
  )
}

const SpecList = (props) => {
    return (
        <li className="nav-item dropdown" onClick={(a)=> {
          document.querySelectorAll("li a").forEach((one)=> {
              one.classList.remove("active")
          })
          a.target.classList.add("active")
        }}>
        {props.children}
        <ul className="dropdown-menu">
            <li>{props.one}</li>
            <li>{props.two}</li>
        </ul>
    </li>
    )
  }



export default List ;
export {SpecList}

