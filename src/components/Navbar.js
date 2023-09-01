import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems.js";
class Navbar extends Component{
    state = {clicked:false};
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    //img height="65" style="height: 65px;" alt="Codeforces" title="Codeforces" src="//codeforces.org/s/11054/images/codeforces-sponsored-by-ton.png"></>
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><img height="65"  alt="Codeforces" title="Codeforces" src="//codeforces.org/s/11054/images/codeforces-sponsored-by-ton.png"/></h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </div>
                <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
                    {MenuItems.map((item,index)=>{
                        return(
                        <li key={index}>
                        <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                    </li>)
                    })}
                    
                </ul>

            </nav>
        )
    }
}
export default Navbar;