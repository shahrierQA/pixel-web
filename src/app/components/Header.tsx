import cart_icon from "@/public/images/icons/cart.svg";
import logo from "@/public/images/icons/logo.svg";
import search_icon from "@/public/images/icons/search.svg";
import user_icon from "@/public/images/icons/user.svg";
import { IconBar } from "@/src/assets/icons/IconBar";

import Image from "next/image";

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

const DIGITAL_ITEMS = [
  {
    id: 1,
    name: "DSLR"
  },
  {
    id: 2,
    name: "Mirrorless"
  },
  {
    id: 3,
    name: "Compact"
  },
  {
    id: 4,
    name: "Medium Format"
  }
];

const FILM_ITEMS = [
  {
    id: 1,
    name: "35mm"
  },
  {
    id: 2,
    name: "Medium Format"
  },
  {
    id: 3,
    name: "Large Format"
  },
  {
    id: 4,
    name: "Instant"
  },
  {
    id: 5,
    name: "Disposable"
  }
];

const VIDEO_ITEMS = [
  {
    id: 1,
    name: "Comcorder"
  },
  {
    id: 2,
    name: "Pro-Consumer"
  },
  {
    id: 3,
    name: "Super-Chip"
  }
];

function Header() {
  return (
    <header className="bg-ui-black relative">
      <div className="container pt-5 md:pb-0 pb-5">
        {/* header top area */}
        <div className="flex items-center justify-between">
          <button className="md:hidden block">
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
        <nav className="mt-10 md:block hidden">
          <ul className="flex items-center justify-between">
            {NAV_ITEMS.map((item) => {
              if (item.id === 2) {
                return (
                  <li
                    key={item.id}
                    className="text-ui-white text-md group hover:bg-ui-brand-primary py-4 px-8"
                  >
                    {item.name}

                    <div className="absolute top-full w-full left-0 hidden z-40 bg-ui-white p-6 group-hover:block text-ui-black group-hover:duration-500">
                      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 ">
                        <div>
                          <h4 className="text-md font-bold underline">
                            DIGITAL
                          </h4>
                          <ul className="mt-1 text-sm space-y-1">
                            {DIGITAL_ITEMS.map((item) => {
                              return <li key={item.id}>{item.name}</li>;
                            })}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-md font-bold underline">FILM</h4>
                          <ul className="mt-1 text-sm space-y-1">
                            {FILM_ITEMS.map((item) => {
                              return <li key={item.id}>{item.name}</li>;
                            })}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-md font-bold underline">VIDEO</h4>
                          <ul className="mt-1 text-sm space-y-1">
                            {VIDEO_ITEMS.map((item) => {
                              return <li key={item.id}>{item.name}</li>;
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }

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
