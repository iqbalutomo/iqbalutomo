import React from 'react';
import ListPortfolio from './ListPortfolio';
import HisCorp from '../../assets/images/list-portfolio/His Corp.jpg';
import Aleem from '../../assets/images/list-portfolio/Aleem.jpg';
import StoreGG from '../../assets/images/list-portfolio/Store GG.jpg';
import NearBook from '../../assets/images/list-portfolio/near-book.png';

export default function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="font-bold text-xl text-center dark:text-pink-400">
        Portfolio
      </h1>
      <p className="text-center mb-8 dark:text-gray-200">
        You can click on them to see more details
      </p>
      <div className="flex flex-wrap justify-around gap-4">
        <ListPortfolio
          title="PT. HIS Corp Intern"
          image={HisCorp}
          link="his"
          description="HIS Corp is one of the best wedding planners in Jakarta, and has a branch in Bandung."
          fullDesc="HIS Corp is one of the best wedding planners in Jakarta, and has a branch in Bandung. During my internship, I worked on a website project that was built with the famous javascript stack, namelyMERN Stack. The internship process takes approximately 3 months."
          webName="https://hiscorp-internship.netlify.app/"
          webLink="https://hiscorp-internship.netlify.app/"
        />

        <ListPortfolio
          title="Aleem"
          image={Aleem}
          link="aleem"
          description="Aleem is a special application for consultation about the Islamic religion."
          fullDesc="Aleem is a special application for consultation about the Islamic religion. Where users can directly ask the Ustadz or Ustadzah related to the topic selected in the app."
          webName="aleem-app-details"
          webLink="https://pitch-mirror-52e.notion.site/Aleem-Konsultasi-Syariah-ec9143e7404e4fc0b34acfc1ed747fa3"
        />

        <ListPortfolio
          title="Store GG"
          image={StoreGG}
          link="storegg"
          description="Top up game website where players can buy coins, diamonds or the like to improve appearance and level."
          fullDesc="A site to buy coins, diamonds and more for gamers who want to enhance their gaming experience even further. In its development, I applied a headless CMS technique using Strapi. this has become my valuable experience in implementing serverless."
          webName="in development"
          webLink=""
        />
        <ListPortfolio
          title="Near Book"
          image={NearBook}
          link="nearbook"
          description="Near Book is a library application for managing the list of books we are reading, and this application is integrated with Blockchain."
          fullDesc="Near Book is a library application for managing the list of books we are reading, and this application is integrated with Blockchain."
          webName="https://near-book.vercel.app/"
          webLink="https://near-book.vercel.app/"
        />
      </div>
    </div>
  );
}
