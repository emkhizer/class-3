import Link from "next/link";
export default function Navbar() {
  return (
    <header style={{ backgroundColor: "orange", color: "white" }}>
      <nav>
        <ul>
          <li style={{ color: "white" }}>
            <Link
              href="/category/crypto"
              style={{ color: "white", fontSize: "18px" }}
            >
              Crypto
            </Link>
          </li>
          <li style={{ color: "white" }}>
            <Link
              href="/products/products1"
              style={{ color: "white", fontSize: "18px" }}
            >
              Laptop
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
