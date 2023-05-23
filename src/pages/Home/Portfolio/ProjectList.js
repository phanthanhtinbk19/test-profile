import React from 'react';
import ProjectItem from './ProjectItem';
import portfolioSecond from '~/assets/images/portfolio-2.JPG'
import portfolioOne from '~/assets/images/portfolio-1.JPG'

const projectPreview = [
  { 
    href:"https://btngroup.vn/",
    image: `${portfolioOne}`,
    title: "BTN GROUP Design system",
    subTitle: "WEB DEVELOPMENT",
    description: (
      <div>
        <section className="markdown">
          According to BTN GROUP Design specifications, we have implemented high quality demo to build interactive user interface.
        </section>
        <h2
          id="Features"
          className="dark:text-white text-xl py-3 text-gray-800"
        >
          <span>Features</span>
        </h2>
        <ul className="led leading-5 ">
          <li className="py-1 lg:py-2 truncate">
             Enterprise-class UI designed for web applications.
          </li>
          <li className="py-1 lg:py-2 truncate">
             A set of high-quality React components out of the box.
          </li>
          <li className="py-1 lg:py-2 truncate">
            Written in TypeScript with predictable static types.
          </li>
          <li className="py-1 lg:py-2 truncate">
             Powerful theme customization in every detail.
          </li>
        </ul>
      </div>
    ),
    sliders: [
      "/images/project-preview1.png",
      "/images/project-preview1.5.png",
      "/images/project-preview1.1.png",
      "/images/project-preview1.2.png",
      "/images/project-preview1.3.png",
      "/images/project-preview1.4.png",
    ],
    skills: ["PHP", "JQUERY", "HTML", "BOOTSTRAP", "CSS"],
  },
  {
    href :"https://piaggiocongthanh.vn/",
    image: `${portfolioSecond}`,
    title: "Piaggio Công Thành",
    subTitle: "WEB AND MOBILE DEVELOPMENT",
    description: (
      <div>
        <h1>MSB Design of Flutter</h1>
        <section className="markdown">
          Based on the design of successful Piaggo's sales website, we implement user interface for website and mobile.
        </section>
      </div>
    ),
    sliders: [
      "/images/project-preview2.1.png",
      "/images/project-preview2.2.png",
      "/images/project-preview2.3.png",
      "/images/project-preview2.4.png",
    ],
    skills: ["PHP", "JQUERY", "HTML", "BOOTSTRAP", "CSS"],
  }
];
const ProductList = () => {
  return (
    <div className="py-[30px] lg:py-[100px] divide-y divide-gray-500 lg:divide-y-0">
      {projectPreview.map((item, index) => (
        <div
          key={`product-preview-${index} `}
          className="mb-0 py-10 lg:py-0 lg:mb-28"
        >
          <ProjectItem isRevertDisplay={index % 2 === 1} {...item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
