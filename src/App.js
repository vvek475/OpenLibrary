import Backdrop from "./components/backdrop/backdrop";
import FooterPrimary from "./components/footerPrimary/footerPrimary";
import FooterSecondary from "./components/footerSecondary/footerSecondary";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Detail from "./pages/detail";
import Home from "./pages/home";
import { SidebarVisibilityContextProvider } from "./store/sidebarVisibilityContext";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import List from "./pages/list";
import Create from "./pages/create";
import Login from "./components/login/login";
import UserContextProvider from "./store/userContent";
import SignUp from "./pages/signUp";
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
            <SidebarVisibilityContextProvider>
              <Header />
              <Backdrop />
              <Sidebar />
            </SidebarVisibilityContextProvider>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/detail" exact component={Detail}/>
              <Route path="/detail/:id" component={Detail}/>
              <Route path="/list"  component={List}/>
              <Route path="/create"  component={Create}/>
              <Route path="/login" component={ Login } />
              <Route path="/signup" component={ SignUp } />
            </Switch>
          </Router>
        <FooterPrimary />
        <FooterSecondary />
      </UserContextProvider>
    </div>
  );
}

export default App;
