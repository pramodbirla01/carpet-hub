// src/pages/index.js (or app/page.js)
"use client"

import Color from "./Color/Color";
import HomeImg from "./HomeImg/HomeImg";
import Size_shop from "./Size/Size_shop";
import Categories from "./category/Categories";
import Nav from "./components/Nav";


export default function Home() {
  return (
    <>
    <Nav/>
    <HomeImg/>
    <Categories/>
    <Color/>
    
    </>
  );
}
