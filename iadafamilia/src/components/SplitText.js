import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const SplitText = ({
  text,
  className = '',
  delay = 100,
  animationFrom,
  animationTo,
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '0px',
  onLetterAnimationComplete
}) => {
  const letters = Array.from(text);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin
  });

  const trail = useTrail(letters.length, {
    from: animationFrom,
    to: inView ? animationTo : animationFrom,
    config: { tension: 120, friction: 14 },
    delay: delay,
    onRest: (_, ctrl, idx) => {
      if (idx === letters.length - 1 && onLetterAnimationComplete) {
        onLetterAnimationComplete();
      }
    }
  });

  return (
    <div ref={ref} className={className} style={{ display: 'flex' }}>
      {trail.map((style, index) => (
        <animated.span key={index} style={style}>
          {letters[index] === ' ' ? '\u00A0' : letters[index]}
        </animated.span>
      ))}
    </div>
  );
};

export default SplitText;
