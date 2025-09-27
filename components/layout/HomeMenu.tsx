import Image from "next/image";
import React from "react";
import SaladImg1 from "../../public/sallad1.png";
import SaladImg2 from "../../public/sallad2.png";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

type Props = {};

const HomeMenu = (props: Props) => {
  return (
    <section>
      <div className="relative h-full w-full left-0 right-0 justify-start">
        <div className="absolute h-48  w-42 -left-12 -top-18 -z-10">
          <Image src={SaladImg1} alt="salad-image" fill objectFit="contain" />
        </div>
        <div className="absolute h-48 w-42 -top-23 -right-12 -z-10">
          <Image src={SaladImg2} alt="salad-image" fill objectFit="contain" />
        </div>
      </div>
      <SectionHeader mainHeader={"Menu"} subHeader={"Check Out"} />
      <div className="grid grid-cols-3 gap-4 my-10">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default HomeMenu;
