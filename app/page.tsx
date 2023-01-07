import { FC } from "react";

import { getFeatureData } from "../lib/features";

import { HeroSection } from "../layouts/HeroSection";
import { DivideSection } from "../layouts/DivideSection";
import { TutorialSection } from "../layouts/TutorialSection";

/* @ts-expect-error Server Component */
const Page: FC = async () => {
  const featureDatas = await getFeatureData();

  return (
    <>
      <HeroSection featureDatas={featureDatas} />
      <DivideSection />
      <TutorialSection />
    </>
  );
};

export default Page;
