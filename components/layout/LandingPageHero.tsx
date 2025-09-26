import React from "react";
import PizzaImg from "../../public/pizza.png";
import Image from "next/image";
import RightArrow from "../common/RightArrow";

type Props = {};

const LandingPageHero = (props: Props) => {
  return (
    <section className="landing-page-section">
      <div className="py-12">
        <h1 className="text-6xl font-semibold">
          Everything <br />
          is better with <br />a <span className="text-primary">pizza</span>
        </h1>
        <p className="my-6 text-gray-600 font-semibold">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious you in life
        </p>
        <div className="flex gap-4 text-sm items-center">
          <button className="flex gap-2 items-center bg-primary text-white px-4 py-2 rounded-full">
            Order Now <RightArrow />
          </button>
          <button className="flex gap-2 item-center py-2 text-gray-600 font-semibold">
            Learn More
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src={PizzaImg} alt="pizza" layout="fill" />
      </div>
    </section>
  );
};

export default LandingPageHero;
