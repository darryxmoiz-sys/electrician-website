"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX - 3}px`;
        dotRef.current.style.top = `${mouseY - 3}px`;
      }
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${curX - 10}px`;
        cursorRef.current.style.top = `${curY - 10}px`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    const hoverEls = document.querySelectorAll("a, button, [data-hover]");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = "scale(2)";
          cursorRef.current.style.background = "rgba(255,215,0,0.15)";
        }
      });
      el.addEventListener("mouseleave", () => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = "scale(1)";
          cursorRef.current.style.background = "transparent";
        }
      });
    });

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={dotRef} className="custom-cursor-dot hidden md:block" />
    </>
  );
}
