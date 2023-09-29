import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

const Card = (props) => {
  return (
    <div class="sm:transition sm:ease-in-out  sm:hover:shadow-lg w-full pb-4 sm:max-w-[18rem] flex flex-col gap-5 bg-white border-solid border-x border-b rounded-b-lg rounded-t-xl">
      <div class="max-w-full h-52 sm:max-h-44 relative">
        <div class="sm:transition sm:ease-in-out  sm:hover:scale-110 text-xl p-3 sm:p-2 border rounded-full absolute right-4 bottom-[-10%] sm:right-2 bg-white shadow-md hover:shadow-md">
          <HeartIcon class="h-6 sm:h-5" />
        </div>
        <a href="#" class="block h-full">
          <img
            src={props.item.imgSrc}
            alt=""
            class="h-full w-full sm:rounded-tl-xl sm:rounded-tr-xl"
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
