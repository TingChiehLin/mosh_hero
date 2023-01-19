import { FC } from "react";
import Image from "next/image";
import localFont from "@next/font/local";

import featureIcon from "../../public/assets/img/icons/feature.png";

const masionNeueRegular = localFont({
  src: "../../public/assets/font/MaisonNeue/Maison-Neue-Regular.ttf",
  weight: "400",
  variable: "--font-maison-neue-regular",
});

interface FeatureItemPropType {
  option: string;
  isLast?: boolean;
}

export const FeatureItem: FC<FeatureItemPropType> = ({ option, isLast }) => {
  return (
    <ul
      className={`flex gap-4 items-center ${!isLast ? "mb-2" : ""}
      tracking-[-0.01em] leading-[150%]`}
    >
      <Image src={featureIcon} alt={"feature_icon"} width={16} height={16} />
      <li
        className={`text-sm md:text-base text-dark-green ${masionNeueRegular.variable} font-maison-neue-regular`}
      >
        {option}
      </li>
    </ul>
  );
};
