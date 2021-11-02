import React from "react";
import myProfile from "../../assets/images/iqbalutomo.jpeg";

export default function About() {
  return (
    <div class="max-w-3xl mx-auto">
      <div class="py-4 rounded-xl khaki-2 text-brown text-2xl text-center font-extrabold">
        <h1>Hi, I'm Iqbal.</h1>
      </div>
      <div class="flex flex-wrap md:flex-nowrap gap-4 justify-center mt-10">
        <div class="flex flex-col md:w-1/3 items-center">
          <img src={myProfile} class="rounded-full" width="150" alt="my-profile" />
          <h2 class="font-bold text-xl mt-2">Muhlis Iqbal Utomo</h2>
          <p>Front End Developer</p>
        </div>
        <div class="flex flex-col md:w-2/3 text-justify">
          <p>
            I am Iqbal, a 23 year old Front End Developer, currently living in Depok, West Java. In October 2018 I got my first job as a web developer at a wedding company in Jakarta. In 2019 I quit my job to focus on pursuing a bachelor's
            degree in computer science and I decided to deepen my Javascript skills. In August 2021 I graduated as a computer science graduate and I successfully completed my final project using React.
          </p>
          <br />
          <p>
            From there I was very interested and focused on becoming a Front End Developer. I always want to learn more and do more. I also strongly believe that we should not be complacent. I am a hard worker, very curious, passionate,
            committed and a fast learner!
          </p>
        </div>
      </div>
    </div>
  );
}
