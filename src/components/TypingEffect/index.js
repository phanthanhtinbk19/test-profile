import React, { useState, useEffect } from 'react';
import style from './TypeEffect.module.scss'
import classNames from 'classnames/bind';


const cx = classNames.bind(style)
const TypingEffect = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const textSequences = ['Hoàng', 'a Developer','a Freelancer'];
    let timer;

    const typeText = () => {
      const currentText = textSequences[textIndex];

      if (!isDeleting) {
        if (displayText !== currentText) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
          timer = setTimeout(() => {
            setIsDeleting(false);
          }, 3000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % textSequences.length);
        }
      }
    };

    const typingInterval = setInterval(typeText, 200);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className={cx('info')}>
      <h1>{displayText}<span className={cx('border-black')}></span></h1>
    </div>
  );
};

export default TypingEffect;
