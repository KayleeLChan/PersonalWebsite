import React from 'react';
import { useSpring, animated } from 'react-spring';

const Popup = () => {
  // Define the animation properties
  const springProps = useSpring({
    from: { opacity: 0, translateY: 10 },
    to: async (next) => {
      await next({ opacity: 1, translateY: 0 });
      await next({ opacity: 0, translateY: 10 });
    },
    config: { tension: 500, friction: 30 },
    delay: 1500
  });

  return (
    <animated.div style={springProps} className="item">
      <h5>Level up!</h5>
    </animated.div>
  );
};

export default Popup;
