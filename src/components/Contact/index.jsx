import React from "react";
import ListLink from "./ListLink";
import icGithub from "../../assets/icons/Link/ic-github.png";
import icEmail from "../../assets/icons/Link/ic-email.png";
import icInstagram from "../../assets/icons/Link/ic-instagram.png";

export default function Contact() {
  return (
    <div class="max-w-3xl mx-auto px-4 py-10">
      <h1 class="font-bold text-xl text-center mb-8">Link</h1>
      <div class="flex flex-wrap justify-center gap-4">
        <ListLink title="@iqbalutomo" icon={icGithub} width="26" height="26" alt="GitHub" />
        <ListLink title="muhlisiqbalutomo@gmail.com" icon={icEmail} width="24" height="24" alt="Email" />
        <ListLink title="@iqbalutomo" icon={icInstagram} width="24" height="24" alt="Instagram" />
      </div>
    </div>
  );
}
