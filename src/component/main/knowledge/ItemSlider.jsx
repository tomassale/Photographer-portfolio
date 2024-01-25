import { useEffect } from "react";

const ItemSlider = () => {
  useEffect(() => {
    const container = document.querySelector('.container');
    const slider = document.querySelector('.slider');

    const handleInput = (e) => {
      const value = parseInt(e.target.value);
      container.style.setProperty('--position', `${value}%`);
    };

    const handleMouseMove = (e) => {
      const containerRect = container.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const percentage = (mouseX / containerRect.width) * 100;
      const clampedPercentage = Math.min(100, Math.max(0, percentage));

      slider.value = clampedPercentage;
      container.style.setProperty('--position', `${clampedPercentage}%`);
    };

    if (container && slider) {
      slider.addEventListener('input', handleInput);
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      // Remove the event listeners when the component unmounts
      if (slider) slider.removeEventListener('input', handleInput);
      if (container) container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="itemSlider">
      <div class="container">
        <div class="imageContainer">
          <img class="imageBefore sliderImage" src="./img/kapanga/img1.jpeg" alt="After" />
          <img class="imageAfter sliderImage" src="./img/kapanga/img2.jpeg" alt="Before" />
        </div>
        <input
          class="slider"
          type="range"
          min="0"
          max="100"
          value="50"
          aria-label="Percentage of before photo show"
        />
        <div class="sliderLine"></div>
        <div class="sliderButton" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#fff"
            viewBox="0 0 256 256"
          >
            <path
              d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ItemSlider