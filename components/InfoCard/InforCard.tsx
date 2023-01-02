"use client";
import { FC, useState } from "react";
import Image from "next/image";
import localFont from "@next/font/local";

import arrowBottom from "../../public/assets/img/icons/arrow_bottom.png";

import { Button } from "../Button";
import { FeatureItem } from "../FeatureItem";

const maisonNeueBold = localFont({
  src: "../../public/assets/font/MaisonNeue/Maison-Neue-Bold.ttf",
  weight: "700",
  variable: "--font-maison-neue-bold",
});

export interface InfoCardPropType {
  imgDesktopSrc: string;
  imgIpadSrc: string;
  imgMobileSrc: string;
  title: string;
  buttonText: string;
  link: string;
  infoDatas: string[];
}

const InfoCard: FC<InfoCardPropType> = ({
  imgDesktopSrc,
  imgIpadSrc,
  imgMobileSrc,
  title,
  buttonText,
  link,
  infoDatas,
}) => {
  const [isToggle, setisToggle] = useState<boolean>(false);
  const ToggleHandler = () => {
    setisToggle((preState) => !preState);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col xl:flex-row xl:items-start xl:gap-[1.25rem] cursor-pointer xl:cursor-default">
        <Image
          src={imgDesktopSrc}
          alt={`coverImage_${title}`}
          width={288}
          height={140}
          className={
            "rounded-[20px] w-full xl:max-w-[285px] h-auto hidden md:hidden xl:block"
          }
          priority
          onClick={ToggleHandler}
        />
        <Image
          src={imgIpadSrc}
          alt={`coverImage_${title}`}
          width={288}
          height={140}
          className={"rounded-[20px] w-full h-auto hidden md:block xl:hidden"}
          priority
          onClick={ToggleHandler}
        />
        <Image
          src={imgMobileSrc}
          alt={`coverImage_${title}`}
          width={288}
          height={140}
          className={"rounded-[20px] w-full h-auto block md:hidden xl:hidden"}
          priority
          onClick={ToggleHandler}
        />
        <div>
          <div className="my-4 xl:mt-0">
            <div
              className="flex items-center justify-between gap-6 xl:gap-0 cursor-pointer xl:cursor-default"
              onClick={ToggleHandler}
            >
              <div
                className={`text-dark-green text-[18px]
                        ${maisonNeueBold.variable} font-maison-neue-bold
                        tracking-[-0.01em] leading-[150%]
                      `}
              >
                {title}
              </div>
              <Image
                src={arrowBottom}
                alt={"arrow_icon"}
                width={12}
                height={7}
                className={`block xl:hidden transition ease-out delay-400 ${
                  isToggle && "-rotate-180"
                }`}
              />
            </div>
            <div
              className={`mt-4  xl:block transition ease-out delay-400 animate-fade ${
                isToggle ? "block" : "hidden"
              }`}
            >
              {infoDatas.map((f, index) => (
                <FeatureItem
                  key={`$feature_${index}`}
                  option={f}
                  isLast={index === infoDatas.length - 1}
                />
              ))}
            </div>
          </div>
          <Button text={buttonText} link={link} />
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
