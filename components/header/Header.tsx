"use client";
import React, { useRef, useState, useEffect } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [subMenu, setSubmenu] = useState(false);

  const collapseRef = useRef<HTMLDivElement | null>(null);

  function handleToggle() {
    setToggle(!toggle);
  }

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      collapseRef.current &&
      !collapseRef.current.contains(event.target as Node)
    ) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  interface MenuItem {
    label: string;
    href?: string;
    subItems?: MenuItem[];
  }

  const menuItems: MenuItem[] = [
    { label: "About", href: "#" },
    {
      label: "Sub Menu",
      subItems: [
        { label: "About", href: "#" },
        { label: "Downloads", href: "#" },
        { label: "Team Account", href: "#" },
      ],
    },
  ];

  return (
    <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav
        className="relative max-w-[66rem] w-full bg-light-blue rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          {/* Logo  */}
          <a
            className="flex-none rounded-md text-xl inline-block font-bold text-white focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Minimal"
          >
            Minie
          </a>
          {/* End Logo  */}

          <div className="md:hidden">
            <button
              onClick={handleToggle}
              type="button"
              className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-navy-blue text-white disabled:opacity-50 disabled:pointer-events-none"
              data-hs-collapse="#navbar-collapse"
              aria-controls="navbar-collapse"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Collapse  */}
        <div
          ref={collapseRef}
          className={`${
            toggle ? "block" : "hidden"
          } overflow-hidden transition-all duration-300 basis-full grow md:block`}
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
            <a
              className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300"
              href="#"
              aria-current="page"
            >
              Home
            </a>
            <a
              className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300"
              href="#"
            >
              Stories
            </a>
            <a
              className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300"
              href="#"
            >
              Reviews
            </a>
            <a
              className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300"
              href="#"
            >
              Approach
            </a>

            <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:py-4">
              <button
                type="button"
                className="flex items-center w-full text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
              >
                About
                <svg
                  className={`flex-shrink-0 ms-1 size-4 transition-transform ${
                    subMenu ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`${
                  subMenu ? "block opacity-100" : "hidden opacity-0"
                } transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] md:w-48 z-10 bg-light-blue md:shadow-md rounded-lg p-2 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5`}
              >
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300"
                  href="#"
                >
                  About
                </a>
                <div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                  <button
                    type="button"
                    className="w-full flex justify-between items-center py-2 px-3 text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300"
                  >
                    Sub Menu
                    <svg
                      className="sm:-rotate-90 flex-shrink-0 ms-2 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-light-blue md:shadow-md rounded-lg p-2 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300"
                      href="#"
                    >
                      About
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300"
                      href="#"
                    >
                      Downloads
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300"
                      href="#"
                    >
                      Team Account
                    </a>
                  </div>
                </div>

                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300"
                  href="#"
                >
                  Downloads
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none focus:text-neutral-300"
                  href="#"
                >
                  Team Account
                </a>
              </div>
            </div>

            <div>
              <a
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-primary font-medium text-sm text-white rounded-full focus:outline-none"
                href="#"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
        {/* End Collapse  */}
      </nav>
    </header>
  );
};

export default Header;
