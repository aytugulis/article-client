import { LinkedinLogo, GithubLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-2 gap-2 bg-primary-700 text-white">
      <p>Contact:</p>
      <a target="_blank" href="https://www.linkedin.com/in/aytugulis">
        <LinkedinLogo
          size={28}
          weight="fill"
          color="#0072b1"
          className="hover:bg-white duration-500"
        />
      </a>
      <a target="_blank" href="https://github.com/aytugulis">
        <GithubLogo
          size={28}
          weight="fill"
          color="#333"
          className="hover:bg-white duration-500"
        />
      </a>
    </footer>
  );
};
