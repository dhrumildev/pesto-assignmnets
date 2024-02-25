import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact us</Link>
      </nav>
    </header>
  );
};

export default Header;
