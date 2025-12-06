import SearchBar from "@components/ui/SearchBar";
import logo from "@assets/icons/logo-header.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white shadow-md max-w-7xl w-full h-24 px-6 mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <a href="#">
          <img src={logo} alt="logo beezy" className="h-12 object-contain" />
        </a>
      </div>

      <nav className="flex justify-between gap-6 flex-1 ml-6">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-3/4">
            <SearchBar />
          </div>
        </div>

        {/* Menu */}
        <ul className="flex items-center text-(--color-fcfcf8) font-regular gap-6">
          <li className="">
            <a
              href="#"
              className="group flex flex-col items-center px-2 py-2 rounded-2xl bg-(--color-282626) hover:bg-(--color-ffdd84) transition-colors duration-100"
            >
              {/* Иконка */}
              <div className="w-6 h-6">
                <svg
                  className="w-full h-full stroke-current text-white group-hover:text-black transition-colors duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </div>

              {/* Текст */}
              <p className="text-(--color-fcfcf8) group-hover:text-(--color-282626) font-regular text-sm transition-colors duration-200">
                Каталог
              </p>
            </a>
          </li>
          <li className="">
            <NavLink
              to={"/cart"}
              className="group flex flex-col items-center px-2 py-2 rounded-2xl bg-(--color-282626) hover:bg-(--color-ffdd84) transition-colors duration-100"
            >
              {/* Иконка */}
              <div className="w-6 h-6">
                <svg
                  className="w-full h-full stroke-current text-white group-hover:text-black transition-colors duration-200"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <line x1="7" y1="16" x2="17" y2="16"></line>
                </svg>
              </div>

              {/* Текст */}
              <p className="text-(--color-fcfcf8) group-hover:text-(--color-282626) font-regular text-sm transition-colors duration-200">
                Заказы
              </p>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to={"/cart"}
              className="group flex flex-col items-center px-2 py-2 rounded-2xl bg-(--color-282626) hover:bg-(--color-ffdd84) transition-colors duration-100"
            >
              {/* Иконка */}
              <div className="w-6 h-6">
                <svg
                  className="w-full h-full stroke-current text-white group-hover:text-black transition-colors duration-200"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>

              {/* Текст */}
              <p className="text-(--color-fcfcf8) group-hover:text-(--color-282626) font-regular text-sm transition-colors duration-200">
                Корзина
              </p>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to={"/login"}
              className="group flex flex-col items-center px-2 py-2 rounded-2xl bg-(--color-282626) hover:bg-(--color-ffdd84) transition-colors duration-100 w-[60px] h-[60px]"
            >
              {/* Иконка */}
              <div className="w-full h-full">
                <svg
                  className="w-full h-full stroke-current text-white group-hover:text-black transition-colors duration-200"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="8" r="4"></circle>
                  <path d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6"></path>
                </svg>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
