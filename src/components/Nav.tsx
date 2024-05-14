import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img
          src="/src/assets/logo.png"
          className="w-100 h-10 mr-2"
          alt="Logo"
        />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
      >
        <div className="text-sm lg:flex-grow mt-5 md:mt-0">
          <div className="dropdown">
            <button className="dropbtn text-lg">Course Type</button>
            <div className="dropdown-content">
              <a href="index.html#courses">individual</a>
              <a href="index.html#courses"> In a group of 2 to 4 people</a>
              <a href="index.html#courses">Preparing for the exam</a>
              <a href="index.html#courses">High school</a>
              <a href="index.html#courses">Native Saturday</a>
            </div>
          </div>
          <a
            href="#offer-for-companies"
            className="block mt-3 lg:inline-block lg:mt-0 text-white mr-4 text-lg"
          >
            Offer for companies
          </a>
          <a
            href="#pricing"
            className="block mt-3 lg:inline-block lg:mt-0 text-white mr-4 text-lg"
          >
            Price list
          </a>
          <a
            href="#gallery"
            className="block mt-3 lg:inline-block lg:mt-0 text-white mr-4 text-lg"
          >
            Gallery
          </a>
        </div>
        <div>
          <a href="#contact">
            <button className="hidden rounded-md bg-white px-3 py-4 text-sm text-red-600 transition-colors hover:bg-gray-400 md:block">
              <span className="font-bold">Enroll now </span>- start learning
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
