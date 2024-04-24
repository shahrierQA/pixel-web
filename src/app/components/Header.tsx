"use client";

import Image from "next/image";
import logo from "@/public/images/icons/logo.svg";
import user_icon from "@/public/images/icons/user.svg";
import cart_icon from "@/public/images/icons/cart.svg";
import search_icon from "@/public/images/icons/search.svg";

const NAV_ITEMS = [
  {
    id: 1,
    name: "BRANDS"
  },
  {
    id: 2,
    name: "CAMERAS"
  },
  {
    id: 3,
    name: "LENSES"
  },
  {
    id: 4,
    name: "ACCESSORIES"
  },
  {
    id: 5,
    name: "STUDIO"
  },
  {
    id: 6,
    name: "EXTREME"
  },
  {
    id: 7,
    name: "USED"
  }
];

function Header() {
  return (
    <header className="bg-ui-black">
      <div className="container py-5">
        {/* header top area */}
        <div className="flex items-center justify-between">
          <Image src={logo} alt="Company Logo" />

          <div className="flex items-center space-x-8">
            <Image src={user_icon} alt="User icon" />
            <Image src={cart_icon} alt="Cart icon" />
            <Image src={search_icon} alt="Search icon" />
          </div>
        </div>

        {/* header nav area  */}
        <nav className="mt-10">
          <ul className="flex items-center justify-between">
            {NAV_ITEMS.map((item) => {
              return (
                <li key={item.id} className="text-ui-white text-md">
                  {item.name}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
