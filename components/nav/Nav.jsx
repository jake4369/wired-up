// NextJS
import Image from "next/image";

const Nav = () => {
  return (
    <nav>
      {/* Mobile Nav */}
      <div className="mobile-nav">
        <Image
          src="/assets/images/logo.svg"
          width={40}
          height={40}
          alt="Wired Up logo"
        />
      </div>

      {/* Mobile Nav - Sliding Menu */}

      {/* Desktop Nav */}
    </nav>
  );
};

export default Nav;
