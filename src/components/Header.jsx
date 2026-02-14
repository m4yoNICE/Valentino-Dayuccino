import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex border-b border-pink-200 py-4 px-6 sm:px-12 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 min-h-[70px] tracking-widest relative z-50 shadow-md">
      <div className="flex flex-wrap items-center gap-6 max-w-screen-xl mx-auto w-full">
        <Link to="/" className="max-sm:hidden">
          <span className="text-3xl font-extrabold text-pink-600 tracking-wider drop-shadow-md animate-pulse">
            💕 Valentine
          </span>
        </Link>
        <Link to="/" className="hidden max-sm:block">
          <span className="text-3xl animate-pulse">💕</span>
        </Link>

        <div
          id="collapseMenu"
          className={`${
            isOpen ? "block" : "max-lg:hidden"
          } lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed top-3 right-5 z-[100] rounded-full bg-white w-10 h-10 flex items-center justify-center border border-pink-300 cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200"
          >
            {/* close icon remains the same */}
          </button>

          <ul className="lg:flex lg:ml-16 lg:gap-x-6 max-lg:space-y-4 max-lg:fixed max-lg:bg-white/90 max-lg:backdrop-blur-md max-lg:w-1/2 max-lg:min-w-[320px] max-lg:top-0 max-lg:left-0 max-lg:p-8 max-lg:h-full max-lg:shadow-xl max-lg:overflow-auto z-50 rounded-r-2xl">
            <li className="mb-6 hidden max-lg:block">
              <Link to="/">
                <span className="text-3xl font-extrabold text-pink-600 drop-shadow-lg animate-pulse">
                  💕 Valentine
                </span>
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:border-pink-200 max-lg:py-3 px-4">
              <Link
                to="/message"
                className="font-semibold text-pink-600 lg:hover:text-pink-700 block text-[16px] transition-colors duration-200 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Message
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:border-pink-200 max-lg:py-3 px-4">
              <Link
                to="/notes"
                className="font-semibold text-pink-600 lg:hover:text-pink-700 block text-[16px] transition-colors duration-200 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Notes
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden cursor-pointer animate-bounce"
          >
            {/* hamburger icon remains */}
          </button>
        </div>
      </div>
    </header>
  );
};
