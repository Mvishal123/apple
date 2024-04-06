import { appleImg, bagImg, searchImg } from "../utils/index.js";
import { NAV_LINKS } from "../constants/index.js";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center sm:px-10 px-5 py-5">
      <nav className="w-full screen-max-width flex flex-1 justify-between items-center">
        <a href="/">
          <img src={appleImg} alt="apples" height={18} width={18} />
        </a>
        <div className="hidden sm:flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <a
              className="text-gray hover:text-slate-200 cursor-pointer transition-all"
              href="/"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-baseline gap-6">
          <img src={searchImg} alt="search-icon" height={18} width={18} />
          <img src={bagImg} alt="cart-icon" height={18} width={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
