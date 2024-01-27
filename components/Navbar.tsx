import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 sticky top-0 bg-white shadow-md">
      <Link href="/">
        <Image
          src="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/logo-dark.png"
          alt="logo"
          width={150}
          height={29}
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-60 first:bg-pink-10 first:text-white flexCenter cursor-pointer transition-all hover:bg-pink-10 px-2 max-h-10 rounded-lg hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <div className="lg:flexCenter hidden">
          <button
            type="button"
            title=""
            className="border-2 border-pink-10 border-dashed border-spacing-1 rounded-full p-1"
          >
            <div className="bg-pink-10  p-2 rounded-full ">
              <Image
                src="search.svg"
                alt="search icon"
                height={16}
                width={16}
              />
            </div>
          </button>
        </div>
      </ul>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
