"use client";

import cart_icon from "@/public/images/icons/cart.svg";
import logo from "@/public/images/icons/logo.svg";
import search_icon from "@/public/images/icons/search.svg";
import user_icon from "@/public/images/icons/user.svg";
import { IconBar } from "@/src/assets/icons/IconBar";

import Image from "next/image";
import { DesktopNavigation } from "./Navs";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";

function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="bg-ui-black relative">
      <div className="container pt-5 md:pb-0 pb-5">
        {/* header top area */}
        <div className="flex items-center justify-between">
          <button className="md:hidden block" onClick={() => setShowNav(true)}>
            <IconBar />
          </button>
          <Image src={logo} alt="Company Logo" />

          <div className="flex items-center space-x-8">
            <Image
              src={user_icon}
              alt="User icon"
              height={22}
              className="md:block hidden"
            />
            <Image src={cart_icon} alt="Cart icon" height={22} />
            <Image src={search_icon} alt="Search icon" height={22} />
          </div>
        </div>

        {/* header nav area  */}
        <div className="md:block hidden">
          <DesktopNavigation />
        </div>
      </div>

      <div className="md:hidden block z-40 absolute top-0 w-full bg-ui-black">
        {showNav && (
          <div>
            <button
              onClick={() => setShowNav(false)}
              className="absolute top-5 right-6"
            >
              <XMarkIcon className="w-7 h-7 text-white" />
            </button>
            <DesktopNavigation />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
