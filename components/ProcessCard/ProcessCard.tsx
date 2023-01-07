import { FC } from "react";
import Image from "next/image";
import localFont from "@next/font/local";

const masionNeueRegular = localFont({
  src: "../../public/assets/font/MaisonNeue/Maison-Neue-Regular.ttf",
  weight: "400",
  variable: "--font-maison-neue-regular",
});

const maisonNeueBold = localFont({
  src: "../../public/assets/font/MaisonNeue/Maison-Neue-Bold.ttf",
  weight: "700",
  variable: "--font-maison-neue-bold",
});

interface ProcessCardPropType {
  imgSrc: string;
  stepTitle: string;
  title: string;
  description: string;
}

export const ProcessCard: FC<ProcessCardPropType> = ({
  imgSrc,
  stepTitle,
  title,
  description,
}) => {
  return (
    <div
      className="w-full xl:max-w-[304px]
                 h-[374px] mb-6 md:mb-0
                 py-6 px-6
                 flex flex-col items-center
               bg-light-green rounded-xl"
    >
      <Image
        src={imgSrc}
        alt={title}
        width={120}
        height={120}
        className={"w-[120px] md:w-32 h-auto"}
      />
      <div
        className={`text-sm ${maisonNeueBold.variable} font-maison-neue-bold mt-3`}
      >
        {stepTitle}
      </div>
      <div
        className={`text-[18px] ${maisonNeueBold.variable} font-maison-neue-bold mt-1`}
      >
        {title}
      </div>
      <p
        className={`w-[256px] text-center text-sm md:text-base  ${masionNeueRegular.variable} font-maison-neue-regular mt-4`}
      >
        {description}
      </p>
    </div>
  );
};
