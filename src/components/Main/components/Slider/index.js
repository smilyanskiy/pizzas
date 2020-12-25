import React, { useState, useEffect } from 'react';
import { usePrevious } from 'utils';
import styles from './styles.css';

const slides = ([
  {
    id: 0,
    name: 'background-1',
    image: 'image/background1.jpg',
    header: 'pizza 1',
    context: 'test 1',
  },
  {
    id: 1,
    name: 'background-2',
    image: 'image/background2.jpg',
    header: 'pizza 2',
    context: 'test 2',
  },
  {
    id: 2,
    name: 'background-3',
    image: 'image/background3.jpg',
    header: 'pizza 3',
    context: 'test 3',
  }
]);

const Slider = () => {

  const [isActive, setIsActive] = useState(0);
  const prevActive = usePrevious(isActive);

  useEffect(() => {
    let timer = setInterval(() => {
      setIsActive((slides.length - 1) === isActive ? 0 : isActive + 1);
    }, 5000);
    return () => {
      clearInterval(timer);
    }
  });

  const addActiveClass = id =>
    (id === isActive && styles.active) || (id === prevActive && styles.disable) || '';

  return (
    <div className={styles.wrapper}>
      {slides.map((slide, key) => (
        <div key={`${key}_${slide.id}`}
          className={`${styles.slide} ${addActiveClass(slide.id)}`}>
          <img className={styles.slideImg} src={slide.image} alt={slide.name} />
          <div className={styles.slideContent}>
            {slide.id === isActive && (
              <div className="text-center">
                <h3 className="font-weight-light">{slide.header}</h3>
                <p className="lead">{slide.context}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
};

export default Slider;