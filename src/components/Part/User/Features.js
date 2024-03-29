import React from "react";
import { features } from "../../../data/data";
import './style.css'
function Features() {
  const { name, title, items } = features;
  return <section className="section text-center bg-gray-100">
    <div className="container mx-auto">
      <div>
        <h1 className="title text-6xl uppercase text-primary mb-6">{name}</h1>
        <p className="max-x-[639px] mx-auto mb-[50px] lg:mb-[50px] text-lg">{title}</p>
      </div>
      <div className="  grid justify-items-center grid-cols-2 gap-x-8 lg:grid-cols-4 lg:gap-[30px]">
        {items.map((item, index) => {
          return <div className="container flex flex-col justify-center items-center gap-y-2 bg-slate-50 max-w-[292px] h-[220px] m-3 rounded-xl shadow-lg fea-item " key={index}>
            <div className="title text-6xl">{item.icon}</div>
            <h4 className="font-semibold text-base sm:text-xl text-primary">{item.title}</h4>
            <p >{item.subtitle}</p>
          </div>
        })}
      </div>
    </div>
  </section>;
}

export default Features;
