import React, { useEffect } from "react";

function useGrab(target: string) {
  useEffect(() => {
    const slider = document.querySelector(target)! as HTMLDivElement;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouse = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    };
    const mouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.classList.replace("cursor-grab", "cursor-grabbing");
    };

    const mouseLeave = () => {
      isDown = false;
    };

    const mouseUp = () => {
      isDown = false;
      slider.classList.replace("cursor-grabbing", "cursor-grab");
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", onMouse);

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", onMouse);
    };
  }, []);
}

export default useGrab;
