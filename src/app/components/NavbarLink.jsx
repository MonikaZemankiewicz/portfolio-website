import Link from "next/link";

const NavbarLink = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#c5ced4] text-xl md:text-lg rounded md:p-0 hover:text-white"
    >
      {text}
    </Link>
  );
};

export default NavbarLink;
