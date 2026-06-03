import React from "react";

import { FaGithub,FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const FollowOn = () => {
  return (
    <div
      className="font-bold text-sm text-gray-400 pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://github.com/Ritiktomar02">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/ritiktomar02/">
          <FaLinkedin size={20} />
        </a>
        <a href="https://leetcode.com/u/ritikmsd7/">
          <SiLeetcode size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;