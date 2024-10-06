/* eslint-disable @next/next/no-img-element */
import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 overflow-hidden">
        <img
          src="footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Thank you for checking my website out.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me if you wanna talk more, and stay tuned for more
          updates.
        </p>
        <a href="mailto:reach.parthbhargava@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Parth
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-2 md:mt-0">
          {socialMedia.map((profile) => (
            <a key={profile.id} href={profile.link}>
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 overflow-clipped"
              >
                <img
                  src={profile.img}
                  alt={`${profile.id}`}
                  width={20}
                  height={20}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
