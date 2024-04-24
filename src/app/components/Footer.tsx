import Image from "next/image";

import location_map from "@/public/images/map.jpg";
import location_icon from "@/public/images/icons/location.svg";
import clock_icon from "@/public/images/icons/clock.svg";
import logo from "@/public/images/icons/logo.svg";
import instagram from "@/public/images/icons/instagram.svg";
import facebook from "@/public/images/icons/facebook.svg";
import twitter from "@/public/images/icons/twitter.svg";
import phone_icon from "@/public/images/icons/phone.svg";
import mail_icon from "@/public/images/icons/mail.svg";
import payment_methods from "@/public/images/icons/payment.svg";

import Link from "next/link";

const shopItems = [
  {
    id: 1,
    text: "Cameras",
    link: "#"
  },
  {
    id: 2,
    text: "Studio",
    link: "#"
  },
  {
    id: 3,
    text: "Lenses",
    link: "#"
  },

  {
    id: 4,
    text: "Brand",
    link: "#"
  },
  {
    id: 5,
    text: "Accessories",
    link: "#"
  },
  {
    id: 6,
    text: "Extreme",
    link: "#"
  }
];

const usedItems = [
  {
    id: 1,
    text: "Buy & Sell",
    link: "#"
  },
  {
    id: 2,
    text: "Policy",
    link: "#"
  },
  {
    id: 3,
    text: "Report Fraud",
    link: "#"
  }
];

const aboutItems = [
  {
    id: 1,
    text: "Contact",
    link: "#"
  },
  {
    id: 2,
    text: "Our story",
    link: "#"
  },
  {
    id: 3,
    text: "Blog",
    link: "#"
  }
];

const policyItems = [
  {
    id: 1,
    text: "Return Policy",
    link: "#"
  },
  {
    id: 2,
    text: "Accessibility",
    link: "#"
  },
  {
    id: 3,
    text: "Terms of Use",
    link: "#"
  },
  {
    id: 4,
    text: "Privacy Policy",
    link: "#"
  }
];

function Footer() {
  return (
    <footer className="bg-ui-black section-margin-primary py-12 text-ui-dark-gray">
      <div className="container">
        <div className="grid md:grid-cols-3">
          <div className="md:hidden justify-center items-center flex mb-6">
            <Image src={logo} alt="Company Logo" height={24} />
          </div>
          <div className="flex md:items-center space-x-6 md:flex-row flex-col-reverse">
            <Image
              src={location_map}
              alt="Location map"
              className="md:w-auto w-full md:h-auto h-16 md:object-none object-cover md:mt-0 mt-5"
            />

            <div>
              <h5 className="text-xl font-semibold text-white">
                Come visit us!
              </h5>
              <div className="flex items-center space-x-4 mt-3">
                <Image src={location_icon} alt="Location icon" height={16} />
                <p className="text-sm text-ui-dark-gray">
                  71 Park Lane, London <br /> SW43 2LW
                </p>
              </div>

              <div className="flex items-center space-x-4 mt-4">
                <Image src={clock_icon} alt="Clock icon" height={16} />
                <p className="text-sm text-ui-dark-gray">
                  Sunday to Friday
                  <br /> 8:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex justify-center items-center hidden">
            <Image src={logo} alt="Company Logo" />
          </div>
          <div className="space-y-5 md:block hidden">
            <h4 className="text-ui-white font-semibold text-xl">
              Join our newsletter for exclusive offers!
            </h4>
            <div className="flex items-center md:space-x-5 space-y-3 md:flex-row flex-col">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 text-sm"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="w-full p-2 text-sm"
              />
            </div>
            <div className="flex items-center space-x-5 md:justify-normal justify-center">
              <Link href="#">
                <Image src={instagram} alt="Instagram icon" />
              </Link>
              <Link href="#">
                <Image src={facebook} alt="Facebook icon" />
              </Link>
              <Link href="#">
                <Image src={twitter} alt="Twitter icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-t-ui-dark-gray my-12 md:block hidden"></div>

        <div className="grid md:grid-cols-3 grid-cols-1 md:mt-0 mt-6">
          <div className="flex space-x-12">
            <div className="text-sm">
              <h4 className="text-xl text-ui-white">Shop</h4>
              <ul className="grid md:grid-cols-2 gap-2 mt-4">
                {shopItems.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.link}>{item.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="text-sm">
              <h4 className="text-xl text-ui-white">Used</h4>
              <ul className="space-y-2 mt-4">
                {usedItems.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.link}>{item.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="text-sm">
              <h4 className="text-xl text-ui-white">About</h4>
              <ul className="space-y-2 mt-4">
                {aboutItems.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.link}>{item.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 justify-center">
            <button className="bg-ui-brand-primary p-2 px-4 text-ui-black font-semibold">
              USD $
            </button>
            <button className="border border-ui-gray p-2 px-4 text-ui-gray font-semibold">
              EUR €
            </button>
          </div>

          <div className="md:mt-0 mt-6">
            <h4 className="text-xl text-ui-white">Contact Information</h4>

            <div className="space-y-3 mt-6">
              <div className="flex items-center space-x-3">
                <Image src={phone_icon} alt="Phone icon" />
                <Link href="tel:+972 123-456-78">+972 123-456-78</Link>
              </div>

              <div className="flex items-center space-x-3">
                <Image src={mail_icon} alt="Mail icon" />
                <Link href="mailto:name@camera.com">name@camera.com</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5 md:hidden block md:mt-0 mt-10">
          <h4 className="text-ui-white text-center font-semibold text-xl">
            Join our newsletter
          </h4>
          <div className="flex items-center md:space-x-5 space-y-3 md:flex-row flex-col">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 text-sm"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="w-full p-2 text-sm"
            />
            <button className="py-1 px-8 text-sm bg-ui-brand-primary font-light text-white">
              SIGN UP
            </button>
          </div>
          <div className="flex items-center space-x-5 md:justify-normal justify-center">
            <Link href="#">
              <Image src={instagram} alt="Instagram icon" />
            </Link>
            <Link href="#">
              <Image src={facebook} alt="Facebook icon" />
            </Link>
            <Link href="#">
              <Image src={twitter} alt="Twitter icon" />
            </Link>
          </div>
        </div>

        <div className="md:grid grid-cols-3 mt-12 flex flex-col-reverse items-center space-y-5">
          <div className="md:mt-0 mt-4">
            <p>© 2023 PIXEL. All Rights Reserved</p>
          </div>

          <div className="flex justify-center">
            <Image src={payment_methods} alt="Payment method" />
          </div>

          <div className="flex items-center space-x-4 md:text-sm text-[10px]">
            {policyItems.map((item) => {
              return (
                <Link key={item.id} href={item.link}>
                  {item.text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
