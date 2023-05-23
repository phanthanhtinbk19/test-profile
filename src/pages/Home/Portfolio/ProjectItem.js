import React, { useState } from "react";
import SlideShow from "~/components/SlieShow";
import DialogComponent from "~/components/Dialog";
import Tilt from "react-parallax-tilt";
import { useBreakpoints } from "~/Hooks/useBreakPoint";

const ProjectItem = (props) => {
  const {
    image,
    title,
    subTitle,
    description,
    sliders,
    isRevertDisplay,
    skills,
    href
  } = props;
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const { isLg, isMd } = useBreakpoints();
  const onCloseDialog = () => {
    setIsOpenDialog(false);
  };
  const onOpenDialog = () => {
    setIsOpenDialog(true);
  };
  return (
    <>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 `}>
        <a
          href = {href}
          target="_blank"
          onClick={onOpenDialog}
          className={`relative ${
            isRevertDisplay ? "lg:order-2" : ""
          } self-center`}
        >
          {isLg || isMd ? (
            <Tilt>
              <img
                className="z-[1] border-shadow rounded-lg"
                src={image}
                width={650}
                height={315}
                alt="product"
                style={{ width: "100%" }}
              />
            </Tilt>
          ) : (
            <img
              className="z-[1] border-shadow rounded-lg"
              src={image}
              width={650} 
              height={315}
              alt="product"
              style={{ width: "100%" }}
            />
          )}
        </a>
        <div className="self-center">
          <div className="title lg:mb-6">
            <span className="text-[20px] lg:text-[22px] text-primary font-bold opacity-50 mb-2">
              {subTitle}
            </span>
            <h3 className="text-[30px] lg:text-[40px]">{title}</h3>
          </div>
          <div className="text wow fadeInUp lg:mb-9 dark:text-gray-400 text-gray-600">
            {description}
          </div>
          <div className="mt-3">
            {skills.length && (
              <ul className="content-skills flex text-xs gap-1 flex-wrap">
                {skills.map((item, index) => (
                  <li
                    className="p-1 bg-gray-200 dark:bg-gray-600 rounded"
                    key={`experience-skill-${index}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <DialogComponent isOpen={isOpenDialog} onClose={onCloseDialog}>
        <SlideShow slides={sliders} />
      </DialogComponent>
    </>
  );
};

export default ProjectItem;
