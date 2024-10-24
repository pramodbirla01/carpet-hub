// src/pages/index.js (or app/page.js)
"use client"

import Color from "./pages/Color/Color";
import HomeImg from "./pages/HomeImg/HomeImg";
import Shop_size from "./pages/Shop_size/Shop_size";
import Categories from "./pages/category/Categories";
import Nav from "./component/Nav";
import Story from "./pages/Story/Story";
import Customize from "./pages/Customize/Customize";
import Video from "./pages/Video/Video";


export default function Home() {
  return (
    <>
    <Nav/>
    <HomeImg/>
    <Categories/>
    <Color/>
   <Shop_size/> 
   <Story/>
   <Customize/>
   <Video/>
    </>
  );
}
