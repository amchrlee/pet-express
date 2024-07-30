import { Link } from "react-router-dom"

export function Nav() {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/products">
        <button>Products</button>
      </Link>
      <Link to="/contact-us">
        <button>Contact Us</button>
      </Link>
    </>
  )
}