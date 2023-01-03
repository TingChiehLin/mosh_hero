import { FC } from "react";

import { getFeatureData } from "../lib/features";

import { HeroSection } from "../layouts/HeroSection";
import { DivideSection } from "../layouts/DivideSection";
import { TutorialSection } from "../layouts/TutorialSection";

const data = {
  consultation: [
    "Personalised treatment options",
    "Video consults and easy check-ins",
    "Medication, prescribed and delivered",
  ],
  therapy: [
    "Match with a registered therapist",
    "Video consults and easy check-ins",
    "Confidential online therapy sessions",
  ],
};

/* @ts-expect-error Server Component */
const Page: FC = async () => {
  //const featureDatas = await getFeatureData();
  const featureDatas = await data;
  return (
    <>
      <HeroSection featureDatas={featureDatas} />
      <DivideSection />
      <TutorialSection />
    </>
  );
};

export default Page;
