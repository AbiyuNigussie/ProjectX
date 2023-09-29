import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

const Card = (props) => {
  return (
    <div class="md:transition md:ease-in-out  md:hover:shadow-lg w-full pb-4 md:max-w-xs flex flex-col gap-5 bg-white border-solid border-x border-b rounded-b-lg rounded-t-xl">
      <div class="max-w-full h-52 md:max-h-44 relative">
        <div class="md:transition md:ease-in-out  md:hover:scale-110 text-xl p-3 md:p-2 border rounded-full absolute right-4 bottom-[-10%] md:right-2 bg-white shadow-sm hover:shadow-md">
          <HeartIcon class="h-6 md:h-5" />
        </div>
        <a href="#" class="block h-full">
          <img
            src={props.item.imgSrc}
            alt=""
            class="h-full w-full md:rounded-tl-xl md:rounded-tr-xl"
          />
        </a>
      </div>
      <div class="flex flex-col px-3 gap-2">
        <a
          href="#"
          class="text-lg text-black hover:no-underline hover:text-black"
        >
          {props.item.title}
        </a>
        <p class="text-red-500 font-semibold text-sm">{props.item.scheduled}</p>
        <p class="text-[#6f7287]">Free</p>
        <a href="/hello" class="hover:text-blue-500 w-fit">
          {props.item.postedBy}
        </a>
      </div>
    </div>
  );
};

export default Card;
