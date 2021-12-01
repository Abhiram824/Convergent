import { MenuItems } from "./MenuItems"
import './Navbar.css'
//import logo from "./logo.png";
import logo from "./Greenlit-Logo.png";

export default function Navbar() {
    

    return (
        <nav className="NavbarItems"> 
            {/* <h1 className="navbar-logo">￼</h1> */}
            <img class="navbar-logo" src={logo} alt="logo" />
            <div className="menu-icon"> 
                
            </div>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                   return (
                       <li key={index}> 
                        <a className={item.cName} href={item.url}>
                            {item.title}
                       </a> 
                       </li>

                   ) 
                    
                })}
            </ul>       

        </nav>
        
    )

}