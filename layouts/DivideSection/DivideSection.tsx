import { FC } from "react";

export const DivideSection: FC = () => {
  return (
    <section className="w-full h-[62px] md:h-12 py-2.5 px-8 md:py-[11px] md:px-0 bg-celadon flex items-center justify-center text-center">
      <span className="text-dark-green text-sm md:text-[18px] font-semibold">
        If you&apos;re in crisis or experiencing suicidal thoughts call 000 or
        Lifeline 13 11 14
      </span>
    </section>
  );
};
