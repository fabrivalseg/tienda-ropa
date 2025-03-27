/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';

const BlurText = ({
  text = '',
  title = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOutCubic',
  onAnimationComplete,
}) => {
  const elementsText = animateBy === 'words' ? text.split(' ') : text.split('');
  const elementsTitle = animateBy === 'words' ? title.split(' ') : title.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
      : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

  const defaultTo = [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
    },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springsText = useSprings(
    elementsText.length,
    elementsText.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
            for (const step of (animationTo || defaultTo)) {
              await next(step);
            }
            animatedCount.current += 1;
            if (animatedCount.current === elementsText.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  const springsTitle = useSprings(
    elementsTitle.length,
    elementsTitle.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
            for (const step of (animationTo || defaultTo)) {
              await next(step);
            }
            animatedCount.current += 1;
            if (animatedCount.current === elementsText.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <div>
      {/* Título animado */}
      <h1 ref={ref} className={`blur-title ${className}`} style={{ fontSize: '2rem', color: 'white' }}>
        {springsTitle.map((props, index) => (
          <animated.span
            key={index}
            style={{
              ...props,
              display: 'inline-block',
              willChange: 'transform, filter, opacity',
            }}
          >
            {elementsTitle[index] === ' ' ? '\u00A0' : elementsTitle[index]}
            {animateBy === 'words' && index < elementsTitle.length - 1 && '\u00A0'}
          </animated.span>
        ))}
      </h1>

      {/* Texto animado */}
      <p className={`blur-text ${className}`} style={{ fontSize: '1.5rem', color: 'white' }}>
        {springsText.map((props, index) => (
          <animated.span
            key={index}
            style={{
              ...props,
              display: 'inline-block',
              willChange: 'transform, filter, opacity',
            }}
          >
            {elementsText[index] === ' ' ? '\u00A0' : elementsText[index]}
            {animateBy === 'words' && index < elementsText.length - 1 && '\u00A0'}
          </animated.span>
        ))}
      </p>
    </div>
  );
};

export default BlurText;
