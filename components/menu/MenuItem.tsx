import React from "react";
import PizzaImg from "../../public/pizza.png";
import Image from "next/image";

type Props = {};

const MenuItem = (props: Props) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:cursor-pointer transition-all hover:shadow-2xl">
      <div className="text-center">
        <Image
          src={PizzaImg}
          alt="pizza"
          className="max-h-20 max-w-fit block mx-auto"
        />
      </div>
      <h4 className="font-semibold my-2">Pepperoni Pizza</h4>
      <p className={"text-gray-600 text-sm"}>
        This is a text for , peperoni pizza please check this out
      </p>
      <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">
        Add to the cart $12
      </button>
    </div>
  );
};

export default MenuItem;
