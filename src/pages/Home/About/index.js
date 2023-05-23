import classNames from 'classnames/bind';
import styles from '../Home.module.scss';

import bgImg from '~/assets/images/side-effect1.webp'
import intro from '~/assets/images/intro-white.webp'

const cx = classNames.bind(styles)


function About() {
    return <div className={cx('container', 'relative','about','m-auto')}>
    <div className={cx('absolute','top-5','left-0')}>
        <img src ={bgImg} alt='img'/>
    </div>
    <div className="grid gap-10 lg:grid-cols-2">
        <div className={cx('left')}>
            <img alt='about-me' src={intro}/>
        </div>
        <div className={cx('right', 'self-center')}>
            <div className={cx('title')}>
                <span>I am developer</span>
                <h3>I will try to perfect what is assigned</h3>
            </div>
            <div className={cx('text')}>
                <p>
                    Hi, I'm a web developer. I am passionate about creating websites and web applications that are visually appealing, user-friendly, and optimized for performance. With 2 years of experience with HTML/CSS/JQUERY I will try to find a way to complete the assigned tasks on time.
                </p>
            </div>
            <button>
                <span>Hire Me</span>
            </button>
        </div>
    </div>
</div>
}

export default About;

