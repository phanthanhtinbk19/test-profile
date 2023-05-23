import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "~/components/Button";
import styles from './Header.module.scss'
import images from "~/assets/images";

const cx = classNames.bind(styles);


function Header() {

   const[isCrolled, setIsCrolled] = useState(false);

   useEffect(()=>{
    const handleScroll  = () =>{
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsCrolled(scrollTop>0);
    };

    window.addEventListener('scroll', handleScroll);

    return ()=>{
        window.removeEventListener('scroll', handleScroll)
    }
   },[])

    return <header className={cx('wrapper',{'srolled':isCrolled})}>
        <div className={cx('inner', 'd-flex', 'justify-bettween')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Hoàng"></img>
            </div>
            <div className={cx('nav-menu')}>
                <ul className={cx('nav-list','d-flex' )}>
                    <li className={cx('nav-item')}>
                        <a href="#Home"><span>Home</span></a>
                        
                    </li>
                    <li className={cx('nav-item')}>
                        <a href="#About">
                            <span>About</span>
                        </a>
                    </li>
                    <li className={cx('nav-item')}>
                        <a href="#Portfolio">
                            <span>Portfolio</span>
                        </a>
                    </li>
                    <li className={cx('nav-item')}>
                        <a href="#Skills">
                            <span>Skills</span>
                        </a>
                    </li>
                    <li className={cx('nav-item')}>
                        <a href="#Experiences">
                            <span>Experiences</span>
                        </a>
                    </li>
                    <li className={cx('nav-item')}>
                        <a href="#Contact">
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={cx('d-flex', 'group-btn' ,'align-center')}>
                <div className="light-dark">
                    <button><span>dark</span></button>
                </div>
                <div className="download">
                    <button><span>download</span></button>
                </div>
            </div>
        </div>
    </header>
}

export default Header;
