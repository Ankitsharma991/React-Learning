import Typewriter from "typewriter-effect";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div>
        <Typewriter
          options={{
            strings: ["Hii all!, Welcome here to Welcome Page!!!"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome new user</p>
      </Route>
    </div>
  );
};
export default Welcome;
