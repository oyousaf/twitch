import React from "react";
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
  return (
    <div className="p-2 md:p-8" id="categories">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147FF]">Categories</span> we think you&apos;ll
        like
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2">
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"
          title="Grand Theft Auto V"
          viewers="79.3K"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/493057-285x380.jpg"
          title="PUBG"
          viewers="34.8K"
          tag1="Shooter"
          tag2="FPS"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/1869092879_IGDB-285x380.jpg"
          title="Fifa 22"
          viewers="18.5K"
          tag1="Sports"
          tag2="Football"
        />

        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/369252_IGDB-285x380.jpg"
          title="Sims 4"
          viewers="1K"
          tag1="Simulation"
          tag2=""
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/1469308723-285x380.jpg"
          title="Software & Game Development"
          viewers="1K"
          tag1="IRL"
          tag2="Creative"
        />
      </div>
    </div>
  );
};

export default Categories;
