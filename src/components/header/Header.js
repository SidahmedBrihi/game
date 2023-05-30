import "./Header.css"
import logo from "../../assets/images/logo.png"
import {List }  from "../index"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark text-white py-4">
        <div className="container">
            <a href="#" className="navbar-brand">
              <img src={logo} alt=""></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <List><Link id="1" to="/" className="nav-link active color"  >Home</Link></List>
                    <List><Link id="2" to="#" className="nav-link " >Browse</Link></List>
                    <List><Link id="5" to="#" className="nav-link " >Details</Link></List>
                    <List><Link id="4" to="prof" className="nav-link " >Profile</Link></List>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header