import { useRef, useEffect, FC, CSSProperties } from "react";
import scrollReveal from "scrollreveal";
import "./ScrollReveal.css";

interface ScrollRevealProps {
  style: CSSProperties;
}

export const ScrollRevealContainer: FC<ScrollRevealProps> = ({ children, style }) => {
    const sectionRef = useRef<HTMLElement>(null);
    useEffect(() => {
      if (sectionRef.current)
        scrollReveal().reveal(sectionRef.current, {
          reset: true,
          delay: 500
        });
    }, []);
  
    return (
      <section
        ref={sectionRef}
        style={style}
        className="container scroll-section"
        data-testid="section"
      >
        {children}
      </section>
    );
  };