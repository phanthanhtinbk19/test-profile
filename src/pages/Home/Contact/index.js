
import Information from "./Information";
import React from "react";
import ImgBg10 from '~/assets/images/side-effect10.webp'
import ImgBg8 from '~/assets/images/side-effect8.webp'

const Contact = () => {
  return (
    <section className="mt-36 relative" id="contact-me">
      <div className="absolute top-0 left-0">
        <img
          width={160}
          height={220}
          alt="side-effect-1"
          src={ImgBg8}
        />
      </div>
      <div className="container m-auto relative">
        <div className="absolute bottom-0 right-0">
          <img
            width={130}
            height={165}
            alt="side-effect-1"
            src={ImgBg10}
          />
        </div>

        <div className="text-center max-w-[550px] m-auto">
          <div className="title mb-6">
            <span className="text-[20px] lg:text-[22px] text-primary font-bold mb-2">
              Contact Me
            </span>
            <h3 className="text-[30px] lg:text-[40px]">
              I Want To Hear From You
            </h3>
          </div>
          <div className="text lg:mb-9 dark:text-gray-400 text-gray-600">
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-20 pb-36">
          <Information />
        </div>
      </div>
    </section>
  );
}

export default Contact;