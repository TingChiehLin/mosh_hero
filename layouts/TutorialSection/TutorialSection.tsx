import { FC } from "react";
import Image from "next/image";
import localFont from "@next/font/local";

import { ProcessCard } from "../../components/ProcessCard";
import { Button } from "../../components/Button";

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
  const HIWImg = "/assets/img/illustrations/HIW_Illustaration.png";
  const doctorImg = "/assets/img/illustrations/doctor_illustaration.png";

  return (
    <section className="w-full mx-auto xl:max-w-[1440px] flex flex-col md:flex-row flex-wrap xl:flex-nowrap my-16 xl:my-[101px] px-4 md:px-8 xl:px-[165px]">
      <div className="w-full md:max-w-[370px] mx-auto mb-12 xl:mb-0">
        <div
          className={`text-[32px] md:text-5xl text-center xl:text-left text-dark-green ${clearfaceStdBold.variable} font-clearface-std tracking-[-0.02em] leading-[120%] mb-2`}
        >
          How it works
        </div>
        <p
          className={`mt-2 text-[18px] text-center xl:text-left ${maisonNeueBold.variable} font-maison-neue-bold text-dark-green tracking-[-0.01em] leading-[150%] mb-12`}
        >
          100% online. Convenient. Discreet.
        </p>
        <Button text="START CONSULT" />
      </div>
      <div className="w-full xl:max-w-[740px] md:flex md:items-center xl:gap-6">
        <ProcessCard
          imgSrc={HIWImg}
          stepTitle={"Step 1"}
          title={"Complete questionnaire"}
          description={
            "A doctor will personalise your recommendation within 24 hours."
          }
        />
        <Image
          src={"/assets/img/icons/arrow_right.png"}
          alt={"arrow_right"}
          width="72"
          height="65"
          className="w-[72px] mb-6 md:w-[72px] h-auto md:h-[65px] mx-auto"
        />
        <ProcessCard
          imgSrc={doctorImg}
          stepTitle={"Step 2"}
          title={"Free doctor consult"}
          description={
            "Text and video chat with a doctor to confirm the treatment plan is right for you."
          }
        />
      </div>
    </section>
  );
};
