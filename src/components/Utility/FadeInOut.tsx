import { Fragment, useEffect, useState } from "react";

interface FadeInOutProps {
  children?: JSX.Element;
  isMounted: boolean;
  className?: string;
}

const useDelayUnmount = (isMounted: boolean, delayTime: number) => {
  const [showElement, setShowElement] = useState(false);
  useEffect(() => {
    let timeoutId: number;
    if (isMounted && !showElement) {
      setShowElement(true);
    } else if (!isMounted && showElement) {
      timeoutId = setTimeout(() => {
        setShowElement(false);
      }, delayTime);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMounted, delayTime, showElement]);
  return showElement;
};

const FadeInOut = ({ children, isMounted, className }: FadeInOutProps) => {
  const showElement = useDelayUnmount(isMounted, 450);
  const mountedStyle = {
    animation: "fadeIn 350ms ease-in",
  };

  const unmountedStyle = {
    animation: "fadeOut 370ms ease-out",
    animationFillMode: "forwards",
  };

  return (
    <Fragment>
      {showElement && (
        <div
          style={isMounted ? mountedStyle : unmountedStyle}
          className={className}
        >
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default FadeInOut;
