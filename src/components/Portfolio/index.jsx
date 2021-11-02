import React from "react";
import ListPortfolio from "./ListPortfolio";
import HisCorp from "../../assets/images/ListPorfolio/His Corp.jpg";
import Aleem from "../../assets/images/ListPorfolio/Aleem.jpg";
import StoreGG from "../../assets/images/ListPorfolio/Store GG.jpg";

export default function Portfolio() {
  return (
    <div class="max-w-3xl mx-auto px-4 py-10">
      <h1 class="font-bold text-xl text-center">Portfolio</h1>
      <p class="text-center mb-8">You can click on them to see more details</p>
      <div class="flex flex-wrap justify-around gap-4">
        <ListPortfolio title="PT. HIS Corp Intern" description="HIS Corp is one of the best wedding planners in Jakarta, and has a branch in Bandung." image={HisCorp} />
        <ListPortfolio title="Aleem" description="Aleem is a special application for consultation about the Islamic religion." image={Aleem} />
        <ListPortfolio title="Store GG" description="Top up game website where players can buy coins, diamonds or the like to improve appearance and level." image={StoreGG} />
      </div>
    </div>
  );
}
