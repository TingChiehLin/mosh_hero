import { FC } from "react";
import Image from "next/image";
import localFont from "@next/font/local";

import { ProcessCard } from "../../components/ProcessCard";
import { Button } from "../../components/Button";

import HIWImg from "../../assets/img/illustrations/HIW_Illustaration.png";
import oneTherapyImg from "../../assets/img/illustrations/one-on-one-therapy.png";

const clearfaceStdBold = localFont({
  src: "../../public/assets/font/ClearfaceStd/ClearfaceStd-Bold.ttf",
  weight: "700",
  variable: "--font-clearface",
});

const maisonNeueBold = localFont({
  src: "../../public/assets/font/MaisonNeue/Maison-Neue-Bold.ttf",
  weight: "700",
  variable: "--font-maison-neue-bold",
});

export const TutorialSection: FC = () => {
  return (
    <section className="flex justify-center pt-[101px]">
      <div className="w-[321px]">
        <div
          className={`text-5xl text-dark-green ${clearfaceStdBold.variable} font-clearface-std tracking-[-0.02em] leading-[120%] mb-2`}
        >
          How it works
        </div>
        <p
          className={`mt-2 text-[18px] ${maisonNeueBold.variable} font-maison-neue-bold text-dark-green tracking-[-0.01em] leading-[150%] mb-12`}
        >
          100% online. Convenient. Discreet.
        </p>
        <Button text="START CONSULT" />
      </div>
      <div>
        <ProcessCard />
        <Image
          src={"/assets/img/icons/arrow_right.png"}
          alt={"arrow_right"}
          width="72"
          height="65"
          className="w-full h-auto"
        />
        <ProcessCard />
      </div>
    </section>
  );
};
