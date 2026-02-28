import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, animate } from 'motion/react';

export function useCountUp(target) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 30,
    mass: 1,
  });
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const displayRef = useRef(null);

  // Update the DOM text directly from spring to avoid React re-renders
  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.round(latest);
      }
    });
    return unsubscribe;
  }, [springValue]);

  // Trigger animation when in view
  useEffect(() => {
    if (isInView) {
      animate(motionValue, target, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [isInView, motionValue, target]);

  return { ref, displayRef };
}
