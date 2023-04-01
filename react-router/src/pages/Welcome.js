import Typewriter from "typewriter-effect";

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
    </div>
  );
};
export default Welcome;
