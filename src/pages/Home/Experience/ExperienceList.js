
import React from 'react';
import ExperienceItem from './ExperienceItem';

const experiencesData = [
  {
    title: "Bien Vang International Investment Company Limited (Bivaco)",
    role: "Front End",
    timeLine: "JULY 21 -  DEC 2022",
    durations: "July 2021 - December 2022",
    descriptions: (
      <>
        <ul className="list-disc ml-3">
          <li>
            From the design file of the designer using HTML, CSS to
            implement the interface
          </li>
          <li className="mt-2">
            Build websites with Lavalite framework and Laravel
            framework support.      
          </li>
        </ul>
      </>
    ),
    skills: ["Php", "Jquery", "Javascript"],
  },
  {
    title: "Duy Hung Technology Trading Consulting Joint Stock Company",
    role: "Hardware Engineering , Company Website Management",
    timeLine: "JAN 20 - JUN 2021",
    durations: "Jan 2020 - Jun 2021",
    descriptions: (
      <>
        <ul className="list-disc ml-3">
          <li>
            Responsible for the operation of the website. work
            directly with the website service provider.

          </li>
          <li className="mt-2">
            Sale and warranty of computer components.
            Customer care .   
          </li>
        </ul>
      </>
    ),
    skills: ["Php", "Jquery", "Javascript"],
  },
  
];

const ExperienceList = () => {
  return (
    <div id="cd-timeline" className="cd-container">
      {experiencesData.map((item, index) => (
        <ExperienceItem {...item} key={`experience-${index}`} />
      ))}
    </div>
  );
};

export default ExperienceList;