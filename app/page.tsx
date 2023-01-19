import { FC } from "react";

import { getFeatureData } from "../lib/features";

import { HeroSection } from "../layouts/HeroSection";
import { DivideSection } from "../layouts/DivideSection";
import { TutorialSection } from "../layouts/TutorialSection";

/* @ts-expect-error Server Component */
const Page: FC = async () => {
  const featureDatas = await getFeatureData();
  if (featureDatas.error) return "API Error show on the browser";

  return (
    <>
      <HeroSection featureDatas={featureDatas} />
      <DivideSection />
      <TutorialSection />
    </>
  );
};

export default Page;
