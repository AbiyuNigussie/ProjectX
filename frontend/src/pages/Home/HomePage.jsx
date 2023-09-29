import React, { useState } from "react";
import Header from "../../components/Layout/Header";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Card from "../../components/Cards/Card";

const HomePage = () => {
  const [lists, setLists] = useState([
    {
      imgSrc: "src/assets/addis-ababa-min.jpg",
      title: "Harvest Moon Gala: A Night of Elegance and Giving",
      scheduled: "Tuesday • 2:30 AM GMT+3",
      price: "Free",
      postedBy: "ChildMinister",
    },
    {
      imgSrc: "src/assets/addis-ababa-min.jpg",
      title: "Women and inventing in the Victorian Age",
      scheduled: "Tuesday • 2:30 AM GMT+3",
      price: "Free",
      postedBy: "ChildMinister",
    },
    {
      imgSrc: "src/assets/addis-ababa-min.jpg",
      title: "Harvest Moon Gala: A Night of Elegance and Giving",
      scheduled: "Tuesday • 2:30 AM GMT+3",
      price: "Free",
      postedBy: "ChildMinister",
    },
    {
      imgSrc: "src/assets/addis-ababa-min.jpg",
      title: "Harvest Moon Gala: A Night of Elegance and Giving",
      scheduled: "Tuesday • 2:30 AM GMT+3",
      price: "Free",
      postedBy: "ChildMinister",
    },
  ]);
  return (
    <>
      <Header />
      <main>
        <div class="min-h-full flex flex-col sm:px-5">
          <div class="flex items-center justify-between">
            <p class="py-5 px-5 text-2xl text-gray-600">Trending Events</p>
            <a href="#" class="hidden sm:block hover:text-blue-500">
              <p class="text-sm flex items-center">
                See more <ChevronRightIcon class="h-4" />
              </p>
            </a>
          </div>
          <div class="flex justify-center">
            <div class="flex flex-wrap sm:flex-row sm:gap-5">
              {lists && lists.map((each, key) => <Card item={each} />)}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
