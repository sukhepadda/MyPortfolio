import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/119193572?s=400&u=30783b14b1c17ec89de3ee52dc3ad91c3ab505f8&v=4"}
          alt="Founder"
        />

        <h2>Padda Sukhwantsingh</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://twitter.com/PSukhwantsingh" target={"blank"}>
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.instagram.com/paddasukhwantsingh/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/sukhepadda" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#homenav">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
