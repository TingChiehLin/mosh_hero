import { FC } from "react";
import localFont from "@next/font/local";

const maisonNeueBold = localFont({
  src: "../../public/assets/font/MaisonNeue/Maison-Neue-Bold.ttf",
  weight: "700",
  variable: "--font-maison-neue-bold",
});

interface ButtonPropType {
  text: string;
  link?: string;
}

export const Button: FC<ButtonPropType> = ({ text, link }) => {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer noopenner">
        <button
          className={`cursor-pointer w-full xl:w-[220px] h-[53px] rounded-lg bg-coral-orange text-white text-sm
                     tracking-[0.2em] leading-[150%] py-4 px-6 ${maisonNeueBold.variable} font-maison-neue-bold`}
        >
          {text}
        </button>
      </a>
    );
  }

  return (
    <button
      className={`cursor-pointer w-full xl:w-[220px] h-[53px] rounded-lg bg-coral-orange text-white text-sm
                  tracking-[0.2em] leading-[150%] py-4 px-6 ${maisonNeueBold.variable} font-maison-neue-bold`}
    >
      {text}
    </button>
  );
};
