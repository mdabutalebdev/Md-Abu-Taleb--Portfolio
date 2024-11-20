import React from "react";
import My_image from "../assets/image/my_image.png";
import Button from "./layouts/Button";

const Banner = () => {
  return (
    <section className="bg-black py-40">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/2 mt-28">
          <h3 className="text-5xl text-white font-normal pb-2"> Hi there!</h3>
          <h3 className="text-4xl text-white font-normal leading-8">
            My Name is Md Abu Taleb Khan.
          </h3>
          <h3 className="text-6xl text-primary font-medium leading-[70px] pb-3">
            I'm a Front-End Developer.
          </h3>
          <p className="text-gray-500 font-normal text-md">
            I am an enthusiast of technology and photography. My work is related
            to digital solutions that can help you achieve better results.My
            work is related to digital solutions that can help you achieve
            better results.
          </p>
        </div>
        <div className="w-1/2 relative">
          <div className="bg-gray-700   absolute -top-[52px] left-[425px] h-[515px] w-[340px] rounded">
           
          </div>
          <img
              src={My_image}
              alt=""
              className="w-full absolute -top-28 -right-14"
            />
        </div>
      </div>
      <div className="container mx-auto flex gap-10 py-10 mt-10">
        <Button text={`Hire Me`} className={`text-white`} />
        <Button text={`Contact Me`} className={`text-white`} />
      </div>
    </section>
  );
};

export default Banner;
