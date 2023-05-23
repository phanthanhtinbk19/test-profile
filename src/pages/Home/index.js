import classNames from "classnames/bind";
import styles from './Home.module.scss'
import bg from "~/assets/images/bannerBgImageLight.jpeg";
// import React, { useState, useEffect } from "react";
import TypingEffect from "~/components/TypingEffect";
import avatar from '~/assets/images/avatar.png';
import react from '~/assets/images/react.svg'
import html from '~/assets/images/html5.svg'
import css from '~/assets/images/css3.svg'
import bootstrap from '~/assets/images/boostrap.svg'

import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skill";
import TimeLine from "./Experience";
import Contact from "./Contact";




const cx = classNames.bind(styles)
function Home() {
    return <div className={cx('wrapper')}>
        <div className={cx('container-banner')} style = {{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize:'cover', height:'700px'}}>
            <div className={cx('container-left')}>
                <div className={cx('info')}>
                    <div className={cx('sub-title-info')}>
                        <h3>Hello I'm</h3>
                    </div>
                    <TypingEffect/>
                    <div className={cx('sub-title')}>
                        <h3>A <span className={cx('job')}>Web Developer</span><span className={cx('conntry')}> Viet Nam</span></h3>
                    </div>
                </div>
            </div>
            <div className={cx('container-right')}>
                <div className={cx('avtar')}>
                    <div className={cx('images', 'relative')}>
                        <img height="500px" src={avatar} alt="avatar"/>
                        <span className={cx('skills','skill-1','absolute','anim_moveBottom')}>
                            <img src={react} alt = "react"/>
                        </span>
                        <span className={cx('skills','skill-2','absolute','anim_moveBottom')}>
                            <img src={html} alt = "html"/>
                        </span>
                        <span className={cx('skills','skill-3','absolute','anim_moveBottom')}>
                            <img src={css} alt = "css"/>
                        </span>
                        <span className={cx('skills','skill-4','absolute','anim_moveBottom')}>
                            <img src={bootstrap} alt = "bootstrap"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className={cx('main-content','m-auto','px-4')}>
            <About/>
            <Portfolio/>
            <Skills/>
            <TimeLine/>
            <Contact/>
        </div>
        
    </div>
    
}

export default Home;