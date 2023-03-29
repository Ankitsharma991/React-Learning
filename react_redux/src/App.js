import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = userSelector(state.auth this.state..auth.isAuthenticated)
  return (
    <Fragment>
      <Header />
      
      {!isAuth && Auth}
    {isAuth && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
