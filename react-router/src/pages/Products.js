import Typewriter from "typewriter-effect";
const Products = () => {
  return (
    <div>
      <div>
        <Typewriter
          options={{
            strings: ["Hii all!, Welcome here to Products page!!!"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <h1>The Products Page</h1>
    </div>
  );
};
export default Products;
