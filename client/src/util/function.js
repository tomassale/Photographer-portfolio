export const ImageMovement = () => {
  document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const images = document.querySelectorAll('.imageMain');

    images.forEach(image => {
      const imageRect = image.getBoundingClientRect();
      const imageCenterX = imageRect.left + imageRect.width / 2;
      const imageCenterY = imageRect.top + imageRect.height / 2;

      const deltaX = mouseX - imageCenterX;
      const deltaY = mouseY - imageCenterY;

      const displacementX = -5 * (deltaX / Math.sqrt(deltaX**2 + deltaY**2));
      const displacementY = -5 * (deltaY / Math.sqrt(deltaX**2 + deltaY**2));

      image.style.transform = `translate(${displacementX}px, ${displacementY}px)`;
    })
  })
}