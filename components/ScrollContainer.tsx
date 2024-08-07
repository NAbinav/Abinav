"use client";
// components/ScrollContainer.tsx
import React, { useEffect, ReactNode } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface ScrollContainerProps {
    children: ReactNode;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
    useEffect(() => {
        let scroll: LocomotiveScroll | undefined;

        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: document.querySelector("[data-scroll-container]") as HTMLElement,
                smooth: true,
            });
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);
    const w=window.innerWidth;
    return (
        <div data-scroll-container style={{width:w}}>
            {children}
        </div>
    );
};

export default ScrollContainer;
