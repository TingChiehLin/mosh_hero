import localFont from "@next/font/local";
import Image from "next/image";

import "./globals.css";

import logo from "../public/assets/img/logo.png";
import arrotBottom from "../public/assets/img/icons/arrow_bottom.png";
import menuIcon from "../public/assets/img/icons/menu.png";
import shoppingCart from "../public/assets/img/icons/shopping_cart.png";

const maisonNeueBold = localFont({
  src: "../public/assets/font/MaisonNeue/Maison-Neue-Bold.ttf",
  weight: "700",
  variable: "--font-maison-neue-bold",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <nav
          className={`w-full xl:max-w-[1440px] flex items-center justify-between mx-auto
                      px-4 md:px-8 xl:px-[7.5rem] py-5
                    text-dark-green ${maisonNeueBold.variable} font-maison-neue-bold tracking-[0.2em] leading-[150%]`}
        >
          <div className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              className="md:mr-10 xl:mr-10 cursor-pointer w-[82.91px]
              h-[40px]"
            />
            <ul className="list-none hidden md:flex items-center">
              <li>WHAT WE TREAT</li>
              <Image
                width={12}
                height={7}
                src={arrotBottom}
                alt={"arrow_bottom"}
                className="md:ml-[10px] xl:ml-[10px]"
              />
            </ul>
          </div>
          <div>
            <ul className="list-none flex items-center">
              <li className="mr-10 hidden md:block">MY ACCOUNT</li>
              <li className="mr-6 hidden md:block">LOG OUT</li>
              <Image
                width={31.88}
                height={28.59}
                src={shoppingCart}
                alt="shopping_cart"
                className="block md:hidden mr-[34.12px]"
              />
              <Image
                width={42}
                height={36}
                src={menuIcon}
                alt="menu"
                className="cursor-pointer"
              />
            </ul>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
