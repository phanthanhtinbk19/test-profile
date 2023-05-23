import React from 'react';
import bgImg3 from '~/assets/images/side-effect3.webp'
import bgImg7 from '~/assets/images/side-effect7.webp'

import ExperienceList from './ExperienceList';

const TimeLine = () => {
  return (
    <section className=" mt-36 relative" id="experiences">
      <div className="absolute top-0 right-0">
        <img
          width={350}
          height={350}
          alt="side-effect-1"
          src={bgImg7}
        />
      </div>
      <div className="container m-auto relative">
        <div className="absolute top-0 left-0">
          <img
            width={130}
            height={165}
            alt="side-effect-1"
            src={bgImg3}
          />
        </div>

        <div className="text-center max-w-[550px] m-auto">
          <div className="title mb-6">
            <span className="text-[20px] lg:text-[22px] text-primary font-bold mb-2">
              Career path
            </span>
            <h3 className="text-[30px] lg:text-[40px]">
              My work experience overall
            </h3>
          </div>
          <div className="text lg:mb-9 dark:text-gray-400 text-gray-600">
            <p>
              Overall, my experience across different companies has allowed me
              to gain a diverse skill set in web development, including
              front-end and back-end technologies.
            </p>
          </div>
        </div>
        <ExperienceList />
      </div>
    </section>
  );
};

export default TimeLine;