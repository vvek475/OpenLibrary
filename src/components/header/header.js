import { useContext } from "react";
import { Link,useLocation } from "react-router-dom";
import SidebarVisibilityContext from "../../store/sidebarVisibilityContext";
import { userContext } from "../../store/userContent";

function Header() {
  const [,, toggleSidebarVisibility] = useContext(SidebarVisibilityContext);
  const {user,setuser}=useContext(userContext)
  function logouthandler(){
    setuser(null)
  }
  const location=useLocation()
  return (
    <>
      <header className="site-header" id="site-header">
        <div className="container">
          <p onClick={toggleSidebarVisibility} className="hamburger hamburger--light site-header__toggle-sidebar">
            <span></span>
            <span></span>
            <span></span>
          </p>
          
          <a href="www.google.com" className="site-header__logo">
            <Link to="/" className="site-header__logo-image" role="img" alt="Open library logo" src="https://i.ibb.co/7g0zZ94/open-library-logo.png" />
          </a>
          {user &&
          <>
          <p class="helloUser">{`hi ${user.user.username}`}</p>
          <p onClick={logouthandler} className="btn btn--hollow site-header__signin">Logout</p> 
          </>
          }
          
          {!user &&
          <>
          <Link to={{pathname:'/login', state:{prevPath: location.pathname}}} className="btn btn--hollow site-header__signin">Log in</Link>
          <Link to="/signup" className="btn btn--hollow ">Sign up</Link>
          </>
          }
        </div>
      </header>
    </>
  )
}

export default Header;