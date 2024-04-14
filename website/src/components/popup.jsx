import React from 'react';
import { useSpring, animated } from 'react-spring';

const Popup = ({ showPopup, setShowPopup }) => {
  // Define the animation properties
  const springProps = useSpring({
    opacity: showPopup ? 1 : 0,
    translateY: showPopup ? 0 : 10,
    from: { opacity: 0, translateX: -15, translateY: 10 },
    to: async (next) => {
      if (showPopup) {
        await next({ opacity: 1, translateX: -15, translateY: 0 });
        await next({ opacity: 0, translateX: -15, translateY: 10 });
        setShowPopup(false);
      }
    },
    config: { tension: 500, friction: 30 },
    delay: 1500,
  });

  return (
    <animated.div style={springProps} className="popup">
      <h5>Level up!</h5>
    </animated.div>
  );
};

export default Popup;
