import { useContext } from "react";
import {
  Link,
} from "react-router-dom";
import SidebarVisibilityContext from "../../store/sidebarVisibilityContext";
import { userContext } from "../../store/userContent";

function Sidebar() {
  const [sidebarVisibility,, toggleSidebarVisibility] = useContext(SidebarVisibilityContext);
  const {user}=useContext(userContext)

  return (
    <>
      <div id="sidebar" className={`sidebar ${sidebarVisibility ? 'active' : ''}`}>
        <p onClick={toggleSidebarVisibility} className="hamburger hamburger--light hamburger--cross sidebar__toggle-sidebar">
          <span></span>
          <span></span>
          <span></span>
        </p>

        <ul>
        <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/detail">Book</Link>
            </li>
            {user&&
            <li>
              <Link to="/create">Create</Link>
            </li>
            }
        </ul>
      </div>
    </>
  )
}

export default Sidebar;