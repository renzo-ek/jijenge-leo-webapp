import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block mx-5 py-2 pl-3 pr-4 text-gray-600 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-amber-600 dark:hover:text-white font-mono transition-colors duration-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;