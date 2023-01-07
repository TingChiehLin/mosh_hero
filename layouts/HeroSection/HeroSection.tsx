import { FC } from "react";
import localFont from "@next/font/local";

import InfoCard from "../../components/InfoCard/InforCard";

const clearfaceStdBold = localFont({
  src: "../../public/assets/font/ClearfaceStd/ClearfaceStd-Bold.ttf",
  weight: "700",
  variable: "--font-clearface",
});

const maisonNeueLight = localFont({
  src: "../../public/assets/font/MaisonNeue/Maison-Neue-Light.ttf",
  weight: "300",
  variable: "--font-maison-neue-light",
});

export type FeatureDataField = {
  consultation: string[];
  therapy: string[];
};

export interface HeroSectionPropType {
  featureDatas: FeatureDataField;
}

export const HeroSection: FC<HeroSectionPropType> = ({ featureDatas }) => {
  const { consultation, therapy } = featureDatas;

  const onlineDoctorDesktop =
    "/assets/img/illustrations/free-online-doctor_desktop.png";
  const onlineDoctorIpad =
    "/assets/img/illustrations/free-online-doctor_ipad.png";
  const onlineDoctorMobile =
    "/assets/img/illustrations/free-online-doctor_mobile.png";
  const oneAndOneTherapyDesktop =
    "/assets/img/illustrations/one-on-one-therapy_desktop.png";
  const oneAndOneTherapyIpad =
    "/assets/img/illustrations/one-on-one-therapy_ipad.png";
  const oneAndOneTherapyMobile =
    "/assets/img/illustrations/one-on-one-therapy_mobile.png";

  return (
    <section className="w-full pt-10 pb-8 md:py-12 xl:py-16 px-4 md:px-8 xl:px-0 bg-light-green flex items-center">
      <div className="w-full xl:px-[7.5rem] mx-auto xl:max-w-[1440px] xl:flex xl:items-center">
        <div
          id="hero_title"
          className="w-full xl:max-w-[488px] text-center xl:text-left md:mx-auto xl:mx-0 mb-6 md:mb-12 xl:mr-[20px]"
        >
          <h1
            className={`text-[32px] md:text-5xl text-dark-green ${clearfaceStdBold.variable} font-clearface-std tracking-[-0.02em] leading-[120%]`}
          >
            Get back on track
          </h1>
          <div
            className={`mt-4 md:mt-2 text-sm md:text-[18px] ${maisonNeueLight.variable} font-maison-neue-light text-dark-green tracking-[-0.01em] leading-[150%]`}
          >
            <p>Treatment plan in 24 hours.</p>
            <p>Treat anxiety, depression & more</p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row xl:flex-col gap-8 md:gap-6 ">
          <InfoCard
            imgDesktopSrc={onlineDoctorDesktop}
            imgIpadSrc={onlineDoctorIpad}
            imgMobileSrc={onlineDoctorMobile}
            title={"Free Doctor Consultation"}
            buttonText={"GET STARTED"}
            link={"https://www.getmosh.com.au/quizzes/mental_health_quiz"}
            infoDatas={consultation}
          />
          <div className="hidden xl:mb-8"></div>
          <InfoCard
            imgDesktopSrc={oneAndOneTherapyDesktop}
            imgIpadSrc={oneAndOneTherapyIpad}
            imgMobileSrc={oneAndOneTherapyMobile}
            title={"One-on-one therapy sessions"}
            buttonText={"BOOK THERAPIST"}
            link={"https://www.getmosh.com.au/booking/mental_health"}
            infoDatas={therapy}
          />
        </div>
      </div>
    </section>
  );
};
