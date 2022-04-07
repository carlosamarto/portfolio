import { useState, useEffect } from "react";

const UseScroll = () => {
  const [showButton, setShowButton] = useState(false);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [showButton]);

  return {
    showButton,
    ScrollToTop,
  };
};

export { UseScroll };
