import classNames from "classnames/bind";
import styles  from "./Button.module.scss";
import {Link} from "react-router-dom"

const cx= classNames.bind(styles)

function Button() {
    return <button className={cx('btn')}></button>;
}

export default Button;