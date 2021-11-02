import React from "react";
import ListLink from "./ListLink";
import icGithub from "../../assets/icons/Link/ic-github.png";
import icEmail from "../../assets/icons/Link/ic-email.png";
import icInstagram from "../../assets/icons/Link/ic-instagram.png";
import icLinkedin from '../../assets/icons/Link/ic-linkedin.png'

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 dark:text-gray-200">
      <h1 className="font-bold text-xl text-center mb-8 dark:text-pink-400">Link</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <ListLink title="@iqbalutomo" icon={icGithub} width="26" height="26" alt="GitHub" link="https://github.com/iqbalutomo" />
        <ListLink title="Muhlis Iqbal Utomo" icon={icLinkedin} width="26" height="26" alt="LinkedIn" link="https://www.linkedin.com/in/muhlis-iqbal-utomo-2257a2224" />
        <ListLink title="@iqbalutomo" icon={icInstagram} width="24" height="24" alt="Instagram" link="https://www.instagram.com/iqbalutomo/" />
        <ListLink title="muhlisiqbalutomo@gmail.com" icon={icEmail} width="24" height="24" alt="Email" link="mailto:muhlisiqbalutomo@gmail.com" />
      </div>
    </div>
  );
}
