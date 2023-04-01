import { Link } from "react-router-dom";

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
      <ul>
        <li>
          <Link to="/products/book">A Book</Link>
        </li>
        <li>
          <Link to="/products/carpet">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/course">An Online Course</Link>
        </li>
      </ul>
    </div>
  );
};
export default Products;
