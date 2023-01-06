import { FC } from "react";

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
    <div className="w-full xl:max-w-[304px] h-[374px] my-12 md:my-0 bg-light-green rounded-xl"></div>
  );
};
