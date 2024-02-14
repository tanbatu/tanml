import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={140}
            height={44}
            alt="My avatar"
          />
        </Link>
      </h1>
      <div className={styles.list}>
        <Link href="/">
          <p>MAIN</p>
        </Link>
        <Link href="/">
          <p>WORKS</p>
        </Link>
        <Link href="/zouryou">
          <p>ADDON</p>
        </Link>
        <Link href="/">
          <p>CONTACT</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
