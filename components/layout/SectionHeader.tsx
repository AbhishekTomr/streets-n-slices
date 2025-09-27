import React from "react";

type Props = {
  mainHeader: string;
  subHeader: string;
};

function SectionHeader({ mainHeader, subHeader }: Props) {
  return (
    <div className="my-3 text-center">
      <h3 className="uppercase text-gray-600 font-semibold leading-4">
        {subHeader}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
    </div>
  );
}

export default SectionHeader;
