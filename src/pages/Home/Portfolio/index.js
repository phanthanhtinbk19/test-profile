import classNames from 'classnames/bind';
import styles from '../Home.module.scss';

import bgImg3 from '~/assets/images/side-effect3.webp'
import  ProductList from './ProjectList'

const cx = classNames.bind(styles)
function Portfolio() {
    return <div className={cx('container', 'relative','portfolio','m-auto')}>
    <div className={cx('absolute','top-5','left-0')}>
        <img src ={bgImg3} ></img>
    </div>
    <div className={cx('text-center','max-w-[550px]', 'mx-auto')}>
        <div className={cx('title',' mb-6')}>
            <span className="text-[20px] lg:text-[22px] text-primary font-bold mb-2">
                Portfolio
            </span>
            <h3 className='text-[30px] lg:text-[40px]'>My Amazing Works</h3>
        </div>
        <div className='text lg:mb-9 dark:text-gray-400 text-gray-600'>
            <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
        </div>
    </div>
 
    <ProductList/>

</div>
}

export default Portfolio;